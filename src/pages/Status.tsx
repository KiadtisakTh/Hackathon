import React, { useState } from 'react';
import { Search, Clock, User, ThumbsUp, MessageCircle } from 'lucide-react';

interface Status {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  category: string;
}

export function Status() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Review', 'Question', 'Recommendation'];

  const statuses: Status[] = [
    {
      id: 1,
      user: {
        name: 'John Smith',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      },
      content: 'Just finished listening to "Moonlight Shadow". Absolutely amazing! The storytelling and narration are top-notch. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
      timestamp: '2024-03-15T10:30:00',
      likes: 245,
      comments: 42,
      category: 'Review'
    },
    {
      id: 2,
      user: {
        name: 'Emma Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      },
      content: 'Any recommendations for fantasy audiobooks? Looking for something new to listen to!',
      timestamp: '2024-03-15T09:15:00',
      likes: 156,
      comments: 38,
      category: 'Question'
    },
    {
      id: 3,
      user: {
        name: 'William Turner',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      },
      content: 'Check out "The Dragon King" - a new release with excellent audio quality and engaging story.',
      image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699',
      timestamp: '2024-03-15T08:45:00',
      likes: 324,
      comments: 56,
      category: 'Recommendation'
    }
  ];

  const filteredStatuses = statuses.filter(status => {
    const matchesSearch = status.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || status.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Search and Categories */}
        <div className="mb-6">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search posts..."
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
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Create Status */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Your avatar"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Post
            </button>
          </div>
        </div>

        {/* Status List */}
        <div className="space-y-6">
          {filteredStatuses.map((status) => (
            <div key={status.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={status.user.avatar}
                    alt={status.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{status.user.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(status.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                  {status.category}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{status.content}</p>
              {status.image && (
                <img
                  src={status.image}
                  alt="Status image"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center hover:text-blue-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {status.likes}
                  </button>
                  <button className="flex items-center hover:text-blue-600">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {status.comments}
                  </button>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  Add Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}