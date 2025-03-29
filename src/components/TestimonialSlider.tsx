
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Member for 2 years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    quote: "Vertex Gym completely transformed my fitness journey. The trainers are exceptional and the community is so supportive. I've lost 30 pounds and gained so much confidence!",
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Member for 1 year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    quote: 'As a busy professional, I needed a gym that could accommodate my schedule and provide effective workouts. Vertex Gym delivered beyond my expectations with flexible hours and amazing programs.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Member for 3 years',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    quote: "The personal training at Vertex Gym is worth every penny. My trainer customized workouts specifically for my goals, and I've seen incredible progress in strength and endurance.",
  },
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [current, autoplay]);

  return (
    <div className="relative w-full overflow-hidden bg-darkGray py-12 px-4 rounded-lg">
      <div className="max-w-3xl mx-auto text-white">
        <div className="flex justify-center items-center mb-8">
          <button 
            onClick={prevSlide} 
            className="p-2 rounded-full bg-teal/20 text-white hover:bg-teal/40 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="w-full max-w-2xl px-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === current ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-goldenYellow">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-goldenYellow">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextSlide} 
            className="p-2 rounded-full bg-teal/20 text-white hover:bg-teal/40 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-goldenYellow' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
