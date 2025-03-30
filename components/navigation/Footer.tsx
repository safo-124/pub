'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="w-4 h-4" />, name: 'Instagram', url: '#' },
    { icon: <Twitter className="w-4 h-4" />, name: 'Twitter', url: '#' }
  ];

  const quickLinks = ['Menu', 'Book', 'Order', 'Events'];
  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: '123 Gloryland St, Accra' },
    { icon: <Phone className="w-4 h-4" />, text: '+233 123 456 789' },
    { icon: <Mail className="w-4 h-4" />, text: 'info@glorylandpub.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">Gloryland Good & Pub</h3>
            <p className="text-sm text-blue-100">
              Authentic Ghanaian cuisine in a vibrant pub atmosphere
            </p>
            
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -2 }}
                  className="bg-blue-800 hover:bg-orange-500 rounded-full p-2 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase()}`} 
                    className="flex items-center gap-1 text-sm text-blue-100 hover:text-orange-300 transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-400" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-blue-100">
                  <span className="text-orange-400 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Newsletter</h3>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-blue-800 border border-blue-700 rounded px-3 py-2 text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
              <Button 
                type="submit"
                size="sm"
                className="bg-orange-600 hover:bg-orange-700 text-sm py-2"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Gloryland Good & Pub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}