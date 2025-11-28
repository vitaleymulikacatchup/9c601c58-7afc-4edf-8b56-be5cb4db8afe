import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">AI-powered</span><br />
              web and mobile<br />
              <span className="gradient-text">in 12 weeks</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-gray-600">Powered by</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-900">n8n</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Discovery</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ArrowRight className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="tech-badge">#react</span>
              <span className="tech-badge">#nestjs</span>
              <span className="tech-badge">#mysql</span>
              <span className="tech-badge">#mongodb</span>
              <span className="tech-badge">#nginx</span>
              <span className="tech-badge">#redis</span>
              <span className="tech-badge">#typescript</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            {...fadeUpPreset(0.2, 1.0)}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">AI-powered</span><br />
            web and mobile<br />
            <span className="gradient-text">in 12 weeks</span>
          </motion.h1>
          
          <motion.div 
            {...fadeUpPreset(0.3, 0.8)}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <span className="text-gray-600">Powered by</span>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <span className="font-semibold text-gray-900">n8n</span>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.4, 0.8)}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <button className="btn-primary flex items-center space-x-2">
              <span>Start Discovery</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <ArrowRight className="w-4 h-4" />
              <span>Portfolio Showcase</span>
            </button>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.5, 0.8)}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600"
          >
            <span className="tech-badge">#react</span>
            <span className="tech-badge">#nestjs</span>
            <span className="tech-badge">#mysql</span>
            <span className="tech-badge">#mongodb</span>
            <span className="tech-badge">#nginx</span>
            <span className="tech-badge">#redis</span>
            <span className="tech-badge">#typescript</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;