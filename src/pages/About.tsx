
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1994', title: 'Founded', description: 'Started with a single shop in Ahmedabad' },
    { year: '2000', title: 'First Expansion', description: 'Opened second outlet in Vastrapur' },
    { year: '2008', title: 'Multi-city Presence', description: 'Expanded to Surat and Baroda' },
    { year: '2015', title: 'Modern Facilities', description: 'State-of-the-art production unit' },
    { year: '2020', title: 'Online Presence', description: 'Launched home delivery services' },
    { year: '2024', title: '15+ Outlets', description: 'Serving customers across Gujarat' }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Quality First',
      description: 'Using only the finest ingredients sourced from trusted suppliers across India.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Family Tradition',
      description: 'Recipes passed down through generations, preserving authentic flavors.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in taste and hygiene.'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Fresh Daily',
      description: 'All our sweets and snacks are prepared fresh every day.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">Since 1994</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-6">
              Our Sweet <span className="text-primary">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              For nearly three decades, Gwalia Sweets has been Gujarat's beloved destination for 
              authentic Indian sweets and snacks. What started as a small family business has grown 
              into a cherished brand across the state.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground">
                A Legacy of <span className="text-primary">Sweetness</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 1994, with a dream to bring authentic Gujarati flavors to every home, 
                  we opened our first small shop in Ahmedabad. Armed with traditional family 
                  recipes and an unwavering commitment to quality, we began our journey.
                </p>
                <p>
                  Today, Gwalia Sweets has become synonymous with trust, quality, and tradition. 
                  Our master chefs continue to use the same time-honored techniques, ensuring 
                  that every sweet carries the authentic taste that our customers have loved 
                  for generations.
                </p>
                <p>
                  From festival celebrations to everyday indulgences, we take pride in being 
                  part of Gujarat's sweet traditions and creating moments of joy for families 
                  across the state.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-serif">29+</div>
                    <p className="text-sm opacity-90">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-serif">15+</div>
                    <p className="text-sm opacity-90">Store Locations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-serif">100+</div>
                    <p className="text-sm opacity-90">Varieties</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-serif">10K+</div>
                    <p className="text-sm opacity-90">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">
              Our <span className="text-primary">Milestones</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key moments that shaped our journey over the years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide us in delivering the best to our customers every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-serif text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To preserve and share the authentic flavors of Gujarat by crafting the finest 
            sweets and snacks using traditional recipes, premium ingredients, and modern 
            hygiene standards. We strive to bring families together through the joy of 
            sharing delicious food and creating sweet memories.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
