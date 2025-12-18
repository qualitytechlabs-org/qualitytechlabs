import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import HeroText from '../Common/HeroText';

const Hero = () => {
  const { scrollY } = useViewportScroll();

  // Assume next section starts after 100vh
  const fadeStart = 0;
  const fadeEnd = 500; // start fading at scrollY = 0, end by 400px

  // const opacity = useTransform(scrollY, [fadeStart, fadeEnd], [1, 0]);
  // const translateY = useTransform(scrollY, [fadeStart, fadeEnd], [0, -50]);

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
