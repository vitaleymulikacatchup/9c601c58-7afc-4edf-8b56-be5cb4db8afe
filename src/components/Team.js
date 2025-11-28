import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Team = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sargas Team
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
                    <div className="text-sm font-medium text-gray-900">Team Member</div>
                    <div className="text-xs text-gray-600">Developer</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our experienced team of developers, designers, and AI specialists work together to deliver exceptional results for every project.
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
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
        </motion.div>
        
        <motion.div 
          {...fadeUpPreset(0.3, 0.8)}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i}
                  {...fadeUpPreset(0.4 + i * 0.1, 0.6)}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
                  <div className="text-sm font-medium text-gray-900">Team Member</div>
                  <div className="text-xs text-gray-600">Developer</div>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of developers, designers, and AI specialists work together to deliver exceptional results for every project.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;