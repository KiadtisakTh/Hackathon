import React, { useState } from 'react';
import { Pencil, Upload, Plus, Mic } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Membership() {
  const [novelData, setNovelData] = useState({
    title: '',
    description: '',
    category: 'Novel',
    postType: 'Novel', // New field for post type
    coverImage: null as File | null,
    audioFile: null as File | null,
    content: ''
  });

  const postTypes = [
    'Novel',
    'Article',
    'News'
  ];

  const categories = {
    Novel: [
      'Romance',
      'Fantasy',
      'Mystery',
      'Science Fiction',
      'Adventure',
      'Drama'
    ],
    Article: [
      'Technology',
      'Culture',
      'Lifestyle',
      'Education',
      'Health',
      'Business'
    ],
    News: [
      'Breaking News',
      'Politics',
      'Sports',
      'Entertainment',
      'Economy',
      'World'
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the content creation logic with Supabase
    console.log('Content data:', novelData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNovelData(prev => ({ ...prev, coverImage: e.target.files![0] }));
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNovelData(prev => ({ ...prev, audioFile: e.target.files![0] }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-8">Create New Content</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Post Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Post Type
              </label>
              <select
                value={novelData.postType}
                onChange={(e) => {
                  setNovelData(prev => ({
                    ...prev,
                    postType: e.target.value,
                    category: categories[e.target.value as keyof typeof categories][0]
                  }));
                }}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {postTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={novelData.title}
                onChange={(e) => setNovelData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
              />
            </div>

            {/* Category based on Post Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={novelData.category}
                onChange={(e) => setNovelData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {categories[novelData.postType as keyof typeof categories].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Audio File
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <Mic className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload audio</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="audio/*"
                        onChange={handleAudioChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    MP3, WAV up to 50MB
                  </p>
                  {!novelData.audioFile && (
                    <p className="text-sm text-black">
                      No audio yet? <a href="https://voice.botnoi.ai/" target="_blank" class="text-blue-600 hover:text-blue-700 cursor-pointer mt-2">Record here</a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={novelData.description}
                onChange={(e) => setNovelData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={novelData.content}
                onChange={(e) => setNovelData(prev => ({ ...prev, content: e.target.value }))}
                rows={10}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your content here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Content
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}