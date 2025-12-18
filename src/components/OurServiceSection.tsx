// components/Sections/OurServiceSection.tsx
import React from "react";
import { motion } from "framer-motion";

type Service = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  dot: string;
  gradient: [string, string];
};

const defaultServices: Service[] = [
  {
    id: "mobile",
    tag: "MOBILE APPLICATION",
    title: "Mobile Application",
    desc: "Native, Hybrid, or Cross-platform. We make them fast, functional & user-friendly.",
    dot: "#B7F942",
    gradient: ["#28F5A7", "#38B6FF"],
  },
  {
    id: "web",
    tag: "WEB APPLICATION",
    title: "Web Application",
    desc: "Scalable web apps with performance-first architecture.",
    dot: "#FFE04A",
    gradient: ["#FF7A59", "#7C4DFF"],
  },
  {
    id: "backend",
    tag: "BACKEND SERVICES",
    title: "Backend Services",
    desc: "APIs, auth, queues & data layers built for reliability and speed.",
    dot: "#B9C3FF",
    gradient: ["#FFE14A", "#FF2BD6"],
  },
  {
    id: "marketing",
    tag: "DIGITAL MARKETING",
    title: "Digital Marketing",
    desc: "SEO, PPC, funnels — we don’t just build, we help you grow.",
    dot: "#E7FFE9",
    gradient: ["#FF5AE0", "#8AFFE7"],
  },
  {
    id: "consultancy",
    tag: "SOFTWARE CONSULTANCY",
    title: "Software Consultancy",
    desc: "Strategy, architecture reviews, roadmap and vendor neutral guidance.",
    dot: "#8AF7FF",
    gradient: ["#38B6FF", "#8AFFE7"],
  },
];

type Props = {
  items?: Service[];
  className?: string;
};

const OurServiceSection: React.FC<Props> = ({ items = defaultServices, className }) => {
  const lgCols = items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section className={`w-full bg-[#0e0e0e] text-white py-16 md:py-20 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* heading block */}
        <div className="mb-6 md:mb-8">
          <p className="text-sm uppercase tracking-[0.18em] text-white/60 mb-2">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-white">
            Services that drive results
          </h2>
        </div>

        {/* grid wrapper with outer border + internal dividers */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${lgCols}
                         rounded-xl overflow-hidden bg-black/30 border border-white/10
                         divide-y divide-white/10 sm:divide-y-0 sm:divide-x`}>
          {items.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ s: Service }> = ({ s }) => {
  return (
    <div className="relative flex flex-col h-full p-6 md:p-8">
      {/* top label */}
      <div className="flex items-center gap-2 mb-6">
        <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: s.dot }} />
        <span className="text-[11px] tracking-[0.14em] uppercase text-white/70">{s.tag}</span>
      </div>

      {/* blob stage (fixed aspect → consistent height) */}
      <motion.div
        className="mb-8 flex items-center justify-start"
        initial={{ y: 8, scale: 0.98, rotate: -2 }}
        whileInView={{ y: 0, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <Blob gradient={s.gradient} />
      </motion.div>

      {/* title + copy */}
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{s.title}</h3>
      <p className="text-sm md:text-base leading-relaxed text-white/70">
        {s.desc}
      </p>
      {/* spacer to keep heights even if copy differs */}
      <div className="mt-auto" />
    </div>
  );
};

const Blob: React.FC<{ gradient: [string, string] }> = ({ gradient }) => {
  const [from, to] = gradient;
  const id = React.useId();

  return (
    <motion.svg
      width="160"
      height="120"
      viewBox="0 0 160 120"
      className="drop-shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
      aria-hidden
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      {/* a fuller, rounder blob like your Figma */}
      <path
        d="M34 52c3-22 25-43 52-49 24-5 46 7 58 25 13 20 9 46-10 60-20 15-47 18-71 9C40 89 31 74 34 52Z"
        fill={`url(#${id})`}
        opacity="0.98"
      />
    </motion.svg>
  );
};

export default OurServiceSection;
