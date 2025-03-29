
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Layout from '@/components/Layout';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    // Replace with your actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Something went wrong. Please try again.");
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                      <p className="text-gray-600">123 Dabokpa Road, Tamale, Ghana</p>
                      <p className="text-gray-600">Near Tamale Technical University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">Main: +233 53 343 4741</p>
                      <p className="text-gray-600">Membership: +233 50 123 4567</p>
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
                
                {/* Google Map for Tamale, Ghana */}
                <div className="rounded-lg overflow-hidden shadow-md h-80 mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62874.61351185225!2d-0.8852542895507815!3d9.403256899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43c7e784d4d67%3A0x35c870a85a5a6279!2sTamale%2C%20Ghana!5e0!3m2!1sen!2sus!4v1718124436379!5m2!1sen!2sus"
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
                
                <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-brightRed">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-brightRed">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="Your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Membership">Membership Information</option>
                        <option value="Personal Training">Personal Training</option>
                        <option value="Group Classes">Group Classes</option>
                        <option value="Corporate Wellness">Corporate Wellness</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-brightRed">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  {/* Hidden honeypot field to prevent spam */}
                  <input type="hidden" name="botcheck" style={{ display: 'none' }} />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-secondary flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  
                  {result && (
                    <div className={`text-center mt-2 ${result.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                      {result}
                    </div>
                  )}
                </form>
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
                    You can sign up for a membership by visiting our gym in Tamale, calling our membership line, or filling out the contact form on this page.
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
