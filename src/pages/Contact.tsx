
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ContactForm from '@/components/ContactForm';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-darkGray/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-goldenYellow">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions or ready to start your fitness journey? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimateOnScroll animation="animate-fade-in">
              <div>
                <h2 className="section-title mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">123 Fitness Street, Workout City, WC 12345</p>
                      <p className="text-gray-600">Located in Downtown, next to Central Park</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">Main: (555) 123-4567</p>
                      <p className="text-gray-600">Membership: (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">info@vertexgym.com</p>
                      <p className="text-gray-600">membership@vertexgym.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours of Operation</h3>
                      <p className="text-gray-600">Monday - Friday: 6:00 AM - 10:00 PM</p>
                      <p className="text-gray-600">Saturday: 7:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal hover:bg-teal/80 text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal hover:bg-teal/80 text-white p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal hover:bg-teal/80 text-white p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal hover:bg-teal/80 text-white p-3 rounded-full transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
                
                {/* Google Map */}
                <div className="rounded-lg overflow-hidden shadow-md h-80 mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2173782304623!2d-73.98784482394287!3d40.758985834641255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1680307958380!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gym Location"
                  ></iframe>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="animate-fade-in" delay={0.2}>
              <div>
                <h2 className="section-title mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about membership, classes, and more.
            </p>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">How do I sign up for a membership?</h3>
                  <p className="text-gray-600">
                    You can sign up for a membership by visiting our gym in person, calling our membership line, or filling out the contact form on this page.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 7-day free trial for new members to experience our facilities and classes before committing to a membership.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">What should I bring for my first visit?</h3>
                  <p className="text-gray-600">
                    For your first visit, bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. Don't forget a valid ID for check-in.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">How do I schedule a personal training session?</h3>
                  <p className="text-gray-600">
                    You can schedule a personal training session by speaking with our front desk staff, calling our gym, or contacting your preferred trainer directly.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Take the first step towards a healthier lifestyle by joining Vertex Gym today. Sign up now and get a free fitness assessment!
            </p>
            <Link to="/pricing" className="btn-cta inline-block">
              View Membership Options
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
