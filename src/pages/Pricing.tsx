
import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PricingCard from '@/components/PricingCard';
import Layout from '@/components/Layout';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Basic Plan',
      price: '$29.99',
      period: 'month',
      features: [
        'Access to gym during regular hours',
        'Basic fitness equipment usage',
        'Locker room access',
        '2 group classes per month',
        'Fitness assessment',
      ],
      isPopular: false,
    },
    {
      title: 'Premium Plan',
      price: '$59.99',
      period: 'month',
      features: [
        'Access to gym 24/7',
        'Full access to all equipment',
        'Unlimited group classes',
        'One free personal training session monthly',
        'Nutrition consultation',
        'Access to mobile app',
        'Discounts on supplements',
      ],
      isPopular: true,
    },
    {
      title: 'VIP Plan',
      price: '$99.99',
      period: 'month',
      features: [
        'All Premium Plan benefits',
        'Weekly personal training sessions',
        'Quarterly body composition analysis',
        'VIP locker with amenities',
        'Towel service',
        'Guest passes (2 per month)',
        'Priority class booking',
        'Monthly massage session',
      ],
      isPopular: false,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-darkGray/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Membership <span className="text-goldenYellow">Pricing</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Flexible plans designed to fit your fitness goals and budget. No hidden fees, just straightforward pricing.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find the perfect membership option that suits your fitness needs and budget. All plans include access to our state-of-the-art facilities.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <AnimateOnScroll 
                key={plan.title} 
                animation="animate-fade-in" 
                delay={0.2 * index}
              >
                <PricingCard {...plan} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plan Comparison</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Compare our plans in detail to choose the one that best fits your fitness journey.
            </p>
          </AnimateOnScroll>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-teal text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">Basic Plan</th>
                  <th className="py-4 px-6 text-center bg-teal-700">Premium Plan</th>
                  <th className="py-4 px-6 text-center">VIP Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">Monthly Price</td>
                  <td className="py-4 px-6 text-center">$29.99</td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">$59.99</td>
                  <td className="py-4 px-6 text-center">$99.99</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Gym Access Hours</td>
                  <td className="py-4 px-6 text-center">Regular Hours<br />(6am-10pm)</td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">24/7 Access</td>
                  <td className="py-4 px-6 text-center">24/7 Access</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Group Classes</td>
                  <td className="py-4 px-6 text-center">2 per month</td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">Unlimited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Personal Training Sessions</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">
                    1 per month
                  </td>
                  <td className="py-4 px-6 text-center">
                    Weekly
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Fitness Assessment</td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="text-teal mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">
                    <Check size={20} className="text-teal mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="text-teal mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Nutrition Consultation</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">
                    <Check size={20} className="text-teal mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check size={20} className="text-teal mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Body Composition Analysis</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    Quarterly
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Guest Passes</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    2 per month
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Massage Session</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 font-semibold">
                    <span className="text-gray-400">✖</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    Monthly
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6 text-center">
                    <Link to="/contact" className="btn-primary text-sm">
                      Choose Plan
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50">
                    <Link to="/contact" className="btn-secondary text-sm">
                      Choose Plan
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link to="/contact" className="btn-primary text-sm">
                      Choose Plan
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="animate-fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take advantage of our limited-time promotions and special discount packages.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-brightRed text-white py-2 text-center text-sm font-semibold">
                  Limited Time Offer
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Annual Membership</h3>
                  <p className="text-gray-600 mb-4">
                    Pay for 10 months, get 2 months free when you sign up for an annual membership.
                  </p>
                  <div className="flex items-end mb-4">
                    <span className="text-2xl font-bold">20%</span>
                    <span className="text-gray-500 ml-2">Savings</span>
                  </div>
                  <Link to="/contact" className="btn-secondary w-full text-center block">
                    Get This Deal
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay={0.2}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-teal text-white py-2 text-center text-sm font-semibold">
                  New Members
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">First Month Discount</h3>
                  <p className="text-gray-600 mb-4">
                    New members get 50% off their first month on any membership plan.
                  </p>
                  <div className="flex items-end mb-4">
                    <span className="text-2xl font-bold">50%</span>
                    <span className="text-gray-500 ml-2">Off First Month</span>
                  </div>
                  <Link to="/contact" className="btn-primary w-full text-center block">
                    Get This Deal
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay={0.4}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-goldenYellow text-darkGray py-2 text-center text-sm font-semibold">
                  Friend Referral
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bring a Friend</h3>
                  <p className="text-gray-600 mb-4">
                    Refer a friend who joins and both of you receive a free month of membership.
                  </p>
                  <div className="flex items-end mb-4">
                    <span className="text-2xl font-bold">1</span>
                    <span className="text-gray-500 ml-2">Free Month</span>
                  </div>
                  <Link to="/contact" className="btn-cta w-full text-center block">
                    Refer a Friend
                  </Link>
                </div>
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
              Get answers to common questions about our membership plans and payment options.
            </p>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Is there a joining fee?</h3>
                  <p className="text-gray-600">
                    We have a one-time joining fee of $49 for all new members, which is waived during certain promotional periods.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Can I freeze my membership temporarily?</h3>
                  <p className="text-gray-600">
                    Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel at a reduced fee.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">What is your cancellation policy?</h3>
                  <p className="text-gray-600">
                    We require 30 days' notice for membership cancellations. There are no cancellation fees for monthly memberships.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Are personal training sessions transferable?</h3>
                  <p className="text-gray-600">
                    Personal training sessions included in memberships are non-transferable and must be used by the member.
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
              Join Vertex Gym today and take the first step towards a healthier, stronger you. Our team is ready to help you choose the best plan for your needs.
            </p>
            <Link to="/contact" className="btn-cta inline-block">
              Join Now
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
