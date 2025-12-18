import { Link } from "react-router-dom";
import MagnifierBadge from "./MagnifierPin";

type Props = {
  className?: string;
  iconSize?: number; // magnifier size (px)
  to?: string;
};

export default function BrandLogo({
  className,
  iconSize = 28,
  to = "/",
}: Props) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 select-none ${className || ""}`}
      aria-label="Quality Tech Labs - Home"
    >
      <MagnifierBadge size={iconSize} />
      {/* Wordmark — Option B (text) */}
      <div className="leading-tight text-white">
        <span className="block font-extrabold tracking-[0.01em] text-[20px] leading-[1]">
          Quality
        </span>
        <span className="block text-[12px] -mt-[2px] opacity-85 tracking-[0.06em]">
          Tech Labs
        </span>
      </div>
    </Link>
  );
}
