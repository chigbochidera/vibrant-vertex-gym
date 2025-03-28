
import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ProgramCard from '@/components/ProgramCard';
import ClassSchedule from '@/components/ClassSchedule';
import Layout from '@/components/Layout';

const Programs = () => {
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
    {
      title: 'CrossFit',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Dynamic, high-intensity functional movements that combine gymnastics, weightlifting, and cardio for a full-body workout.',
      duration: '60 min',
      level: 'Advanced' as const,
    },
    {
      title: 'Spin Class',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Indoor cycling workout that combines rhythm-based choreography with high-intensity cardio and strength training.',
      duration: '45 min',
      level: 'All Levels' as const,
    },
    {
      title: 'Pilates',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Low-impact exercise that focuses on core strength, posture, and flexibility through controlled movements.',
      duration: '50 min',
      level: 'Beginner' as const,
    },
    {
      title: 'Boxing',
      image: 'https://images.unsplash.com/photo-1549824506-b7045a1bf8dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Learn proper boxing technique while getting a full-body workout that improves conditioning, strength, and agility.',
      duration: '60 min',
      level: 'Intermediate' as const,
    },
    {
      title: 'Senior Fitness',
      image: 'https://images.unsplash.com/photo-1522845015757-50ca053220ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Specially designed for older adults focusing on mobility, balance, and strength in a supportive environment.',
      duration: '45 min',
      level: 'Beginner' as const,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-darkGray/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-goldenYellow">Fitness Programs</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the perfect workout routine to achieve your fitness goals with our diverse range of programs led by expert trainers.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting your fitness journey or looking to challenge yourself, we have programs for all fitness levels and goals.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <AnimateOnScroll 
                key={program.title} 
                animation="animate-fade-in" 
                delay={0.1 * (index % 4)}
              >
                <ProgramCard {...program} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Weekly Class Schedule</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find the perfect time to join our classes. Our schedule is designed to accommodate various lifestyles and preferences.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in">
            <ClassSchedule />
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our fitness programs, class schedules, and what to expect.
            </p>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Do I need to be fit to join a class?</h3>
                  <p className="text-gray-600">
                    Not at all! Our classes are designed for all fitness levels. Our instructors provide modifications for beginners and advanced participants alike.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">What should I bring to a class?</h3>
                  <p className="text-gray-600">
                    We recommend comfortable workout clothes, a water bottle, and a small towel. Specialized equipment for each class is provided by the gym.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">How early should I arrive for a class?</h3>
                  <p className="text-gray-600">
                    We recommend arriving 10-15 minutes before your first class to complete any necessary paperwork and meet your instructor.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Can I try a class before committing to a membership?</h3>
                  <p className="text-gray-600">
                    Yes! We offer a free 7-day trial that includes access to all classes, allowing you to experience our programs before joining.
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
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Try a class today and experience the Vertex Gym difference. Our trainers are ready to help you achieve your fitness goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-cta">
                Join Now
              </Link>
              <Link to="/pricing" className="btn-primary">
                View Pricing
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
