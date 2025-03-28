
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TestimonialSlider from '@/components/TestimonialSlider';
import ProgramCard from '@/components/ProgramCard';
import TrainerCard from '@/components/TrainerCard';
import Layout from '@/components/Layout';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.4,
    });

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
      const target = parseInt(stat.textContent || '0', 10);
      gsap.to(stat, {
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
        },
      });
    });

    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mock data for programs
  const programs = [
    {
      title: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Build muscle, increase strength, and improve overall body composition with our comprehensive strength training program.',
      duration: '60 min',
      level: 'All Levels' as const,
    },
    {
      title: 'HIIT Cardio',
      image: 'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'High-Intensity Interval Training to maximize calorie burn, improve cardiovascular health, and boost metabolism.',
      duration: '45 min',
      level: 'Intermediate' as const,
    },
    {
      title: 'Yoga Flow',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Improve flexibility, reduce stress, and enhance mind-body connection through our guided yoga flow sessions.',
      duration: '60 min',
      level: 'Beginner' as const,
    },
  ];

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
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="min-h-screen bg-cover bg-center flex items-center relative"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-darkGray/70"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Body, <span className="text-goldenYellow">Transform Your Life</span>
            </h1>
            <p className="hero-subtitle text-xl text-white/80 mb-8">
              Join Vertex Gym today and experience world-class training, state-of-the-art equipment, and a supportive community to help you reach your fitness goals.
            </p>
            <div className="hero-cta flex flex-wrap gap-4">
              <Link to="/contact" className="btn-cta">
                Join Now
              </Link>
              <Link to="/programs" className="btn-primary">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-darkGray py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="stat-number text-4xl font-bold text-goldenYellow mb-2">10</h3>
              <p className="text-white text-lg">Years Experience</p>
            </div>
            <div className="p-6">
              <h3 className="stat-number text-4xl font-bold text-goldenYellow mb-2">20</h3>
              <p className="text-white text-lg">Expert Trainers</p>
            </div>
            <div className="p-6">
              <h3 className="stat-number text-4xl font-bold text-goldenYellow mb-2">50</h3>
              <p className="text-white text-lg">Fitness Classes</p>
            </div>
            <div className="p-6">
              <h3 className="stat-number text-4xl font-bold text-goldenYellow mb-2">1500</h3>
              <p className="text-white text-lg">Happy Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-teal">Fitness Programs</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of fitness programs designed to help you achieve your specific goals, whether you're looking to build muscle, lose weight, or improve overall wellness.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimateOnScroll 
                key={program.title} 
                animation="animate-fade-in" 
                delay={0.2 * index}
              >
                <ProgramCard {...program} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs" className="inline-flex items-center text-teal hover:text-teal/80 font-semibold">
              View All Programs <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Gym equipment" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </AnimateOnScroll>
            
            <div>
              <AnimateOnScroll animation="animate-fade-in">
                <h2 className="section-title">Why Choose Vertex Gym?</h2>
                <p className="text-gray-600 mb-8">
                  We provide a comprehensive fitness experience with state-of-the-art equipment, expert trainers, and a supportive community to help you succeed.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-teal rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">State-of-the-Art Equipment</h4>
                      <p className="text-gray-600">Access to the latest fitness technology and premium gym equipment for optimal results.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Expert Certified Trainers</h4>
                      <p className="text-gray-600">Our professional trainers design personalized workout plans to match your fitness level and goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Variety of Classes</h4>
                      <p className="text-gray-600">From high-intensity workouts to mind-body sessions, we offer classes for every preference.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal rounded-full p-1 mr-4 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Supportive Community</h4>
                      <p className="text-gray-600">Join a motivating community of like-minded individuals on the same fitness journey.</p>
                    </div>
                  </li>
                </ul>
                
                <Link to="/about" className="btn-primary inline-block mt-8">
                  Learn More About Us
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-teal">Expert Trainers</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our certified fitness professionals are passionate about helping you achieve your goals safely and effectively.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <AnimateOnScroll 
                key={trainer.name} 
                animation="animate-fade-in" 
                delay={0.2 * index}
              >
                <TrainerCard {...trainer} />
              </AnimateOnScroll>
            ))}
            <AnimateOnScroll animation="animate-fade-in" delay={0.4}>
              <div className="gym-card flex flex-col justify-center items-center text-center p-10">
                <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-6">
                  Are you a certified fitness trainer looking to make an impact? Join our team of fitness professionals!
                </p>
                <Link to="/contact" className="btn-primary">
                  Apply Now
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="text-center mt-12">
            <Link to="/trainers" className="inline-flex items-center text-teal hover:text-teal/80 font-semibold">
              View All Trainers <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-teal">Members Say</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it, hear from our satisfied members who have transformed their lives with Vertex Gym.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in">
            <TestimonialSlider />
          </AnimateOnScroll>
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
              Join Vertex Gym today and take the first step towards a healthier, stronger you. Sign up now and get a free consultation with one of our expert trainers.
            </p>
            <Link to="/contact" className="btn-cta inline-block">
              Join Now
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-darkGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="animate-fade-in" className="text-center">
              <div className="bg-darkGray/50 p-6 rounded-lg border border-gray-700">
                <Clock size={40} className="text-goldenYellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                <p className="text-gray-400">Monday - Friday: 6am - 10pm</p>
                <p className="text-gray-400">Weekends: 8am - 8pm</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.2} className="text-center">
              <div className="bg-darkGray/50 p-6 rounded-lg border border-gray-700">
                <Check size={40} className="text-goldenYellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Free Trial</h3>
                <p className="text-gray-400">Try our gym for 7 days with no commitment. Experience all we have to offer.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.4} className="text-center">
              <div className="bg-darkGray/50 p-6 rounded-lg border border-gray-700">
                <ArrowRight size={40} className="text-goldenYellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Easy Enrollment</h3>
                <p className="text-gray-400">Simple sign-up process. Start your fitness journey today with no hassle.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
