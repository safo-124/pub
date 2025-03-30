'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MenuItem } from '@/lib/types';

type MenuCategoryProps = {
  title: string;
  items: MenuItem[];
  className?: string;
  variant?: 'food' | 'drink' | 'beer';
};

export function MenuCategory({ 
  title, 
  items, 
  className = '',
  variant = 'food'
}: MenuCategoryProps) {
  // Define color schemes based on variant
  const variantStyles = {
    food: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      gradient: 'from-orange-900/40'
    },
    drink: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      gradient: 'from-blue-900/40'
    },
    beer: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-600',
      button: 'bg-amber-600 hover:bg-amber-700',
      gradient: 'from-amber-900/40'
    }
  };

  // Sample food/drink images from Unsplash
  const sampleImages = {
    food: [
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d', // Jollof
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f', // Tilapia
      'https://images.unsplash.com/photo-1547592180-85f173990554', // Soup
      'https://images.unsplash.com/photo-1544025162-d76694265947', // Waakye
      'https://images.unsplash.com/photo-1559847844-5315695dadae' // Fried rice
    ],
    drink: [
      'https://images.unsplash.com/photo-1551751299-1b51cab2694c', // Cocktail
      'https://images.unsplash.com/photo-1600271886742-f049cd5bba40', // Ginger beer
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b', // Juice
      'https://images.unsplash.com/photo-1531384370597-8590413be50a' // Soda
    ],
    beer: [
      'https://images.unsplash.com/photo-1618889482923-38250401a84e', // Beer
      'https://images.unsplash.com/photo-1585621386284-99ba80a16476', // Beer glass
      'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7' // Beer bottles
    ]
  };

  // Get a random image for items without one
  const getRandomImage = (category: 'food' | 'drink' | 'beer') => {
    const images = sampleImages[category];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`${className} mb-16`}
    >
      {/* Category Header */}
      <div className="mb-12 flex items-center">
        <motion.h2 
          className="text-4xl font-bold text-blue-900 mr-6"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h2>
        <div className={`flex-1 h-1 bg-gradient-to-r ${variant === 'food' ? 'from-orange-400 to-orange-600' : variant === 'drink' ? 'from-blue-400 to-blue-600' : 'from-amber-400 to-amber-600'} rounded-full`} />
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => {
          const itemImage = item.image || getRandomImage(variant);
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className={`h-full border-2 ${variantStyles[variant].border} overflow-hidden transition-all hover:shadow-lg`}>
                {/* Image with gradient overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={itemImage}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${variantStyles[variant].gradient} to-transparent`} />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-blue-900">{item.name}</CardTitle>
                    <span className={`text-lg font-bold ${variantStyles[variant].text}`}>
                      ₵{item.price.toFixed(2)}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {/* Optional tags could go here */}
                </CardContent>

                <CardFooter className="flex justify-end">
                  <Button 
                    size="sm"
                    className={`${variantStyles[variant].button} rounded-full px-6`}
                  >
                    Add to Order
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  );
}