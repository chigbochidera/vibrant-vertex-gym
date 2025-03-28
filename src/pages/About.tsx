
import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Layout from '@/components/Layout';
import { Check } from 'lucide-react';

const About = () => {
  // Mock data for timeline events
  const timelineEvents = [
    {
      year: '2011',
      title: 'Vertex Gym Founded',
      description: 'Started with a small facility and a vision to transform fitness in the community.',
    },
    {
      year: '2013',
      title: 'Expanded Facilities',
      description: 'Added specialized training zones and doubled our space to accommodate growing membership.',
    },
    {
      year: '2015',
      title: 'Introduced Group Classes',
      description: 'Launched our signature group fitness programs with certified trainers.',
    },
    {
      year: '2018',
      title: 'Facility Renovation',
      description: 'Complete modernization with state-of-the-art equipment and facilities.',
    },
    {
      year: '2020',
      title: 'Virtual Training Launch',
      description: 'Expanded to offer online training and virtual classes to members worldwide.',
    },
    {
      year: '2023',
      title: 'Community Milestone',
      description: 'Celebrated helping over 10,000 members achieve their fitness goals.',
    },
  ];

  // Mock data for facility images
  const facilityImages = [
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Cardio Area',
    },
    {
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Strength Training Zone',
    },
    {
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Group Fitness Studio',
    },
    {
      image: 'https://images.unsplash.com/photo-1591291621086-2ba81a536385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Recovery & Spa',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-darkGray/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-goldenYellow">Vertex Gym</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our story, mission, and the passionate team behind the premier fitness experience in the city.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="animate-fade-in">
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Vertex Gym was founded in 2011 with a simple mission: to create a fitness environment that inspires, supports, and transforms lives. What began as a small local gym has grown into a premier fitness destination with a passionate community of members and trainers.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Michael Vertex, a former competitive athlete, saw the need for a fitness center that went beyond just equipment and space—one that offered expert guidance, community support, and a holistic approach to health and wellness.
              </p>
              <p className="text-gray-600">
                Today, Vertex Gym stands as a testament to that vision, having helped thousands of individuals transform their bodies and lives through innovative training programs, state-of-the-art facilities, and a team of dedicated fitness professionals.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Gym interior" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Vertex Gym, we're driven by core principles that guide everything we do.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-teal rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from the quality of our facilities to the expertise of our trainers. We are constantly evolving and improving to provide the best fitness experience possible.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-teal rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-600">
                  We believe in the power of community support in achieving fitness goals. Our members aren't just clients; they're part of the Vertex family, supporting and inspiring each other every day.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="bg-teal rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transformation</h3>
                <p className="text-gray-600">
                  We're committed to facilitating real, sustainable transformation in our members' lives—not just physical changes, but building confidence, discipline, and healthy habits that last a lifetime.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The key milestones in our growth from a small local gym to a premier fitness destination.
            </p>
          </AnimateOnScroll>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <AnimateOnScroll 
                  key={event.year} 
                  animation={index % 2 === 0 ? "animate-slide-in" : "animate-slide-in-right"}
                  delay={0.1 * index}
                >
                  <div className="relative flex md:items-center flex-col md:flex-row">
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-teal font-bold text-xl">{event.year}</span>
                        <h3 className="text-xl font-bold mt-2 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-goldenYellow w-4 h-4 rounded-full items-center justify-center">
                      <div className="bg-teal w-2 h-2 rounded-full"></div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our state-of-the-art fitness spaces designed to provide the ultimate workout experience.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityImages.map((facility, index) => (
              <AnimateOnScroll 
                key={facility.title} 
                animation="animate-fade-in" 
                delay={0.2 * index}
              >
                <div className="relative rounded-lg overflow-hidden group h-64">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGray/80 to-transparent flex items-end">
                    <h3 className="text-white text-2xl font-bold p-6">{facility.title}</h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary inline-block">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're proud of the recognition we've received for our commitment to fitness excellence.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-goldenYellow text-4xl font-bold mb-2">#1</div>
                <p className="text-gray-800 font-semibold">Voted Best Gym in the City</p>
                <p className="text-gray-600 text-sm">City Lifestyle Magazine, 2023</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-goldenYellow text-4xl font-bold mb-2">5★</div>
                <p className="text-gray-800 font-semibold">Excellence in Customer Service</p>
                <p className="text-gray-600 text-sm">Fitness Industry Association, 2022</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-goldenYellow text-4xl font-bold mb-2">10K+</div>
                <p className="text-gray-800 font-semibold">Members Transformed</p>
                <p className="text-gray-600 text-sm">Since our founding</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-goldenYellow text-4xl font-bold mb-2">A+</div>
                <p className="text-gray-800 font-semibold">Health & Safety Rating</p>
                <p className="text-gray-600 text-sm">National Fitness Safety Board, 2023</p>
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
              Become Part of Our Story
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join Vertex Gym today and become part of our growing community of fitness enthusiasts working towards their best selves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-cta">
                Join Now
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

export default About;
