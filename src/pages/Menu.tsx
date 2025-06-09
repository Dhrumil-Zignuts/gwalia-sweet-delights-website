
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, Filter } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'sweets', name: 'Sweets', icon: '🍯' },
    { id: 'namkeen', name: 'Namkeen', icon: '🥨' },
    { id: 'fastfood', name: 'Fast Food', icon: '🍛' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = [
    // Sweets
    { id: 1, name: 'Kaju Katli', category: 'sweets', price: 650, unit: 'kg', rating: 4.9, image: '🧈', description: 'Premium cashew diamonds with silver foil', badge: 'Bestseller', bgColor: 'from-yellow-400 to-orange-500' },
    { id: 2, name: 'Mohanthal', category: 'sweets', price: 480, unit: 'kg', rating: 4.8, image: '🍯', description: 'Rich gram flour sweet with ghee', badge: 'Traditional', bgColor: 'from-amber-400 to-orange-600' },
    { id: 3, name: 'Rasmalai', category: 'sweets', price: 320, unit: 'kg', rating: 4.7, image: '🥛', description: 'Soft cottage cheese in flavored milk', badge: 'Fresh', bgColor: 'from-pink-300 to-rose-400' },
    { id: 4, name: 'Gulab Jamun', category: 'sweets', price: 280, unit: 'kg', rating: 4.6, image: '🍮', description: 'Soft milk dumplings in sugar syrup', badge: 'Popular', bgColor: 'from-orange-400 to-red-500' },
    { id: 5, name: 'Rasgulla', category: 'sweets', price: 260, unit: 'kg', rating: 4.5, image: '⚪', description: 'Spongy cottage cheese balls', badge: 'Light', bgColor: 'from-blue-300 to-cyan-400' },
    { id: 6, name: 'Jalebi', category: 'sweets', price: 220, unit: 'kg', rating: 4.4, image: '🟡', description: 'Crispy spirals soaked in syrup', badge: 'Crispy', bgColor: 'from-yellow-300 to-orange-400' },

    // Namkeen
    { id: 7, name: 'Khakhra', category: 'namkeen', price: 180, unit: 'kg', rating: 4.5, image: '🧅', description: 'Crispy wheat flatbread', badge: 'Healthy', bgColor: 'from-orange-400 to-red-500' },
    { id: 8, name: 'Bhujia', category: 'namkeen', price: 220, unit: 'kg', rating: 4.3, image: '🍜', description: 'Spicy gram flour noodles', badge: 'Spicy', bgColor: 'from-red-400 to-pink-500' },
    { id: 9, name: 'Chakri', category: 'namkeen', price: 200, unit: 'kg', rating: 4.4, image: '🌀', description: 'Spiral rice flour snack', badge: 'Crunchy', bgColor: 'from-green-400 to-teal-500' },
    { id: 10, name: 'Fafda', category: 'namkeen', price: 160, unit: 'kg', rating: 4.2, image: '📏', description: 'Crispy gram flour strips', badge: 'Classic', bgColor: 'from-yellow-400 to-lime-500' },

    // Fast Food
    { id: 11, name: 'Dhokla', category: 'fastfood', price: 200, unit: 'kg', rating: 4.6, image: '🟡', description: 'Steamed gram flour cake', badge: 'Healthy', bgColor: 'from-lime-400 to-green-500' },
    { id: 12, name: 'Khandvi', category: 'fastfood', price: 240, unit: 'kg', rating: 4.5, image: '🌯', description: 'Rolled gram flour sheets', badge: 'Delicate', bgColor: 'from-green-300 to-emerald-400' },
    { id: 13, name: 'Thepla', category: 'fastfood', price: 180, unit: 'kg', rating: 4.3, image: '🫓', description: 'Spiced flatbread with fenugreek', badge: 'Nutritious', bgColor: 'from-emerald-400 to-teal-500' },
    { id: 14, name: 'Dabeli', category: 'fastfood', price: 25, unit: 'piece', rating: 4.4, image: '🥪', description: 'Spiced potato burger', badge: 'Street Food', bgColor: 'from-orange-300 to-red-400' },

    // Beverages
    { id: 15, name: 'Masala Chai', category: 'beverages', price: 15, unit: 'cup', rating: 4.5, image: '☕', description: 'Traditional spiced tea', badge: 'Hot', bgColor: 'from-orange-300 to-brown-400' },
    { id: 16, name: 'Lassi', category: 'beverages', price: 40, unit: 'glass', rating: 4.4, image: '🥤', description: 'Yogurt-based drink', badge: 'Refreshing', bgColor: 'from-blue-300 to-cyan-400' },
    { id: 17, name: 'Fresh Lime', category: 'beverages', price: 25, unit: 'glass', rating: 4.2, image: '🍋', description: 'Fresh lime water', badge: 'Tangy', bgColor: 'from-lime-300 to-green-400' },

    // Desserts
    { id: 18, name: 'Ice Cream Kulfi', category: 'desserts', price: 35, unit: 'piece', rating: 4.6, image: '🍦', description: 'Traditional Indian ice cream', badge: 'Cold', bgColor: 'from-pink-300 to-purple-400' },
    { id: 19, name: 'Rabri', category: 'desserts', price: 280, unit: 'kg', rating: 4.5, image: '🍯', description: 'Thick sweetened milk', badge: 'Rich', bgColor: 'from-yellow-300 to-orange-400' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Bestseller': 'bg-green-500',
      'Traditional': 'bg-orange-500',
      'Fresh': 'bg-blue-500',
      'Popular': 'bg-purple-500',
      'Light': 'bg-cyan-500',
      'Crispy': 'bg-yellow-500',
      'Healthy': 'bg-emerald-500',
      'Spicy': 'bg-red-500',
      'Crunchy': 'bg-amber-500',
      'Classic': 'bg-indigo-500',
      'Delicate': 'bg-pink-500',
      'Nutritious': 'bg-teal-500',
      'Street Food': 'bg-orange-600',
      'Hot': 'bg-red-600',
      'Refreshing': 'bg-blue-600',
      'Tangy': 'bg-lime-600',
      'Cold': 'bg-cyan-600',
      'Rich': 'bg-amber-600'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-6">
            Our Delicious <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our extensive collection of authentic Gujarati sweets, savory snacks, 
            and traditional delicacies made fresh daily with premium ingredients.
          </p>
        </div>
      </section>

      {/* Menu Section */}
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

            {/* Filter Results */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Showing {filteredItems.length} items
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Prices are inclusive of all taxes
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-0">
                    {/* Item Image */}
                    <div className={`relative h-40 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
                      <span className="text-5xl animate-float">{item.image}</span>
                      <Badge 
                        className={`absolute top-3 right-3 ${getBadgeColor(item.badge)} text-white border-0 text-xs`}
                      >
                        {item.badge}
                      </Badge>
                    </div>

                    {/* Item Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold font-serif text-foreground mb-2">
                        {item.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium text-foreground">{item.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">(50+ reviews)</span>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-primary">₹{item.price}</span>
                          <span className="text-sm text-muted-foreground ml-1">/{item.unit}</span>
                        </div>
                        <Button 
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-white group-hover:scale-105 transition-transform"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
                <p className="text-muted-foreground">Try selecting a different category</p>
              </div>
            )}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call our experts for personalized recommendations or visit our nearest store 
            to taste before you buy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Call Now: +91 79 2630 1234
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
              Find Nearest Store
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
