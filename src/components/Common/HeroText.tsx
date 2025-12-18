// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import MagnifierBadge from '../Common/MagnifierPin'


// const HeroText: React.FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-screen bg-[#0e0e0e] flex flex-col justify-center items-center px-6 text-center overflow-hidden"
//     >
//       {/* 🌐 Background gradient removed */}

//       {/* 🔴 Floating Orb Left */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.4 }}
//         animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
//         transition={{ duration: 1 }}
//         className="orb orb-left orb-float"
//       />


//       {/* 🔵 Floating Orb Right */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.4 }}
//         animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
//         transition={{ duration: 1, delay: 0.2 }}
//         className="orb orb-right orb-float"
//       />
//     <MagnifierBadge size={112} style={{ marginBottom: 24 }} />
//       {/* 🧠 Text Animations */}
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         className="text-white text-4xl md:text-6xl font-extrabold z-10 tracking-tight"
//       >
//         We build with heart. 
//       </motion.h1>

//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//         className="text-white text-4xl md:text-6xl font-extrabold z-10 mt-2 tracking-tight"
//       >
//         Ship with intent.
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="text-gray-400 mt-5 text-lg max-w-xl z-10"
//       >
//         Code, design, and intent. Aligned. We help teams build purpose-driven products.
//       </motion.p>

//       <motion.button
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ delay: 0.9, duration: 0.4 }}
//         className="mt-8 px-6 py-3 bg-gradient-to-br from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-xl z-10"
//       >
//         🚀 Start a Project
//       </motion.button>
//     </section>
//   );
// };

// export default HeroText;


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MagnifierBadge from '../Common/MagnifierPin';

const HeroText: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { t } = useTranslation(); // <- i18n hook

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#0e0e0e] flex flex-col justify-center items-center px-6 text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="orb orb-left orb-float"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="orb orb-right orb-float"
      />

      <MagnifierBadge size={112} style={{ marginBottom: 24 }} />

      {/* Headline 1 */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-white text-4xl md:text-6xl font-extrabold z-10 tracking-tight"
      >
        {t('hero.build_with_heart')}
      </motion.h1>

      {/* Headline 2 */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="text-white text-4xl md:text-6xl font-extrabold z-10 mt-2 tracking-tight"
      >
        {t('hero.ship_with_intent')}
      </motion.h1>

      {/* Sub-copy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-400 mt-5 text-lg max-w-xl z-10"
      >
        {t('hero.aligned_code_design_intent')} {t('hero.help_teams_build')}
      </motion.p>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="mt-8 px-6 py-3 bg-gradient-to-br from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-xl z-10"
      >
        🚀 Start a Project
      </motion.button>
    </section>
  );
};

export default HeroText;
