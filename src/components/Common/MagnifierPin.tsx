// MagnifierBadge.tsx
import React from "react";
import { motion } from "framer-motion";

type Props = {
  size?: number;               // circle diameter
  floating?: boolean;          // idle float
  className?: string;
  style?: React.CSSProperties; // margins, etc.
};

const MagnifierBadge: React.FC<Props> = ({
  size = 100,
  floating = true,
  className,
  style,
}) => {
  const strokeW = Math.round(size * 0.14);
  const handleLen = Math.round(size * 0.34);
  const handleW = Math.max(6, Math.round(size * 0.14));
  const r = 56 - strokeW / 2;

  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        lineHeight: 0,
        verticalAlign: "middle",
        ...style,
      }}
      initial={{ y: 0 }}
      animate={floating ? { y: [0, -3, 0] } : { y: 0 }}
      transition={floating ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      <svg width={size + handleLen} height={size + handleLen} viewBox="0 0 160 160">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FCA685" />
            <stop offset="100%" stopColor="#FC7580" />
          </linearGradient>
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* handle */}
        <g transform="translate(108,108) rotate(40)">
          <rect x="0" y={-handleW / 2} width={handleLen} height={handleW} rx={handleW / 2} fill="#fff" />
        </g>

        {/* lens + ring */}
        <circle cx="80" cy="80" r={r} fill="#0c0c0c" opacity="0.9" />
        <circle cx="80" cy="80" r={r} fill="none" stroke="#fff" strokeWidth={strokeW} />

        {/* subtle ring shine */}
        <motion.circle
          cx="80" cy="80" r={r}
          fill="none" stroke="url(#shine)" strokeWidth={Math.max(2, strokeW * 0.5)}
          strokeDasharray={Math.PI * 2 * r}
          animate={{ strokeDashoffset: [0, -Math.PI * 2 * r] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
          opacity="0.35"
          style={{ mixBlendMode: "screen" as any }}
        />

        {/* lamp + two rising blobs */}
        <path d="M54 96 C60 100,72 103,86 100 C96 98,102 93,106 87 C92 85,76 84,60 88 C56 89,54 91,54 96 Z" fill="url(#g)" />
        <motion.circle cx="74" cy="78" r="8" fill="url(#g)"
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{ y: [-4, -18], opacity: [1, 0.25], scale: [1, 1.1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
        />
        <motion.circle cx="96" cy="64" r="7" fill="url(#g)"
          initial={{ y: 0, opacity: 0.9, scale: 0.95 }}
          animate={{ y: [-2, -16], opacity: [0.9, 0.25], scale: [0.95, 1.05] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.9 }}
        />
      </svg>
    </motion.span>
  );
};

export default MagnifierBadge;
