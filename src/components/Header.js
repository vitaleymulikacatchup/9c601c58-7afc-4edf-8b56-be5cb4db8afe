import React from 'react';
import { Menu, X, ChevronDown, Star } from 'lucide-react';

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sargas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <a href="#contacts" className="text-gray-700 hover:text-gray-900 font-medium">Contacts</a>
          </nav>

          {/* Clutch Rating & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-dark-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-red-500 text-red-500" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-600">Based on 6 Clutch reviews</span>
              </div>
            </div>
            <button className="btn-secondary">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;