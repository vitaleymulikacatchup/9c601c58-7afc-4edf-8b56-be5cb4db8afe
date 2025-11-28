import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">
                "Sargas delivered an exceptional web application that exceeded our expectations. Their AI-powered approach and attention to detail made all the difference."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">JD</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-gray-600">CEO, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
        </motion.div>
        
        <motion.div 
          {...fadeUpPreset(0.3, 0.8)}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <blockquote className="text-xl text-gray-700 mb-6">
              "Sargas delivered an exceptional web application that exceeded our expectations. Their AI-powered approach and attention to detail made all the difference."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold">JD</span>
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-gray-600">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;