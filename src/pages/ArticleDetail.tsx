import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, User, Eye } from 'lucide-react';

export function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock article data - in a real app, this would come from your database
  const article = {
    id: 1,
    title: "The next global superpower isn't who you think",
    content: `Who runs the world? Political scientist Ian Bremmer argues it's not as simple as it used to be. With some eye-opening questions about the nature of leadership, he asks us to consider the impact of the evolving global order and our choices as participants in the future of democracy.

    In today's rapidly changing world, the traditional notion of global superpowers is being challenged. The rise of new economic powerhouses, technological advancements, and shifting geopolitical dynamics are reshaping the international landscape in unprecedented ways.

    The emergence of artificial intelligence, blockchain technology, and other innovations is creating new centers of power that transcend traditional national boundaries. This transformation is not just about military might or economic strength, but about the ability to influence and shape the future of human civilization.

    Key factors driving this change include:

    1. Technological Innovation
    - Artificial Intelligence and Machine Learning
    - Quantum Computing
    - Renewable Energy Technologies

    2. Economic Shifts
    - Digital Economies
    - Sustainable Development
    - Global Trade Networks

    3. Social Transformations
    - Digital Connectivity
    - Cultural Exchange
    - Global Citizenship

    The implications of these changes are far-reaching and will affect everything from international relations to individual daily lives. As we move forward, it's crucial to understand these dynamics and prepare for a future that may look very different from what we've known.`,
    author: {
      name: 'Ian Bremmer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    category: 'GLOBAL ISSUES',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620',
    views: 13000000,
    readTime: 14,
    publishedDate: '2 years ago'
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
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
          <span>Back to Articles</span>
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded text-sm mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center justify-between text-gray-600 mb-6">
              <div className="flex items-center">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.publishedDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <Eye className="h-4 w-4 mr-1" />
                <span>{(article.views / 1000000).toFixed(1)}M views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
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