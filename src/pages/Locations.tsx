
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Vastrapur Flagship Store',
      address: 'Shop 15-16, Vastrapur Lake Garden, Ahmedabad - 380054',
      phone: '+91 79 2630 1234',
      hours: '8:00 AM - 10:00 PM',
      specialties: ['Full Range', 'Fresh Sweets', 'Party Orders'],
      isMainStore: true,
      city: 'Ahmedabad'
    },
    {
      id: 2,
      name: 'Navrangpura Branch',
      address: 'C.G. Road, Navrangpura, Ahmedabad - 380009',
      phone: '+91 79 2630 5678',
      hours: '8:30 AM - 9:30 PM',
      specialties: ['Sweets', 'Namkeen', 'Fast Food'],
      isMainStore: false,
      city: 'Ahmedabad'
    },
    {
      id: 3,
      name: 'Prahladnagar Outlet',
      address: 'Prahladnagar Corporate Road, Ahmedabad - 380015',
      phone: '+91 79 2630 9012',
      hours: '8:00 AM - 10:00 PM',
      specialties: ['Office Catering', 'Quick Snacks', 'Beverages'],
      isMainStore: false,
      city: 'Ahmedabad'
    },
    {
      id: 4,
      name: 'Surat Main Store',
      address: 'Ring Road, Citylight, Surat - 395007',
      phone: '+91 261 2345 678',
      hours: '8:00 AM - 10:00 PM',
      specialties: ['Full Range', 'Wedding Orders', 'Gift Boxes'],
      isMainStore: true,
      city: 'Surat'
    },
    {
      id: 5,
      name: 'Adajan Branch',
      address: 'VIP Road, Adajan, Surat - 395009',
      phone: '+91 261 2345 890',
      hours: '8:30 AM - 9:30 PM',
      specialties: ['Sweets', 'Ice Cream', 'Cold Drinks'],
      isMainStore: false,
      city: 'Surat'
    },
    {
      id: 6,
      name: 'Baroda Central',
      address: 'Sayajigunj, Vadodara - 390005',
      phone: '+91 265 2789 012',
      hours: '8:00 AM - 10:00 PM',
      specialties: ['Traditional Sweets', 'Festival Specials'],
      isMainStore: true,
      city: 'Vadodara'
    },
    {
      id: 7,
      name: 'Rajkot Branch',
      address: 'Kalawad Road, Rajkot - 360005',
      phone: '+91 281 2567 890',
      hours: '8:30 AM - 9:30 PM',
      specialties: ['Local Favorites', 'Kathiyawadi Specials'],
      isMainStore: false,
      city: 'Rajkot'
    },
    {
      id: 8,
      name: 'Bhavnagar Outlet',
      address: 'ST Bus Stand Road, Bhavnagar - 364001',
      phone: '+91 278 2345 123',
      hours: '8:00 AM - 9:30 PM',
      specialties: ['Travel Snacks', 'Quick Bites'],
      isMainStore: false,
      city: 'Bhavnagar'
    }
  ];

  const cities = [...new Set(locations.map(loc => loc.city))];

  const getDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-6">
            Our <span className="text-primary">Locations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Visit any of our 15+ outlets across Gujarat to experience the authentic taste 
            of tradition. Each store offers fresh sweets and snacks made daily.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <Badge key={city} variant="secondary" className="px-4 py-2 text-sm">
                📍 {city}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card 
                key={location.id}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  location.isMainStore ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Store Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-serif text-foreground mb-1">
                        {location.name}
                      </h3>
                      <Badge 
                        className={`text-xs ${
                          location.isMainStore 
                            ? 'bg-primary text-white' 
                            : 'bg-secondary text-primary'
                        }`}
                      >
                        {location.isMainStore ? 'Main Store' : 'Branch'}
                      </Badge>
                    </div>
                    <div className="text-2xl">🏪</div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {location.address}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{location.hours}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.specialties.map((specialty, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button 
                      size="sm"
                      onClick={() => getDirections(location.address)}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(`tel:${location.phone}`)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">
              Find Us on <span className="text-primary">Map</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Locate the nearest Gwalia Sweets outlet for fresh sweets and authentic flavors
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-2">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Click on any store location above to get directions via Google Maps, 
                  or use the map integration for a complete view of all our outlets.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://www.google.com/maps/search/Gwalia+Sweets+Gujarat', '_blank')}
                >
                  View All Locations on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Hours & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-serif text-foreground mb-2">Store Hours</h3>
                <p className="text-muted-foreground mb-2">Regular: 8:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground">Festivals: 7:00 AM - 11:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-serif text-foreground mb-2">Customer Care</h3>
                <p className="text-muted-foreground mb-2">+91 79 2630 1234</p>
                <p className="text-muted-foreground">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-serif text-foreground mb-2">Coverage Area</h3>
                <p className="text-muted-foreground mb-2">15+ Outlets across Gujarat</p>
                <p className="text-muted-foreground">Expanding to more cities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
