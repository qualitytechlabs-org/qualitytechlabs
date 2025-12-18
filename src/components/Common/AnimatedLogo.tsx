// src/components/Common/AnimatedLogo.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <div className="w-10 h-10">
      <svg viewBox="0 0 1364 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          {/* Static and animated paths */}
          <motion.path
            d="M25.2992 36.2114C20.3639 44.2541..."
            fill="url(#paint0)"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M17.0998 34.7286C..."
            fill="url(#paint1)"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M21.007 28.0924C..."
            fill="url(#paint2)"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </g>

        <defs>
          <linearGradient id="paint0" x1="9.1" y1="38" x2="25.7" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA685" />
            <stop offset="1" stopColor="#FC7580" />
          </linearGradient>
          <linearGradient id="paint1" x1="14.5" y1="32" x2="19.6" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA685" />
            <stop offset="1" stopColor="#FC7580" />
          </linearGradient>
          <linearGradient id="paint2" x1="18.9" y1="26" x2="23.0" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA685" />
            <stop offset="1" stopColor="#FC7580" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="124" height="40" fill="white" transform="translate(0 12.5)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
