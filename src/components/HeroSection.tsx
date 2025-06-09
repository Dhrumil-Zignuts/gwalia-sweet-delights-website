
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-accent to-festival-red min-h-screen flex items-center overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 pattern-bg opacity-30"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-300 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-pink-300 rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
                A Taste of
                <span className="block text-secondary animate-sparkle">Tradition</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Serving authentic Indian sweets & snacks across Gujarat since 1994
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-lg">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>29+ Years of Sweet Tradition</span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Multiple Outlets Across Gujarat</span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Fresh Daily Preparations</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary text-primary hover:bg-yellow-300 font-semibold text-lg px-8 py-4 group"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Find Store
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-lg font-medium">+91 79 2630 1234</span>
              </div>
              <div className="text-secondary text-2xl">•</div>
              <div className="text-lg">
                <span className="opacity-75">Open:</span>
                <span className="font-medium ml-2">8 AM - 10 PM</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Sweets */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Sweet Item Cards */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float">
                <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🧈</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">Kaju Katli</h3>
                <p className="text-sm text-muted-foreground">Premium cashew delight</p>
                <p className="text-primary font-bold mt-2">₹650/kg</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-full h-32 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🍯</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">Mohanthal</h3>
                <p className="text-sm text-muted-foreground">Traditional gram flour sweet</p>
                <p className="text-primary font-bold mt-2">₹480/kg</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-full h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🥛</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">Rasmalai</h3>
                <p className="text-sm text-muted-foreground">Spongy milk dumplings</p>
                <p className="text-primary font-bold mt-2">₹320/kg</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🧅</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">Khakhra</h3>
                <p className="text-sm text-muted-foreground">Crispy wheat crackers</p>
                <p className="text-primary font-bold mt-2">₹180/kg</p>
              </div>
            </div>

            {/* Special offer badge */}
            <div className="absolute -top-4 -right-4 bg-festival-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              Festival Special!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
