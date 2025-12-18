import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './BottomCaption.css';

const BottomCaption: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="bottom-caption-container">
      <div className="orb-layout-wrapper">
        <motion.div
          className="circle left"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.01, type: 'spring' }}
        >
          <span className="circle-word left-word">Work</span>
        </motion.div>

        <motion.div
          className="circle center"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.02, type: 'spring' }}
        >
          <span className="circle-word center-word">With</span>
        </motion.div>

        <motion.div
          className="circle right"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.03, type: 'spring' }}
        >
          <span className="circle-word right-word">Us</span>
        </motion.div>
      </div>

      <motion.div
        className="caption-text"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.06 }}
      >
        <h2>Who we are</h2>
        <p>
          We’re a team of designers, developers, and dreamers. <br />
          We’ve just started but we’re not new to this. <br />
          With experience across product, brand, and technology, <br />
          we bring clarity to ideas and elegance to execution.
        </p>
        <button className="learn-btn">
          <span>➜</span> Know More About us
        </button>
      </motion.div>
    </section>
  );
};

export default BottomCaption;
