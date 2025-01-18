import React, { useState } from 'react';
import {
  Menu,
  X,
  Cross,
  Users,
  Calendar,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

// Website showcase data
const websites = [
  {
    title: 'Soldiers 4 Christ',
    description: 'A welcoming congregation focused on Biblical teaching and community outreach',
    image: './src/images/rose.jpg',
    url: 'https://s4ctroops.com',
  },
  {
    title: 'Our Current Reality',
    description: 'Empowering youth through faith-based education and mentorship',
    image: './src/images/rose.jpg0',
    url: 'https://ourcurrentreality.com',
  },
  {
    title: 'Hope & Healing Center',
    description: 'Faith-based counseling and support services for families',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'New Life Fellowship',
    description: 'Building bridges between faith and everyday life',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Kingdom Kids Academy',
    description:
      'Christian education nurturing both faith and academic excellence',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Faithful Foundations',
    description:
      'Supporting families through Christ-centered marriage and parenting resources',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Harvest Food Ministry',
    description:
      'Serving the community through food assistance and spiritual support',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Veterans Faith Alliance',
    description:
      'Supporting veterans through faith-based community and resources',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Sacred Arts Studio',
    description: 'Expressing faith through visual arts and creativity',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Lighthouse Recovery',
    description: 'Christ-centered addiction recovery and support services',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Faith & Fitness',
    description: 'Wellness program combining physical and spiritual health',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Global Missions Network',
    description: 'Connecting local churches with global mission opportunities',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Digital Disciples',
    description: 'Leveraging technology for modern ministry and outreach',
    image: './src/images/rose.jpg',
    url: '#',
  },
  {
    title: 'Prayer Warriors United',
    description: '24/7 prayer ministry supporting global prayer requests',
    image: './src/images/rose.jpg',
    url: '#',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus({
        type: 'success',
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Cross className="w-8 h-8 text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="w-12 h-12 border-2 border-gray-900 rounded-full"></div>
              </div>
              <div>
                <span className="font-semibold text-xl tracking-wider">
                  S.A.L.T
                </span>
                <span className="block text-xs text-gray-500 leading-tight">
                  Sanctified Ambassadors Living Truth
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#events" className="text-gray-600 hover:text-gray-900">
                Events
              </a>
              <a href="#showcase" className="text-gray-600 hover:text-gray-900">
                Showcase
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <nav className="flex flex-col px-4 py-2">
              <a href="#" className="py-2 text-gray-600">
                Home
              </a>
              <a href="#about" className="py-2 text-gray-600">
                About
              </a>
              <a href="#events" className="py-2 text-gray-600">
                Events
              </a>
              <a href="#showcase" className="py-2 text-gray-600">
                Showcase
              </a>
              <a href="#contact" className="py-2 text-gray-600">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row pt-16">
        {/* Left Side - Fixed Image */}
        <div className="hidden md:block w-1/8 fixed top-16 h-[calc(100vh-4rem)]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        {/* Add a spacer div to maintain layout */}
        <div className="hidden md:block w-1/8" />

        {/* Content */}
        <div className="flex-1">
          {/* Hero Section */}
          <div
            className="h-[calc(100vh-4rem)] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="text-center text-white px-4 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Forging Faith Together
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Building strong men through fellowship, discipleship, and
                service to Christ.
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Get Involved
              </button>
            </div>
          </div>

          {/* Website Showcase Grid */}
          <section
            className="py-20 px-4 bg-gray-50"
            id="showcase"
            aria-label="Showcase"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Showcase</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {websites.map((site, index) => (
                  <a
                    key={index}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    aria-label={`Visit ${site.title} website`}
                  >
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={site.image}
                        alt={`Preview of ${site.title} website`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {site.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {site.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Key Information Section */}
          <div className="max-w-6xl mx-auto py-20 px-4" id="about">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Meeting Times */}
              <div className="space-y-4">
                <Calendar className="w-8 h-8 text-gray-900" />
                <h2 className="text-2xl font-semibold">Meeting Times</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Sundays at 7:00 AM</p>
                  <p>Wednesdays at 6:30 PM</p>
                  <p>Monthly Breakfast: First Saturday</p>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="space-y-4" id="events">
                <Users className="w-8 h-8 text-gray-900" />
                <h2 className="text-2xl font-semibold">Upcoming Events</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Men's Retreat - March 15-17</p>
                  <p>Service Project - April 2</p>
                  <p>Bible Study Series - Ongoing</p>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <MapPin className="w-8 h-8 text-gray-900" />
                <h2 className="text-2xl font-semibold">Location</h2>
                <div className="space-y-2 text-gray-600">
                  <p>3048 East Anaheim Street</p>
                  <p>Long Beach, California 90804</p>
                  <p>877-426-9778 Ext 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 py-20 px-4" id="contact">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Get in Touch
              </h2>
              {formStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white py-12 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <p className="text-center text-gray-600">
                © 2024 S.A.L.T Ministry. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
