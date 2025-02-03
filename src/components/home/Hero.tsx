import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export function Hero() {
  // Example data for Recommended For You and Top 10
  const recommendedItems = [
    { title: 'เรื่องราวแห่งความรัก', category: 'นิยายรัก', image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667' },
    { title: 'ผจญภัยในดินแดนแห่งจินตนาการ', category: 'แฟนตาซี', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d' },
    { title: 'ปริศนาห้องสมุด', category: 'สืบสวน', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794' },
  ];

  const topItems = [
    { rank: 1, title: 'เรื่องราวแห่งความรัก', category: 'นิยายรัก' },
    { rank: 2, title: 'ผจญภัยในดินแดนแห่งจินตนาการ', category: 'แฟนตาซี' },
    { rank: 3, title: 'ปริศนาห้องสมุด', category: 'สืบสวน' },
    { rank: 4, title: 'ความลับแห่งดวงดาว', category: 'ไซไฟ' },
    { rank: 5, title: 'เส้นทางนักรบ', category: 'แอคชั่น' },
    { rank: 6, title: 'การผจญภัยในป่า', category: 'แฟนตาซี' },
    { rank: 7, title: 'ชีวิตนักสืบ', category: 'สืบสวน' },
    { rank: 8, title: 'การต่อสู้เพื่ออิสรภาพ', category: 'แอคชั่น' },
    { rank: 9, title: 'โลกแห่งจินตนาการ', category: 'แฟนตาซี' },
    { rank: 10, title: 'ปริศนาผีในโรงเรียน', category: 'สยองขวัญ' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendedItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendedItems.length) % recommendedItems.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-navy-900">

      {/* Box 1: Hero Content with Background Image */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlocking The World For Everyone To Explore</h1>
            <p className="text-lg text-gray-600 mb-2">"Opening doors to a wider world for everyone to experience"</p>
            <p className="text-gray-600 mb-6">
              Welcome to Premium Content Audio. Your daily dose of news, insights, and entertainment is just a click away.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Box 2: Recommended For You Section (Full width) */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">แนะนำสำหรับคุณ</h2>
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {recommendedItems.map((item, index) => (
                  <div key={index} className="min-w-full h-full p-2">
                    <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="inline-block bg-blue-600 px-2 py-1 rounded-full text-xs mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <button className="bg-white text-gray-900 px-4 py-1 rounded text-sm hover:bg-gray-100 transition-colors">
                            อ่านเพิ่มเติม
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {recommendedItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Box 3: Top 10 Section with Titles and Images */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 อันดับ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topItems.map((item) => (
              <div key={item.rank} className="bg-gray-900 text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{item.rank}. {item.title}</h3>
                <p className="text-sm text-blue-400">{item.category}</p>
                <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" alt={item.title} className="mt-4 w-full h-48 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Box 4: Blog Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog แนะนำ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">บทความ 1</h3>
              <p className="text-sm text-gray-600">เรื่องราวที่น่าสนใจเกี่ยวกับนิยายและบทความในหมวดต่างๆ</p>
              <button className="mt-4 text-blue-500 hover:text-blue-700">อ่านเพิ่มเติม</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">บทความ 2</h3>
              <p className="text-sm text-gray-600">สรุปเหตุการณ์สำคัญในวงการนิยายและข่าวสารที่น่าสนใจ</p>
              <button className="mt-4 text-blue-500 hover:text-blue-700">อ่านเพิ่มเติม</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">บทความ 3</h3>
              <p className="text-sm text-gray-600">คอลัมน์ข่าวสารล่าสุดจากวงการนิยายและบทความทั่วไป</p>
              <button className="mt-4 text-blue-500 hover:text-blue-700">อ่านเพิ่มเติม</button>
            </div>
          </div>
        </div>
      </div>

      {/* Box 5: About Us Section */}
      <div className="text-center mt-auto py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We are a passionate team committed to delivering quality content and experiences. 
          With a focus on technology and creativity, we aim to empower individuals and organizations 
          by providing them with cutting-edge solutions in the world of audio and media. 
          Join us as we continue to innovate and make a lasting impact.
        </p>
      </div>
    </div>
  );
}
