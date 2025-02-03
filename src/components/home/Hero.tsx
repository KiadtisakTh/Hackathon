import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendedItems = [
    { title: 'ซายาโนะ', category: 'นิยายรัก', image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667' },
    { title: 'ภูติในม่านหมอก', category: 'แฟนตาซี', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d' },
    { title: 'บอสมินิ', category: 'สืบสวน', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendedItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendedItems.length) % recommendedItems.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-navy-900">
      {/* Box 1: Hero Content */}
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl bg-white/90 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unlocking The World For Everyone To Explore
            </h1>
            <p className="text-lg text-gray-900 mb-2">
              "เปิดประตูสู่โลกกว้างให้ทุกคนได้สัมผัส"
            </p>
            <p className="text-gray-600 mb-6">
              Welcome to Premium Content Audio. Your daily dose of news, insights, and entertainment is just a click away.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Box 2: Carousel Section */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">กระแสแรงตอนนี้</h2>
            <div className="flex space-x-2">
              <button onClick={prevSlide} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-4xl font-bold mb-2">{num}</div>
                <h3 className="font-semibold mb-1">แสดงมีมีชู</h3>
                <p className="text-sm text-gray-600">จริงหรือไม่?</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Box 3: Top 10 Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">10 อันดับ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
                  alt={`Top ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-gray-400 text-sm">#{index + 1}</span>
                  <h3 className="text-white text-lg font-semibold mt-1">Title {index + 1}</h3>
                  <p className="text-gray-400">Category</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Box 4: Blog Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Blog แนะนำ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-2">
                    GOVERNMENT
                  </span>
                  <h3 className="text-lg font-semibold mb-2">นายกคนปัจจุบันดีหรือไม่?</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">20.9K</span>
                    <span>100</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    เพราะนายกปัจจุบันแบบว่าไม่ค่อยโดดเด่นเลย แก้ปัญหาไม่ค่อยได้ ผลงานก็ไม่ค่อยดี...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Box 5: About Us Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
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
              {[
                {
                  name: 'John Smith',
                  role: 'Developer',
                  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
                },
                {
                  name: 'Michael Johnson',
                  role: 'Developer',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
                },
                {
                  name: 'David Wilson',
                  role: 'UX/UI Designer',
                  image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d'
                },
                {
                  name: 'Emma Davis',
                  role: 'UX/UI Designer',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
                }
              ].map((member, index) => (
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
        </div>
      </div>
    </div>
  );
}
