
import React, { useState } from 'react';
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring,
    useMotionValueEvent
} from 'framer-motion';

const rightImages = [
    '/sequence/top/top-head-1.png',
    '/sequence/top/top-head-2.png',
    '/sequence/top/top-head-3.png',
];

const leftImages = [
    '/sequence/bottom/bottom-head-1.png',
    '/sequence/bottom/bottom-head-2.png',
    '/sequence/bottom/bottom-head-3.png',
];
const growImage = [
    '/sequence/top/orb-1.png',
    '/sequence/top/orb-2.png',
    '/sequence/top/orb-3.png',
];

const Base = () => {
    const { scrollYProgress } = useViewportScroll();

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 1,
    });
    const headScale = useTransform(smoothScroll, [0, 1], [0.8, 1.4]); // from smaller to bold

    // ✅ Right image (initially above center) — moves DOWN
    const rightY = useTransform(smoothScroll, [0, 1], [-300, 0]);

    // ✅ Left image (initially below center) — moves UP
    const leftY = useTransform(smoothScroll, [0, 1], [300, 0]);

    const imageIndex = useTransform(smoothScroll, [0, 1], [0, 3]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useMotionValueEvent(imageIndex, 'change', (latest) => {
        setCurrentIndex(Math.min(2, Math.floor(latest)));
    });

    return (
        <div style={{position: 'relative', height:"200vh", background: '#0e0e0e' }}>
            <div style={{ background: '#0e0e0e', position:'absolute' }}>
                {/* Right-side image (initially top) */}
                <motion.img
                    src={rightImages[currentIndex]}
                    style={{
                        y: rightY,
                        scale: headScale, // 👈 add this
                        position: 'fixed',
                        top: '40%',
                        left: '55%',  // ✅ Right side
                        width: '120px',
                        zIndex: 10,
                    }}
                    alt="Right"
                />

                {/* Left-side image (initially bottom) */}
                <motion.img
                    src={leftImages[currentIndex]}
                    style={{
                        y: leftY,
                        scale: headScale, // 👈 add this
                        position: 'fixed',
                        top: '40%',
                        left: '30%',  // ✅ Left side
                        width: '120px',
                        zIndex: 10,
                    }}
                    alt="Left"
                />

                {/* 🎯 Ball in center */}
                <motion.img
                    src={growImage[currentIndex]}
                    style={{
                        scale: useTransform(smoothScroll, [0.3, 0.6], [0.3, 1]), // grow smoothly
                        position: 'fixed',
                        top: '45%',
                        left: '45.5%',
                        width: '80px', // Optional: initial width
                        height: '80px',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 5,
                    }}
                    alt="Orb"
                />
            </div>
        </div>
    );
};

export default Base;
