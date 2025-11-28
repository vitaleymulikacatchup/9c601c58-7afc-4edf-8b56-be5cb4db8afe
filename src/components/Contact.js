import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we help? Let's talk
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your next project? Get in touch with our team and let's discuss how we can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>contact@sargas.io</span>
              </button>
              <button className="btn-secondary">
                Schedule a Call
              </button>
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How can we help? Let's talk
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your next project? Get in touch with our team and let's discuss how we can help bring your ideas to life.
          </p>
          <motion.div 
            {...fadeUpPreset(0.3, 0.8)}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="btn-primary flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>contact@sargas.io</span>
            </button>
            <button className="btn-secondary">
              Schedule a Call
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;