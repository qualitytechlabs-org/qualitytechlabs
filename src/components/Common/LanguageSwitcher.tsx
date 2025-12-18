import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

type Props = { className?: string; variant?: "desktop" | "mobile" };

// EN/HI (both LTR). Labels chosen to be compact + brand-friendly.
const LOCALES = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "hi", label: "हिं", dir: "ltr" }
];

const LanguageSwitcher: React.FC<Props> = ({ className = "", variant = "desktop" }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const current = LOCALES.find(l => l.code === i18n.language) ?? LOCALES[0];

  const change = (code: string, dir: "ltr" | "rtl") => {
    i18n.changeLanguage(code);
    document.documentElement.dir = dir; // keep for future RTL
    setOpen(false);
  };

  // close menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      const menu = document.getElementById("lang-menu");
      if (!btnRef.current) return;
      if (!btnRef.current.contains(t) && !(menu && menu.contains(t))) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // fixed widths so layout never shifts
  const baseBtn =
    variant === "desktop"
      ? "w-14 justify-center px-0 py-1.5 bg-white/10 text-white rounded-full border border-white/15 hover:bg-white/15"
      : "w-16 justify-center px-0 py-2 bg-white/10 text-white rounded-full border border-white/15";

  return (
    <div className={`relative ${className}`}>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(s => !s)}
        className={`flex items-center gap-1 text-sm ${baseBtn}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="lang-menu"
      >
        {current.label}
        <ChevronDown size={14} className="opacity-80" />
      </button>

      {open && (
        <ul
          id="lang-menu"
          role="listbox"
          className="absolute right-0 mt-2 w-28 rounded-lg overflow-hidden border border-white/10 bg-[#151515] text-white shadow-lg z-50"
        >
          {LOCALES.map(l => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === current.code}
                onClick={() => change(l.code, l.dir as "ltr" | "rtl")}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-white/10 ${
                  l.code === current.code ? "bg-white/5" : ""
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
