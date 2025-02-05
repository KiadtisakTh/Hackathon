import React, { useState } from 'react';
import { Search, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  source: string;
  category: string;
  image: string;
  timestamp: string;
  isHot?: boolean;
}

export function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Sports',
    'Technology',
    'Entertainment',
    'Finance',
    'Education',
    'Health'
  ];

  const newsItems: NewsItem[] = [
    // Hot Topic
    {
      id: 1,
      title: 'Thai Swimmer Breaks Asian Games Record',
      content: 'Thai national swimming team makes history by breaking records and winning gold medals at the 2024 Asian Games',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
      timestamp: '2 Hours Ago',
      isHot: true
    },
    // Latest News
    {
      id: 2,
      title: 'International Fencing Championship',
      content: 'Asian Fencing Championship hosted in Bangkok',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1614886137686-181bab6ae68f',
      timestamp: '1 Hour Ago'
    },
    {
      id: 3,
      title: 'Global Marathon Event',
      content: 'International runners gather in Bangkok for marathon competition',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5',
      timestamp: '1 Hour Ago'
    },
    {
      id: 4,
      title: 'Youth Swimming Competition',
      content: 'Thai youth showcase exceptional performance in swimming competition',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487',
      timestamp: '1 Hour Ago'
    },
    {
      id: 5,
      title: 'Olympic Swimming Preparation',
      content: 'Thai swimming team prepares for upcoming Olympics',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
      timestamp: '1 Hour Ago'
    },
    {
      id: 6,
      title: 'NBA Basketball Tournament',
      content: 'Weekly highlights from NBA basketball matches',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc',
      timestamp: '1 Hour Ago'
    },
    {
      id: 7,
      title: 'World Surfing Championship',
      content: 'Thai surfer makes waves in international competition',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f',
      timestamp: '1 Hour Ago'
    },
    {
      id: 8,
      title: 'Long Distance Cycling Race',
      content: 'Thai cyclist wins Asian championship title',
      source: 'CNN Indonesia',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182',
      timestamp: '1 Hour Ago'
    }
  ];

  const hotTopic = newsItems.find(item => item.isHot);
  const latestNews = newsItems.filter(item => !item.isHot);

  const filteredNews = latestNews.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Categories */}
        <div className="mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Hot Topics */}
        {hotTopic && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Hot Topics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={hotTopic.image}
                  alt={hotTopic.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{hotTopic.title}</h3>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{hotTopic.timestamp}</span>
                      <span className="mx-2">•</span>
                      <span>{hotTopic.source}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-4">Breaking News</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {hotTopic.content}
                  </p>
                  <Link to={`/news/${hotTopic.id}`} className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Latest News */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNews.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{item.timestamp}</span>
                      <span className="mx-2">•</span>
                      <span>{item.source}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}