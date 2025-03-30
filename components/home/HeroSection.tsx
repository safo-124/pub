'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900/95 to-blue-950">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 opacity-10">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.05,
              type: 'spring'
            }}
            className={`${
              i % 4 === 0 ? 'bg-orange-400' : 
              i % 3 === 0 ? 'bg-amber-500' : 
              'bg-blue-400'
            } rounded-sm`}
          />
        ))}
      </div>

      {/* Food Image Collage */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 p-4">
        {/* Main featured image (top left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative col-span-3 row-span-3 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/food/jollof.webp"
            alt="Jollof Rice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-transparent to-transparent" />
        </motion.div>

        {/* Secondary image (top right) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative col-span-2 row-span-2 rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/food/coconut-rice.webp"
            alt="Coconut Rice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 to-transparent" />
        </motion.div>

        {/* Tertiary image (middle right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative col-span-2 row-span-2 rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/food/plain-rice.png"
            alt="Plain Rice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
        </motion.div>

        {/* Accent image (bottom left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative col-span-2 row-span-2 rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://sybaritica.me/wp-content/uploads/2021/04/Grilled-Tilapia-01.jpg"
            alt="Grilled Tilapia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        </motion.div>
      </div>

      {/* Content Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full w-full bg-gradient-to-r from-blue-900/70 via-blue-900/30 to-transparent"
      >
        <div className="container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-orange-400">Gloryland</span> Good & Pub
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl mt-4 text-blue-100"
              >
                Authentic Ghanaian flavors in a vibrant pub atmosphere
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Menu
                </motion.a>
              </Button>
              
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-lg"
              >
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Table
                </motion.a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-blue-200 mb-2">Discover More</p>
          <ChevronDown className="h-6 w-6 text-orange-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}