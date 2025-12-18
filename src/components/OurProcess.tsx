// components/Sections/OurProcess.tsx
import React from "react";
import { motion } from "framer-motion";
import Img1 from '../assets/image.png';
import Img2 from '../assets/IMAGE2.png';
import Img3 from '../assets/Image3.png';
import Img4 from '../assets/Image4.png';
import Img5 from '../assets/Image5.png';

type Step = {
  id: number;
  stage: string;
  title: string;
  blurb: string;
  // replace with your real asset paths
  image: string; // square hero image (the dark textured tile with artwork)
};

const STEPS: Step[] = [
  {
    id: 1,
    stage: "STAGE 1",
    title: "Discovery",
    blurb:
      "We start by understanding your goals, audience, and vision. This research lays the foundation for a successful project.",
    image: Img1,
  },
  {
    id: 2,
    stage: "STAGE 2",
    title: "Collaboration",
    blurb:
      "We refine ideas, align strategy, and make sure we’re on the same page before moving forward.",
    image: Img2,
  },
  {
    id: 3,
    stage: "STAGE 3",
    title: "Design",
    blurb:
      "Concepts turn into visuals. We create wireframes, layouts, and user-friendly designs that match your brand.",
    image: Img3,
  },
  {
    id: 4,
    stage: "STAGE 4",
    title: "Refinement",
    blurb:
      "Iterate with feedback to craft precise, production-ready designs and flows.",
    image: Img4,
  },
  {
    id: 5,
    stage: "STAGE 5",
    title: "Launch",
    blurb:
      "Ship with confidence, then support and optimize post-launch.",
    image: Img5,
  },
];

const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-[#0e0e0e] text-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Eyebrow + Title */}
        <div className="mb-8 md:mb-10">
          <p className="uppercase tracking-[0.18em] text-white/60 text-xs md:text-sm">
            Our Process
          </p>
          <h2 className="mt-2 font-serif text-2xl md:text-4xl lg:text-[40px] leading-tight text-white/95">
            Here’s how we bring your digital visions to life.
          </h2>
        </div>

        {/* Stage tiles */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="flex flex-col"
            >
              {/* Top: dark tile with glow */}
              <div className="relative rounded-xl overflow-hidden bg-black/60 ring-1 ring-white/10">
                {/* soft blue outer glow */}
                <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-[#1e90ff]/10 blur-xl" />
                {/* content */}
                <div className="relative z-10">
                  {/* stage label */}
                  <div className="flex items-center gap-2 px-3 pt-3 text-[11px] tracking-[0.16em] text-white/80">
                    <span className="inline-grid h-4 w-4 place-items-center rounded-[4px] bg-white/10 text-[10px]">
                      ▦
                    </span>
                    {s.stage}
                  </div>

                  {/* image */}
                  <img
                    src={s.image}
                    alt={`${s.title} stage visual`}
                    className="mt-2 h-48 w-full object-cover"
                    loading="lazy"
                    width={360}
                    height={360}
                  />

                  {/* large outlined title (bottom-left) */}
                  <div className="px-4 py-3">
                    <h3 className="text-2xl md:text-[26px] font-black tracking-wide text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.9)]">
                      {s.title.toUpperCase()}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom: white card with description */}
              <div className="mt-3 rounded-xl bg-white text-[#111] ring-1 ring-black/10 p-4 md:p-5 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                <div className="mb-2 flex items-center gap-2 text-[11px] tracking-[0.16em] text-black/60">
                  <span className="inline-grid h-4 w-4 place-items-center rounded-[4px] bg-black/5 text-[10px]">
                    ▦
                  </span>
                  {s.stage}
                </div>
                <h4 className="text-base md:text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  {s.blurb}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
