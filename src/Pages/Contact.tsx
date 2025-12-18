// import React, { useEffect, useState } from "react";

// const Contact = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const hero = document.getElementById("hero");
//       if (!hero) return;

//       const rect = hero.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight && rect.bottom > 0) {
//         const scrollAmount = windowHeight - rect.top;
//         const scrollPercent = Math.min(scrollAmount / windowHeight, 1);
//         setScrollProgress(scrollPercent);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const boxWidth = 200; // px
//   const gapBetweenBoxes = 0; // final gap when they touch
//   const maxOffset = `calc(50vw - ${boxWidth}px)`; // max distance from left/right to center
//   const leftTransform = `translateX(${scrollProgress * 50}vw)`; // 0 to 50vw
//   const rightTransform = `translateX(-${scrollProgress * 50}vw)`; // 0 to -50vw

//   return (
//     <section
//       id="hero"
//       style={{
//         height: "100vh",
//         background: "#f3f4f6",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <h1 style={{ textAlign: "center", paddingTop: "2rem", fontSize: "2rem" }}>
//         Scroll Down – Boxes Will Meet in Center
//       </h1>

//       {/* Left Box */}
//       <div
//         style={{
//           position: "absolute",
//           top: "40%",
//           left: 0,
//           width: `${boxWidth}px`,
//           height: "200px",
//           backgroundColor: "#3b82f6",
//           color: "#fff",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontWeight: "bold",
//           transform: leftTransform,
//           transition: "transform 0.1s linear",
//         }}
//       >
//         Box A
//       </div>

//       {/* Right Box */}
//       <div
//         style={{
//           position: "absolute",
//           top: "40%",
//           right: 0,
//           width: `${boxWidth}px`,
//           height: "200px",
//           backgroundColor: "#ef4444",
//           color: "#fff",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontWeight: "bold",
//           transform: rightTransform,
//           transition: "transform 0.1s linear",
//         }}
//       >
//         Box B
//       </div>
//     </section>
//   );
// };

// export default Contact;

// App.tsx or any component
import React, { useRef, useEffect } from 'react';

const GalaxyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = Array(200).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    function animate() {
      ctx.fillStyle = '#0e0e0e';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    // <canvas
    //   ref={canvasRef}
    //   style={{
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     zIndex: 0,
    //     width: '100%',
    //     height: '100%',
    //   }}
    // />
    <p>Hello</p>
  );
};

export default GalaxyCanvas;
