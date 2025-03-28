
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkGray text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
              Vertex<span className="text-goldenYellow">Gym</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness, building stronger bodies and minds every day.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-goldenYellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-goldenYellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-goldenYellow transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-goldenYellow transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-goldenYellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-goldenYellow transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-goldenYellow transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-goldenYellow transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-goldenYellow transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-goldenYellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-goldenYellow flex-shrink-0 mt-1" />
                <span>123 Fitness Street, Workout City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-goldenYellow flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-goldenYellow flex-shrink-0" />
                <span>info@vertexgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} VertexGym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
