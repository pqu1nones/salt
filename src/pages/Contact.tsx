import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row pt-16">
      {/* Left Side - Roses */}
      <div className="hidden md:block w-1/8 sticky top-16 h-[calc(100vh-4rem)]">
        <img 
          src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80" 
          alt="Red Roses"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1">
        <div className="bg-gray-50 min-h-[calc(100vh-4rem)] py-20 px-4">
          <Map />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}