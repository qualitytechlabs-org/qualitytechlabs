import React from 'react';
import { motion, useViewportScroll} from 'framer-motion';
import HeroText from '../Common/HeroText';

const Hero = () => {
  
  return (
    <motion.div
      style={{
        backgroundColor: 'var(--theme-bg)',
        minHeight: '100vh',
        position: 'relative',
        // opacity,
        // y: translateY,
        transition: 'opacity 0.3s ease',
        overflow: 'hidden',
      }}
    >
      {/* ✅ Left Image */}
      <img
        src="/sequence/top/sideImg.png"
        alt="Static Left"
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          // transform: 'translateY(-50%)',
          zIndex: 1,
          width: '100px',
        }}
      />

      {/* ✅ Right Image */}
      <img
        src="/sequence/top/sideimg2.png"
        alt="Static Right"
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          // transform: 'translateY(-50%)',
          zIndex: 1,
          width: '100px',
        }}
      />

      {/* ✅ Top Caption */}
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <HeroText/>
      </div>

      {/* ✅ Bottom Caption */}
      {/* <div
        style={{
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
        }}
      >
       
      </div> */}
    </motion.div>
  );
};

export default Hero;
