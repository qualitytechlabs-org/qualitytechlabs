// components/Sections/BuildWaysComparison.tsx
import React from "react";
import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title?: string;
  oldTitle?: string;
  newTitle?: string;
  oldPoints?: string[];
  newPoints?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
};

const BuildWaysComparison: React.FC<Props> = ({
  eyebrow = "OUR SERVICES",
  title = "The “old way” of building digital products is costing you clarity, time, and peace of mind.",
  oldTitle = "Old way",
  newTitle = "The Quality way",
  oldPoints = [
    "Unclear scopes, bloated quotes, and shifting deadlines",
    "Design and development handled by two different teams",
    "You chase updates, feedback, and revisions",
    "Cookie-cutter solutions that don’t fit your business",
    "Once delivered, you're on your own",
  ],
  newPoints = [
    "Transparent pricing & clear timelines — no surprises",
    "Design + Code in sync — built by one collaborative team",
    "Proactive communication — you’ll always know what’s next",
    "Custom-built solutions — crafted to solve your real needs",
    "Support beyond launch — we don’t vanish after delivery",
  ],
  ctaText = "Start a Project",
  onCtaClick,
}) => {
  return (
    <section className="relative w-full bg-[#0e0e0e] text-white py-16 md:py-20">
      {/* top-only fade behind content */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/35 to-transparent z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* heading */}
        <div className="rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))] p-6 md:p-8 mb-6 md:mb-8">
          <p className="uppercase tracking-[0.18em] text-white/60 text-sm mb-2">{eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-white max-w-5xl">
            {title}
          </h2>
        </div>

        {/* card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl ring-1 ring-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* left */}
            <div className="bg-white text-[#111] p-6 sm:p-8 md:p-10 md:rounded-l-2xl">
              <h3 className="text-xl font-semibold mb-6">{oldTitle}</h3>
              <ul className="space-y-4 text-[15px] leading-7">
                {oldPoints.map((pt, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3b3b3b]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* right */}
            <div className="bg-[#a9d3ff] text-[#0c1726] p-6 sm:p-8 md:p-10 md:rounded-r-2xl md:border-l md:border-black/10">
              <h3 className="text-xl font-semibold mb-6">{newTitle}</h3>
              <ul className="space-y-4 text-[15px] leading-7">
                {newPoints.map((pt, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0c1726]/70" />
                    <span>
                      {pt.includes("—") ? (
                        <>
                          <strong className="font-semibold">
                            {pt.split("—")[0].trim()}{" "}
                          </strong>
                          — {pt.split("—")[1].trim()}
                        </>
                      ) : (
                        pt
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA closer to card */}
        <div className="flex justify-center pt-6 pb-4">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-[#ff8a7a] to-[#7d5cff] px-6 py-3 text-white font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:opacity-95 active:scale-[0.99] transition"
          >
            <span className="inline-block rotate-45">↗</span>
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuildWaysComparison;
