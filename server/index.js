import express from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import cors from 'cors';
import winston from 'winston';
import { body, validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/contact', limiter);

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 's4cfrontline@gmail.com',
    pass: process.env.EMAIL_PASSWORD // Set this in .env file
  }
});

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().trim().escape(),
  body('message').trim().notEmpty().escape()
];

// Contact form endpoint
app.post('/api/contact', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error('Validation error', { errors: errors.array() });
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, message } = req.body;

    // Email options
    const mailOptions = {
      from: 'pquinones@gmail.com',
      to: 'pquinones@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log success
    logger.info('Email sent successfully', {
      sender: email,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    // Log error
    logger.error('Error sending email', {
      error: error.message,
      timestamp: new Date().toISOString()
    });

    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});