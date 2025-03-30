'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';

export default function Navbar() {
  const pathname = usePathname();
  
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Book Table', href: '/book' },
    { name: 'Order', href: '/order' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold flex items-center">
            <motion.span 
              className="text-orange-400 mr-1"
              whileHover={{ rotate: [0, -10, 10, 0] }}
            >
              Gloryland
            </motion.span>
            <span>Good & Pub</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {links.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <MobileNav links={links} />
        </motion.div>
      </div>
    </header>
  );
}