'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, GlassWater, UtensilsCrossed, Users } from 'lucide-react';

const offers = [
  {
    title: "Happy Hour",
    description: "50% off all drinks from 4pm-7pm weekdays",
    highlight: "primary",
    icon: <GlassWater className="w-8 h-8" />,
  },
  {
    title: "Weekend Special",
    description: "Buy 2 main dishes get 1 free every Saturday",
    highlight: "secondary",
    icon: <UtensilsCrossed className="w-8 h-8" />,
  },
  {
    title: "Family Bundle",
    description: "4 soups + 4 main dishes + 4 drinks for ₵200",
    highlight: "accent",
    icon: <Users className="w-8 h-8" />,
  },
];

export function SpecialOffers() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-amber-50 to-amber-100/30 relative">
      {/* Floating decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 w-72 h-72 rounded-full bg-orange-400/20 blur-3xl" />
      </motion.div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-amber-900 sm:text-5xl">
            Exclusive <span className="text-orange-600">Dining Offers</span>
          </h2>
          <p className="text-xl text-amber-800/80">
            Discover limited-time deals to enhance your Gloryland experience
          </p>
        </motion.div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
            >
              <Card className={`h-full border-0 shadow-sm overflow-hidden transition-all duration-300 group relative ${
                offer.highlight === 'primary' ? 'bg-amber-50 hover:shadow-orange-200' :
                offer.highlight === 'secondary' ? 'bg-orange-50 hover:shadow-amber-200' :
                'bg-amber-100/50 hover:shadow-orange-300'
              }`}>
                {/* Hover effect background */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    offer.highlight === 'primary' ? 'bg-gradient-to-br from-amber-100/80 to-amber-50/80' :
                    offer.highlight === 'secondary' ? 'bg-gradient-to-br from-orange-100/80 to-orange-50/80' :
                    'bg-gradient-to-br from-amber-200/80 to-amber-100/80'
                  }`}
                />
                
                {/* Card content */}
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-3 rounded-lg transition-all duration-300 group-hover:shadow-inner ${
                        offer.highlight === 'primary' ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-200' :
                        offer.highlight === 'secondary' ? 'bg-orange-100 text-orange-600 group-hover:bg-orange-200' :
                        'bg-amber-200 text-amber-700 group-hover:bg-amber-300'
                      }`}
                    >
                      {offer.icon}
                    </motion.div>
                    <CardTitle className={`text-2xl font-semibold transition-colors duration-300 ${
                      offer.highlight === 'primary' ? 'text-amber-900 group-hover:text-amber-800' :
                      offer.highlight === 'secondary' ? 'text-orange-900 group-hover:text-orange-800' :
                      'text-amber-950 group-hover:text-amber-900'
                    }`}>
                      {offer.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <CardDescription className={`text-lg mb-6 transition-colors duration-300 ${
                    offer.highlight === 'primary' ? 'text-amber-800/90 group-hover:text-amber-800' :
                    offer.highlight === 'secondary' ? 'text-orange-800/90 group-hover:text-orange-800' :
                    'text-amber-900/90 group-hover:text-amber-900'
                  }`}>
                    {offer.description}
                  </CardDescription>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      variant="link" 
                      size="lg"
                      className={`p-0 group gap-1 transition-colors duration-300 ${
                        offer.highlight === 'primary' ? 'text-amber-600 hover:text-amber-700' :
                        offer.highlight === 'secondary' ? 'text-orange-600 hover:text-orange-700' :
                        'text-amber-700 hover:text-amber-800'
                      }`}
                    >
                      Claim offer
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            View All Special Offers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}