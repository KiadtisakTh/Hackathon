import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667',
      alt: 'Slide 1'
    },
    {
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
      alt: 'Slide 2'
    },
    {
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      alt: 'Slide 3'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const topTenItems = [
    {
      id: 1,
      title: 'เทคโนโลยี AI กับการศึกษาไทย',
      category: 'เทคโนโลยี',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
      views: '89.5K'
    },
    {
      id: 2,
      title: 'วิกฤตโลกร้อนกับการเกษตร',
      category: 'สิ่งแวดล้อม',
      image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699',
      views: '76.2K'
    },
    {
      id: 3,
      title: 'อนาคตการท่องเที่ยวไทย',
      category: 'ท่องเที่ยว',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
      views: '65.8K'
    },
    {
      id: 4,
      title: 'ตลาดคริปโตกับคนรุ่นใหม่',
      category: 'การเงิน',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d',
      views: '58.3K'
    },
    {
      id: 5,
      title: 'วัฒนธรรมอาหารไทยสู่สากล',
      category: 'วัฒนธรรม',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
      views: '52.9K'
    },
    {
      id: 6,
      title: 'การแพทย์ไทยก้าวไกลระดับโลก',
      category: 'สุขภาพ',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c',
      views: '47.4K'
    }
  ];

  const blogItems = [
    {
      title: 'อนาคตการศึกษาไทยในยุคดิจิทัล',
      category: 'EDUCATION',
      views: '25.3K',
      comments: '152',
      excerpt: 'การเปลี่ยนแปลงของระบบการศึกษาไทยในยุคดิจิทัล การปรับตัวของครูและนักเรียน...'
    },
    {
      title: 'เศรษฐกิจไทยกับการฟื้นตัวหลังโควิด',
      category: 'ECONOMY',
      views: '18.7K',
      comments: '98',
      excerpt: 'วิเคราะห์แนวโน้มการฟื้นตัวของเศรษฐกิจไทยหลังสถานการณ์โควิด-19...'
    },
    {
      title: 'นวัตกรรมการเกษตรเพื่อความยั่งยืน',
      category: 'AGRICULTURE',
      views: '15.9K',
      comments: '86',
      excerpt: 'เทคโนโลยีและนวัตกรรมใหม่ในภาคการเกษตร เพื่อความยั่งยืนและผลผลิตที่ดีขึ้น...'
    },
    {
      title: 'การท่องเที่ยวไทยรูปแบบใหม่',
      category: 'TOURISM',
      views: '22.1K',
      comments: '134',
      excerpt: 'แนวทางการท่องเที่ยวรูปแบบใหม่ที่ตอบโจทย์นักท่องเที่ยวยุคปัจจุบัน...'
    },
    {
      title: 'พลังงานสะอาดเพื่ออนาคต',
      category: 'ENVIRONMENT',
      views: '19.5K',
      comments: '112',
      excerpt: 'การพัฒนาพลังงานสะอาดในประเทศไทย และผลกระทบต่อสิ่งแวดล้อม...'
    },
    {
      title: 'วัฒนธรรมไทยในสายตาชาวโลก',
      category: 'CULTURE',
      views: '16.8K',
      comments: '94',
      excerpt: 'มุมมองของชาวต่างชาติที่มีต่อวัฒนธรรมไทย และการเผยแพร่สู่สากล...'
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-navy-900 ">
      {/* Box 1: Hero Content */}
      <div className="relative h-screen flex items-center ">
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

      {/* Box 2: Image Slider */}
      <div className="bg-gray-900 py-16">
      <div className="relative bg-gray-900">
        <div className="relative h-[400px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 h-full" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Box 3: Top 10 Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">กระแสมาแรงตอนนี้</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topTenItems.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-gray-400 text-sm">#{item.id}</span>
                  <h3 className="text-white text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-gray-400">{item.category}</p>
                  <div className="mt-2 text-sm text-gray-500">{item.views} views</div>
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
            {blogItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">{item.views}</span>
                    <span>{item.comments}</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {item.excerpt}
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