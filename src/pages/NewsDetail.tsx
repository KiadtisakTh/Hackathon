import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, User } from 'lucide-react';

export function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock news data - in a real app, this would come from your database
  const news = {
    id: 1,
    title: 'Thai Swimmer Breaks Asian Games Record',
    content: `Thai national swimming team makes history by breaking records and winning gold medals at the 2024 Asian Games.

    In a stunning display of athletic prowess, the Thai national swimming team has achieved an unprecedented victory at the 2024 Asian Games. The team's performance has not only secured multiple gold medals but has also set new records that showcase Thailand's growing prominence in international sports.

    Key Achievements:
    - Three new Asian Games records in freestyle events
    - Five gold medals in various swimming categories
    - Strong performances from both veteran and emerging athletes

    The success of the Thai swimming team represents years of dedicated training and strategic development of the country's swimming program. Coaches and athletes alike have worked tirelessly to reach this level of excellence.

    Impact on Thai Sports:
    - Increased funding for swimming programs
    - Growing interest in swimming among Thai youth
    - Enhanced international recognition for Thai athletics

    The victory has sparked nationwide celebration and renewed interest in swimming as a competitive sport. Local swimming clubs report increased enrollment, and sports authorities are planning to expand training facilities across the country.

    Looking Forward:
    The team's success at the Asian Games positions Thailand strongly for upcoming international competitions, including the Olympics. Sports analysts predict this could mark the beginning of a new era for Thai swimming.`,
    source: 'CNN Indonesia',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    timestamp: '2 Hours Ago',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  };

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">News not found</h1>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="h-6 w-6" />
          <span>Back to News</span>
        </button>

        {/* News Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {news.category}
              </span>
              <span className="text-gray-500 text-sm">{news.timestamp}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center text-gray-600">
              <img
                src={news.author.avatar}
                alt={news.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{news.author.name}</p>
                <p className="text-sm">{news.source}</p>
              </div>
            </div>
          </div>
        </div>

        {/* News Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}