import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Company
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We are a forward-thinking software development company focused on building scalable, user-centric applications.
          Our team blends design and technology to create solutions that are innovative, reliable, and built for growth.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
