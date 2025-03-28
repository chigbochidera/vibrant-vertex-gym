
import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TrainerCard from '@/components/TrainerCard';
import Layout from '@/components/Layout';
import TestimonialSlider from '@/components/TestimonialSlider';

const Trainers = () => {
  // Mock data for trainers
  const trainers = [
    {
      name: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'Strength & Conditioning',
      experience: '10 years',
      bio: 'Former professional athlete with expertise in sports performance and rehabilitation.',
      socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'HIIT & Cardio',
      experience: '8 years',
      bio: 'Certified nutritionist and weight loss specialist helping clients achieve their fitness goals.',
      socials: {
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'David Rodriguez',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'CrossFit',
      experience: '12 years',
      bio: 'CrossFit Level 3 Trainer with a passion for helping people push their limits and achieve the impossible.',
      socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      name: 'Emily Patel',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'Yoga & Pilates',
      experience: '15 years',
      bio: 'Certified in multiple yoga disciplines, helping clients find balance, flexibility, and inner peace.',
      socials: {
        instagram: 'https://instagram.com',
      },
    },
    {
      name: 'James Wilson',
      image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'Boxing & Martial Arts',
      experience: '9 years',
      bio: 'Former professional boxer bringing discipline and technique to his classes.',
      socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Lisa Wong',
      image: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'Group Fitness',
      experience: '7 years',
      bio: 'Energetic instructor who creates fun and challenging workouts that keep you coming back for more.',
      socials: {
        instagram: 'https://instagram.com',
      },
    },
    {
      name: 'Alex Kim',
      image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'Sports Nutrition',
      experience: '6 years',
      bio: 'Registered dietitian specializing in performance nutrition for athletes and fitness enthusiasts.',
      socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      name: 'Natalie Brown',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      specialty: 'Spin & Cycling',
      experience: '5 years',
      bio: 'Certified cycling instructor who creates high-energy classes with awesome playlists.',
      socials: {
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-darkGray/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-goldenYellow">Expert Trainers</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Meet our team of certified fitness professionals dedicated to helping you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our trainers are certified professionals with diverse specialties to help you achieve your specific fitness goals.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <AnimateOnScroll 
                key={trainer.name} 
                animation="animate-fade-in" 
                delay={0.1 * (index % 4)}
              >
                <TrainerCard {...trainer} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Certifications */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All of our trainers are certified by leading fitness organizations to ensure you receive professional, safe, and effective training.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-teal mb-2">ACE</div>
                <p className="text-gray-600">American Council on Exercise</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-teal mb-2">NASM</div>
                <p className="text-gray-600">National Academy of Sports Medicine</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-teal mb-2">ISSA</div>
                <p className="text-gray-600">International Sports Sciences Association</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-teal mb-2">ACSM</div>
                <p className="text-gray-600">American College of Sports Medicine</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See what our clients have to say about their experiences with our expert trainers.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in">
            <TestimonialSlider />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-teal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
                <p className="mb-6">
                  Are you a certified fitness professional passionate about helping others achieve their fitness goals? We're always looking for talented trainers to join our team at Vertex Gym.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-goldenYellow rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-darkGray" />
                    </div>
                    <span>Competitive compensation with incentive bonuses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-goldenYellow rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-darkGray" />
                    </div>
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-goldenYellow rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-darkGray" />
                    </div>
                    <span>Professional development opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-goldenYellow rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-darkGray" />
                    </div>
                    <span>State-of-the-art facilities and equipment</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-cta inline-block">
                  Apply Now
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80" 
                alt="Gym trainer" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-darkGray py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work with Our Trainers?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Book a free consultation with one of our expert trainers today and start your transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-cta">
                Book a Consultation
              </Link>
              <Link to="/programs" className="btn-primary">
                Explore Programs
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
