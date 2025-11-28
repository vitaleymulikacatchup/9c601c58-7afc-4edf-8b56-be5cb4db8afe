import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const CaseStudies = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
          </div>
          
          <div className="case-study-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Dios</h3>
                <p className="text-blue-100 mb-6">
                  A comprehensive platform for managing digital assets and workflows with advanced AI integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold">$2,500</div>
                  <div className="text-blue-100">150+ users</div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-sm">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">DIOS</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
                    View Project
                  </button>
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
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </motion.div>
        
        <motion.div 
          {...fadeUpPreset(0.3, 0.8)}
          className="case-study-card max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Dios</h3>
              <p className="text-blue-100 mb-6">
                A comprehensive platform for managing digital assets and workflows with advanced AI integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold">$2,500</div>
                <div className="text-blue-100">150+ users</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-sm">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">DIOS</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;