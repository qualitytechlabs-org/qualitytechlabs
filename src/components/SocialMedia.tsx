import React, { memo, ReactNode } from "react";

type OutlineIconProps = React.SVGProps<SVGSVGElement> & {
  label: string;
  children: ReactNode;
};

const OutlineIcon = memo(({ label, children, ...props }: OutlineIconProps) => (
  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/30 transition hover:ring-white">
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      role="img"
      aria-label={label}
      className="text-white/80"
      {...props}
    >
      {children}
    </svg>
  </span>
));

type SocialItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socialLinks: SocialItem[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586100063452",
    icon: (
      <path
        d="M13 22v-8h3l.5-3H13V8.8c0-1.2.4-1.8 1.9-1.8H17V4.1C16 4 15 3.9 13.8 3.9 11.2 3.9 9.5 5.6 9.5 8.6V11H7v3h2.5v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/quality.techlabs/?hl=en",
    icon: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/QualityTechLabs",
    icon: (
      <path
        d="M4 6l7.5 12M20 6L8.5 18M6 18h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/business2932",
    icon: (
      <>
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5 9c5 0 10 2 14 7M5.5 14.5c3.5-1 8.2-1 13 1M9 4.5c2.5 3 4.5 7 6 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

const SocialMedia: React.FC = () => (
  <div className="flex gap-3">
    {socialLinks.map(({ label, href, icon }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <OutlineIcon label={label}>{icon}</OutlineIcon>
      </a>
    ))}
  </div>
);

export default memo(SocialMedia);
