
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kaju Katli",
      category: "Premium Sweets",
      price: "₹650",
      unit: "per kg",
      rating: 4.9,
      image: "🧈",
      bgColor: "from-primary to-accent",
      description: "Pure cashew diamonds with silver foil",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Mohanthal",
      category: "Traditional Sweets", 
      price: "₹480",
      unit: "per kg",
      rating: 4.8,
      image: "🍯",
      bgColor: "from-accent to-primary",
      description: "Rich gram flour sweet with ghee",
      badge: "Traditional"
    },
    {
      id: 3,
      name: "Rasmalai",
      category: "Milk Sweets",
      price: "₹320",
      unit: "per kg", 
      rating: 4.7,
      image: "🥛",
      bgColor: "from-muted to-primary",
      description: "Soft cottage cheese in flavored milk",
      badge: "Fresh Daily"
    },
    {
      id: 4,
      name: "Dhokla",
      category: "Snacks",
      price: "₹200",
      unit: "per kg",
      rating: 4.6,
      image: "🟡",
      bgColor: "from-primary to-muted",
      description: "Steamed gram flour cake",
      badge: "Healthy"
    },
    {
      id: 5,
      name: "Gujiya",
      category: "Festival Special",
      price: "₹420",
      unit: "per kg",
      rating: 4.8,
      image: "🥟",
      bgColor: "from-accent to-primary",
      description: "Crispy dumplings with sweet filling",
      badge: "Festival"
    },
    {
      id: 6,
      name: "Khakhra",
      category: "Namkeen",
      price: "₹180",
      unit: "per kg",
      rating: 4.5,
      image: "🧅",
      bgColor: "from-primary to-accent",
      description: "Crispy wheat flatbread",
      badge: "Crunchy"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'bg-primary';
      case 'Traditional': return 'bg-accent';
      case 'Fresh Daily': return 'bg-primary';
      case 'Healthy': return 'bg-accent';
      case 'Festival': return 'bg-primary';
      case 'Crunchy': return 'bg-accent';
      default: return 'bg-primary';
    }
  };

  return (
    <section className="py-16 bg-background pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            Our <span className="text-primary">Bestsellers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handcrafted with love using traditional recipes passed down through generations. 
            Each sweet tells a story of Gujarat's rich culinary heritage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className={`relative h-48 bg-gradient-to-br ${product.bgColor} flex items-center justify-center`}>
                  <span className="text-6xl animate-float">{product.image}</span>
                  <Badge 
                    className={`absolute top-3 right-3 ${getBadgeColor(product.badge)} text-white border-0`}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground font-medium">{product.category}</p>
                    <h3 className="text-xl font-bold font-serif text-foreground">{product.name}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="ml-1 text-sm font-medium text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">(250+ reviews)</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white group-hover:scale-105 transition-transform"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-semibold text-lg px-8 py-4"
          >
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
