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

// Local soup images mapping
const localSoupImages: Record<string, string> = {
  'Fufu': '/soup/fufu.jpg',
  'Konkonte': '/soup/konkonte.jpg',
  'Banku': '/soup/banku.jpg',
  'Rice Ball': '/soup/rice bal.jpg',
  'Snail Soup': '/soup/snai soup.jpg',
  'Akrantie Nkwan': '/soup/Akrantie Nkwan.jpeg',
  'Goat Soup': '/soup/goat soup.jpg',
  'Abunabun Soup': '/soup/abunabun soup.jpg',
  'Fish Fresh': '/soup/Fish fresh.jpg',
  'Okra Soup': '/soup/okra soup.jpg',
  'Tilapia Soup': '/soup/tilpia soup.jpg',
  'Chicken Light Soup': '/soup/chicken light soup.jpg',
  'Palmnut Soup': '/soup/palmnut soup.jpeg',
  'Groundnut Soup': '/soup/groundnut soup.jpg'
};

export function MenuCategory({ 
  title, 
  items, 
  className = '',
  variant = 'food'
}: MenuCategoryProps) {
  // Enhanced color schemes with better contrast
  const variantStyles = {
    food: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-700',
      button: 'bg-orange-600 hover:bg-orange-700 text-white',
      gradient: 'from-orange-900/70 to-transparent',
      accent: 'bg-orange-100'
    },
    drink: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      gradient: 'from-blue-900/70 to-transparent',
      accent: 'bg-blue-100'
    },
    beer: {
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      text: 'text-amber-700',
      button: 'bg-amber-600 hover:bg-amber-700 text-white',
      gradient: 'from-amber-900/70 to-transparent',
      accent: 'bg-amber-100'
    }
  };

  // Get the appropriate local image for each item
  const getLocalImage = (itemName: string) => {
    const matchedKey = Object.keys(localSoupImages).find(key => 
      itemName.toLowerCase().includes(key.toLowerCase())
    );
    return matchedKey ? localSoupImages[matchedKey] : '/soup/fufu.jpg';
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
          className="text-4xl font-bold text-gray-800 mr-6"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h2>
        <div className={`flex-1 h-1 bg-gradient-to-r ${variantStyles[variant].gradient} rounded-full`} />
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item, index) => {
          const itemImage = item.image || getLocalImage(item.name);
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className={`h-full border-2 ${variantStyles[variant].border} overflow-hidden transition-all hover:shadow-xl flex flex-col`}>
                {/* Image with gradient overlay */}
                <div className="relative h-56 w-full overflow-hidden group">
                  <Image
                    src={itemImage}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 4}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${variantStyles[variant].gradient} to-transparent`} />
                  {/* Price tag overlay */}
                  <div className={`absolute top-4 right-4 ${variantStyles[variant].accent} px-3 py-1 rounded-full shadow-md`}>
                    <span className={`font-bold ${variantStyles[variant].text}`}>
                      ₵{item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-gray-800 font-semibold">{item.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{item.description}</p>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-0">
                  <Button 
                    size="sm"
                    variant="outline"
                    className={`border ${variantStyles[variant].border} ${variantStyles[variant].text} hover:${variantStyles[variant].bg} rounded-full px-4`}
                  >
                    Details
                  </Button>
                  <Button 
                    size="sm"
                    className={`${variantStyles[variant].button} rounded-full px-6 shadow-md hover:shadow-lg`}
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