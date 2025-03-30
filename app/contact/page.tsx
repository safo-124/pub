// app/contact/page.tsx
import { ContactForm } from '@/components/contact/ContactForm';
import { Phone, MapPin, Clock, Mail, Facebook, X, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="text-orange-400">Us</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We'd love to hear from you! Reach out for reservations, questions, or feedback.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Get in <span className="text-orange-600">Touch</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-wine mb-1">Our Location</h3>
                  <p className="text-gray-700">
                    123 Gloryland Street<br />
                    Osu, Accra<br />
                    Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-wine mb-1">Phone</h3>
                  <p className="text-gray-700">
                    +233 123 456 789<br />
                    +233 987 654 321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-wine mb-1">Email</h3>
                  <p className="text-gray-700">
                    info@glorylandpub.com<br />
                    reservations@glorylandpub.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-wine mb-1">Opening Hours</h3>
                  <p className="text-gray-700">
                    <span className="font-medium">Monday - Thursday:</span> 11:00 AM - 10:00 PM<br />
                    <span className="font-medium">Friday - Saturday:</span> 11:00 AM - 12:00 AM<br />
                    <span className="font-medium">Sunday:</span> 12:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h3 className="text-lg font-bold text-wine mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-800 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                  <X className="w-5 h-5" />
                </a>
                <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Send Us a <span className="text-orange-600">Message</span>
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755056418308!2d-0.2003426847618004!3d5.555862995962654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMjEuMSJOIDDCsDExJzU4LjgiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}