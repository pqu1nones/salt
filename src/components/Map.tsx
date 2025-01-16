import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9557863793325!2d-118.15543692427297!3d33.78283457326446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31699a0844c5%3A0x814dc7f9e34f0768!2s3048%20E%20Anaheim%20St%2C%20Long%20Beach%2C%20CA%2090804!5e0!3m2!1sen!2sus!4v1710374400000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}