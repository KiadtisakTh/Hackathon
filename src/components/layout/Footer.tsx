import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© 2025 AudioPrime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
