
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Locations', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-accent shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center animate-sparkle">
              <span className="text-xl font-bold text-primary">🍯</span>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold font-serif">Gwalia Sweets</h1>
              <p className="text-xs opacity-90">Since 1994</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-secondary transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-secondary' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white text-sm">
              <Phone className="w-4 h-4" />
              <span>+91 79 2630 1234</span>
            </div>
            <Button 
              variant="secondary" 
              className="bg-secondary text-primary hover:bg-yellow-300 font-semibold"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-secondary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-foreground hover:bg-secondary/20 rounded-md font-medium ${
                    location.pathname === item.path ? 'bg-secondary/30' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex items-center px-3 py-2 text-sm text-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 79 2630 1234
                </div>
                <Button className="mx-3 mb-2 w-auto bg-primary">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
