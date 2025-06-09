
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Heart, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'sweets', name: 'Sweets', icon: '🍯' },
    { id: 'stores', name: 'Our Stores', icon: '🏪' },
    { id: 'kitchen', name: 'Kitchen', icon: '👨‍🍳' },
    { id: 'festivals', name: 'Festivals', icon: '🎉' },
    { id: 'customers', name: 'Happy Customers', icon: '😊' }
  ];

  const galleryItems = [
    // Sweets
    { id: 1, category: 'sweets', title: 'Premium Kaju Katli Collection', description: 'Silver-foiled cashew diamonds arranged in elegant gift boxes', emoji: '🧈', bgColor: 'from-yellow-400 to-orange-500' },
    { id: 2, category: 'sweets', title: 'Fresh Mohanthal Display', description: 'Traditional gram flour sweets with rich ghee aroma', emoji: '🍯', bgColor: 'from-amber-400 to-orange-600' },
    { id: 3, category: 'sweets', title: 'Rasmalai Delight', description: 'Soft spongy dumplings floating in flavored milk', emoji: '🥛', bgColor: 'from-pink-300 to-rose-400' },
    { id: 4, category: 'sweets', title: 'Festival Sweets Platter', description: 'Assorted sweets for Diwali celebrations', emoji: '🍮', bgColor: 'from-purple-400 to-pink-500' },
    { id: 5, category: 'sweets', title: 'Gulab Jamun Heaven', description: 'Perfectly round milk dumplings in sugar syrup', emoji: '🟤', bgColor: 'from-orange-400 to-red-500' },
    { id: 6, category: 'sweets', title: 'Jalebi Spirals', description: 'Crispy golden spirals soaked in sweet syrup', emoji: '🟡', bgColor: 'from-yellow-300 to-orange-400' },

    // Stores
    { id: 7, category: 'stores', title: 'Vastrapur Flagship Store', description: 'Our main store with complete range of products', emoji: '🏪', bgColor: 'from-blue-400 to-indigo-500' },
    { id: 8, category: 'stores', title: 'Modern Display Counters', description: 'Hygienic glass displays showcasing fresh sweets', emoji: '🪟', bgColor: 'from-cyan-400 to-blue-500' },
    { id: 9, category: 'stores', title: 'Traditional Store Decor', description: 'Authentic Gujarati ambiance with modern facilities', emoji: '🎨', bgColor: 'from-green-400 to-teal-500' },
    { id: 10, category: 'stores', title: 'Gift Packaging Section', description: 'Beautiful boxes and containers for every occasion', emoji: '🎁', bgColor: 'from-pink-400 to-purple-500' },

    // Kitchen
    { id: 11, category: 'kitchen', title: 'Master Chef at Work', description: 'Skilled artisans preparing traditional sweets', emoji: '👨‍🍳', bgColor: 'from-orange-400 to-red-500' },
    { id: 12, category: 'kitchen', title: 'Fresh Milk Processing', description: 'Quality milk being processed for sweets', emoji: '🥛', bgColor: 'from-blue-300 to-cyan-400' },
    { id: 13, category: 'kitchen', title: 'Traditional Cooking Methods', description: 'Using age-old techniques for authentic taste', emoji: '🔥', bgColor: 'from-red-400 to-orange-500' },
    { id: 14, category: 'kitchen', title: 'Quality Control', description: 'Maintaining highest standards of hygiene', emoji: '✅', bgColor: 'from-green-400 to-emerald-500' },

    // Festivals
    { id: 15, category: 'festivals', title: 'Diwali Special Display', description: 'Festive arrangements for the festival of lights', emoji: '🪔', bgColor: 'from-yellow-400 to-orange-500' },
    { id: 16, category: 'festivals', title: 'Raksha Bandhan Sweets', description: 'Special sweet boxes for brother-sister celebration', emoji: '🎀', bgColor: 'from-pink-400 to-red-500' },
    { id: 17, category: 'festivals', title: 'Holi Color Sweets', description: 'Colorful sweets matching the festival vibes', emoji: '🌈', bgColor: 'from-purple-400 to-pink-500' },
    { id: 18, category: 'festivals', title: 'Navratri Special Menu', description: 'Fasting-friendly sweets and snacks', emoji: '🕺', bgColor: 'from-orange-400 to-yellow-500' },

    // Customers
    { id: 19, category: 'customers', title: 'Family Celebrations', description: 'Families enjoying our sweets during festivities', emoji: '👨‍👩‍👧‍👦', bgColor: 'from-green-400 to-blue-500' },
    { id: 20, category: 'customers', title: 'Customer Testimonials', description: 'Happy faces of satisfied customers', emoji: '😊', bgColor: 'from-yellow-400 to-green-500' },
    { id: 21, category: 'customers', title: 'Wedding Orders', description: 'Large orders for wedding celebrations', emoji: '💑', bgColor: 'from-pink-400 to-purple-500' },
    { id: 22, category: 'customers', title: 'Corporate Events', description: 'Office celebrations with our sweet boxes', emoji: '🏢', bgColor: 'from-blue-400 to-indigo-500' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const testimonials = [
    {
      name: 'Priya Patel',
      city: 'Ahmedabad',
      quote: 'Gwalia Sweets has been our go-to place for 15 years. The quality never disappoints!',
      rating: 5
    },
    {
      name: 'Rajesh Shah',
      city: 'Surat', 
      quote: 'Best Mohanthal in entire Gujarat! Takes me back to my childhood memories.',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      city: 'Vadodara',
      quote: 'Perfect for wedding orders. They maintained quality even for 500+ boxes.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <Badge className="bg-primary text-white px-4 py-2">Photo Gallery</Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-6">
            Sweet <span className="text-primary">Memories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the visual journey of our delicious creations, traditional cooking methods, 
            beautiful stores, and the smiling faces of our satisfied customers.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center space-y-1 py-4"
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-xs font-medium">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div className={`relative h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center overflow-hidden`}>
                      <span className="text-6xl animate-float group-hover:scale-110 transition-transform duration-300">
                        {item.emoji}
                      </span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No photos found</h3>
                <p className="text-muted-foreground">Try selecting a different category</p>
              </div>
            )}
          </Tabs>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground">
                Customer <span className="text-primary">Love</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what our customers say about their sweet experiences with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-6">
            Visit Our Store & <span className="text-primary">Create Memories</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the sights, smells, and tastes that make Gwalia Sweets special. 
            Come create your own sweet memories with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
              Find Nearest Store
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Order Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
