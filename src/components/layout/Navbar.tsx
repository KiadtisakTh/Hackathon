import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function Navbar() {
  const { user, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="ml-2 text-white font-semibold text-lg">AudioPrime</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/articles" className="text-gray-300 hover:text-white">Articles</Link>
            <Link to="/novels" className="text-gray-300 hover:text-white">Novels</Link>
            <Link to="/news" className="text-gray-300 hover:text-white">News</Link>
            <Link to="/status" className="text-gray-300 hover:text-white">Posts</Link>
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-300 hover:text-white focus:outline-none"
                >
                  <User className="h-5 w-5 mr-1" />
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      View Profile
                    </Link>
                    <Link to="/payment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Manage Payment
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Settings
                    </Link>
                    <button onClick={signOut} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-left w-full">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Sign In
                </Link>
                <Link to="/register" className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
