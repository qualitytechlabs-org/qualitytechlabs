// components/Common/FooterMinimal.tsx
import React from "react";

const OutlineIcon: React.FC<
  React.SVGProps<SVGSVGElement> & { label: string }
> = ({ label, children, ...p }) => (
  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-white/30 hover:ring-white transition">
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-label={label}
      role="img"
      className="text-white/80"
      {...p}
    >
      {children}
    </svg>
  </span>
);

const FooterMinimal: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0E] text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* left: email + address */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <a
                href="mailto:Oracletechlabs@gmail.com"
                className="text-[28px] md:text-[32px] font-medium tracking-tight hover:underline"
              >
                info@qualitytechlabs.com
              </a>
              {/* curved arrow */}
              <svg
                viewBox="0 0 56 24"
                className="h-6 w-14 -rotate-10 text-white/90"
              >
                <path
                  d="M2 22c14-10 29-12 52-8M47 4l5 10M36 6l7 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* address pill */}
            <a
              href="#map" // dummy link
              className="mt-6 inline-flex items-start gap-3 rounded-md bg-black/50 px-4 py-3 ring-1 ring-white/10 hover:bg-black/60 transition"
            >
              <span className="text-xl leading-none">🇮🇳</span>
              <span className="text-xs leading-5 text-white/85">
                C-312 Gali no 13, Mulla Colony, Vasundhara enclave, East Delhi 110096
              </span>
            </a>
          </div>

          {/* right: socials + columns */}
          <div className="md:col-span-5 md:pl-6">
            {/* socials */}
            <div className="flex md:justify-end gap-4 mb-5">
              <a href="https://facebook.example" aria-label="Facebook">
                <OutlineIcon label="Facebook">
                  <path
                    d="M13 22v-8h3l.5-3H13V8.8c0-1.2.4-1.8 1.9-1.8H17V4.1C16 4 15 3.9 13.8 3.9 11.2 3.9 9.5 5.6 9.5 8.6V11H7v3h2.5v8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </OutlineIcon>
              </a>
              <a href="https://instagram.example" aria-label="Instagram">
                <OutlineIcon label="Instagram">
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
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
                </OutlineIcon>
              </a>
              <a href="https://twitter.example" aria-label="Twitter/X">
                <OutlineIcon label="Twitter">
                  <path
                    d="M4 6l7.5 12M20 6L8.5 18M6 18h12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </OutlineIcon>
              </a>
              <a href="https://dribbble.example" aria-label="Dribbble">
                <OutlineIcon label="Dribbble">
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M5 9c5 0 10 2 14 7M5.5 14.5c3.5-1 8.2-1 13 1M9 4.5c2.5 3 4.5 7 6 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </OutlineIcon>
              </a>
            </div>

            {/* link columns */}
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <p className="text-white/60">Company</p>
                <a href="/about" className="block text-white/80 hover:text-white">About us</a>
                <a href="/services" className="block text-white/80 hover:text-white">Services</a>
                <a href="/team" className="block text-white/80 hover:text-white">Our team</a>
              </div>
              <div className="space-y-2 md:text-right">
                <p className="text-white/60">Work</p>
                <a href="/work" className="block text-white/80 hover:text-white">Our Work</a>
                <a href="/careers" className="block text-white/80 hover:text-white">Join us</a>
                <a href="/contact" className="block text-white/80 hover:text-white">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* thin divider */}
      <div className="h-px w-full bg-white/10" />
    </footer>
  );
};

export default FooterMinimal;
