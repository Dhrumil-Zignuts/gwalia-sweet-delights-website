
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">🍯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Gwalia Sweets</h3>
                <p className="text-sm opacity-90">Since 1994</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Serving authentic Indian sweets and snacks across Gujarat for over 29 years. 
              A taste of tradition in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/menu" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                Our Menu
              </Link>
              <Link to="/locations" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                Store Locations
              </Link>
              <Link to="/gallery" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 opacity-90" />
                <div>
                  <p className="text-sm">+91 79 2630 1234</p>
                  <p className="text-sm">+91 79 2630 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 opacity-90" />
                <p className="text-sm">info@gwaliasweets.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 opacity-90" />
                <p className="text-sm">Multiple outlets across Gujarat</p>
              </div>
            </div>
          </div>

          {/* Social Media & Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold">Opening Hours</h5>
              <p className="text-sm opacity-90">Mon - Sun: 8:00 AM - 10:00 PM</p>
              <p className="text-sm opacity-90">Festival days: 7:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Gwalia Sweets. All rights reserved. | Made with ❤️ for the love of sweets
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
