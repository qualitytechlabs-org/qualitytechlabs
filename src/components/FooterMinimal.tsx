// components/Common/FooterMinimal.tsx
import React from "react";
import SocialMedia from "./SocialMedia";

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
                C-312 Gali no 13, Mulla Colony, Vasundhara enclave, East Delhi
                110096
              </span>
            </a>
          </div>

          {/* right: socials + columns */}
          <div className="md:col-span-5 md:pl-6">
            {/* socials */}
            <div className="flex md:justify-end gap-4 mb-5">
              <SocialMedia />
            </div>

            {/* link columns */}
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <p className="text-white/60">Company</p>
                <a
                  href="/about"
                  className="block text-white/80 hover:text-white"
                >
                  About us
                </a>
                <a
                  href="/services"
                  className="block text-white/80 hover:text-white"
                >
                  Services
                </a>
                <a
                  href="/team"
                  className="block text-white/80 hover:text-white"
                >
                  Our team
                </a>
              </div>
              <div className="space-y-2 md:text-right">
                <p className="text-white/60">Work</p>
                <a
                  href="/work"
                  className="block text-white/80 hover:text-white"
                >
                  Our Work
                </a>
                <a
                  href="/careers"
                  className="block text-white/80 hover:text-white"
                >
                  Join us
                </a>
                <a
                  href="/contact"
                  className="block text-white/80 hover:text-white"
                >
                  Contact us
                </a>
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
