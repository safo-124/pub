'use client';

import { MENU_ITEMS, DRINK_ITEMS } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

const menuImages = {
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

export default function MenuPage() {
  // Enhance items with local images
  const allItems = [
    ...MENU_ITEMS.map(item => ({
      ...item,
      image: Object.keys(menuImages).find(key => 
        item.name.toLowerCase().includes(key.toLowerCase())
      ) ? menuImages[Object.keys(menuImages).find(key => 
        item.name.toLowerCase().includes(key.toLowerCase())) as keyof typeof menuImages] 
      : '/soup/fufu.jpg',
      type: item.category === 'soup' ? 'Soup' : 'Main'
    })),
    ...DRINK_ITEMS.map(item => ({
      ...item,
      image: '/soup/Fish fresh.jpg', // Default drink image
      type: 'Drink'
    }))
  ];

  const soupItems = allItems.filter(item => item.type === 'Soup');
  const mainItems = allItems.filter(item => item.type === 'Main');
  const drinkItems = allItems.filter(item => item.type === 'Drink');

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Taste of Ghana
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-amber-100 max-w-2xl"
          >
            Authentic flavors prepared with traditional recipes
          </motion.p>
        </div>
        <Image
          src="/soup/palmnut soup.jpeg"
          alt="Ghanaian cuisine"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Soups Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mr-6">Traditional Soups</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soupItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-orange-200"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-orange-600">₵{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Dishes Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mr-6">Main Dishes</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-amber-200"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-amber-600">₵{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Drinks Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mr-6">Refreshing Drinks</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinkItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-200"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-blue-600">₵{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Experience the authentic taste of Ghana in our welcoming atmosphere
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold">
              Book a Table
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
              Call Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}