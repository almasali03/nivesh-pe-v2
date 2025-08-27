import React, { useState } from 'react';
import { Menu, X, Download, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NiveshPe</h1>
              <p className="text-xs text-blue-600 -mt-1">Chhoti Bachat, Bada Sapna</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Stories</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://wa.me/919203355033"
              className="flex items-center space-x-2 px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <Download size={16} />
              <span className="text-sm font-medium">Download App</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-700 hover:text-blue-600 py-2">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 py-2">Stories</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 py-2">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                <a
                  href="https://wa.me/919203355033"
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-green-600 border border-green-600 rounded-lg"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                >
                  <Download size={16} />
                  <span>Download App</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;