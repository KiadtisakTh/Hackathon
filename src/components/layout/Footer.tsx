import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Michael Johnson',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'David Wilson',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Emma Davis',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We believe in creating opportunities for everyone to access quality content anytime, anywhere. 
            With cutting-edge technology and a professional team, we are committed to developing and delivering 
            the best experience for our users.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
            <Mail className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-center">contact@audioprime.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
            <Phone className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">02-123-4567</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
            <MapPin className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-300 text-center">
              123 Digital Building, 15th Floor<br />
              Sukhumvit Road, Klongtoey<br />
              Bangkok 10110, Thailand
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2025 AudioPrime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}