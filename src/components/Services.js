import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore our services
            </h2>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Web Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Custom web applications built with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">TypeScript</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-60 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">🌐</div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Mobile Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">React Native</span>
                  <span className="tech-badge">Flutter</span>
                  <span className="tech-badge">Swift</span>
                </div>
              </div>
              <div className="flex justify-center md:order-1">
                <div className="w-80 h-60 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get the same high-quality service for a smaller task
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you need a simple landing page or a complex enterprise application, we deliver the same level of quality and attention to detail.
              </p>
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
            Explore our services
          </h2>
        </motion.div>
        
        <div className="space-y-16">
          <motion.div 
            {...fadeUpPreset(0.3, 0.8)}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">TypeScript</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-6xl">🌐</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.4, 0.8)}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Mobile Development
              </h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Swift</span>
              </div>
            </div>
            <div className="flex justify-center md:order-1">
              <div className="w-80 h-60 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.5, 0.8)}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you need a simple landing page or a complex enterprise application, we deliver the same level of quality and attention to detail.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;