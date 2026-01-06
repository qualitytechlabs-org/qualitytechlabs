

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ArrowUpRight, Menu, X } from 'lucide-react';
// import { useTranslation } from "react-i18next";
// import BrandLogo from '../components/Common/BrandLogo';
// import LanguageSwitcher from './Common/LanguageSwitcher';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const { t, i18n } = useTranslation();

//   // keep direction synced (both EN/HI are ltr, but future-proof)
//   useEffect(() => {
//     document.documentElement.dir = i18n.dir();
//     const onChange = (lng: string) => { document.documentElement.dir = i18n.dir(lng); };
//     i18n.on('languageChanged', onChange);
//     return () => i18n.off('languageChanged', onChange);
//   }, [i18n]);

//   return (
//     <>
//       {isHomePage && (
//         <div
//           className="fixed top-0 left-0 w-full h-[90px] z-40"
//           style={{ backgroundColor: 'var(--theme-bg)' }}
//         />
//       )}

//       <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4 md:px-6">
//         <div className="flex items-center justify-between rounded-full py-3 px-4 md:px-6 w-full">
//           {/* Brand */}
//           <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap">
           
//            <BrandLogo className="shrink-0" iconSize={28}/>
//           </div>

//           {/* Center Nav (desktop) — widths locked to avoid shift */}
//           <nav className="hidden md:flex bg-white rounded-full px-8 py-2 gap-8 border border-white shadow-lg">
//             <Link to="/" className="text-sm font-semibold text-black">
//               <span className="inline-block whitespace-nowrap min-w-[48px]">{t('navbar.home')}</span>
//             </Link>
//             <Link to="/about" className="text-sm font-normal text-black">
//               <span className="inline-block whitespace-nowrap min-w-[120px]">{t('navbar.about')}</span>
//             </Link>
//             <Link to="/how-it-works" className="text-sm font-normal text-black">
//               <span className="inline-block whitespace-nowrap min-w-[190px]">{t('navbar.howItWorks')}</span>
//             </Link>
//             <Link to="/services" className="text-sm font-normal text-black">
//               <span className="inline-block whitespace-nowrap min-w-[88px]">{t('navbar.services')}</span>
//             </Link>
//           </nav>

//           {/* Right: CTA + Language (desktop) — stable widths */}
//           <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
//             <button className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
//               <ArrowUpRight size={16} />
//               <span className="inline-block whitespace-nowrap min-w-[92px] text-center">
//                 {t('navbar.letsTalk')}
//               </span>
//             </button>
//             <LanguageSwitcher className="hidden md:block" variant="desktop" />
//           </div>

//           {/* Mobile Menu Icon */}
//           <button
//             onClick={() => setMenuOpen(s => !s)}
//             className="md:hidden text-white"
//             aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu (no width locks needed; stacked) */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 space-y-4 text-white text-center shadow-md">
//             <Link to="/" onClick={() => setMenuOpen(false)} className="block text-base font-semibold whitespace-nowrap">
//               {t('navbar.home')}
//             </Link>
//             <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-base whitespace-nowrap">
//               {t('navbar.about')}
//             </Link>
//             <Link to="/how-it-works" onClick={() => setMenuOpen(false)} className="block text-base whitespace-nowrap">
//               {t('navbar.howItWorks')}
//             </Link>
//             <Link to="/services" onClick={() => setMenuOpen(false)} className="block text-base whitespace-nowrap">
//               {t('navbar.services')}
//             </Link>

//             <button className="mt-2 flex items-center justify-center gap-2 border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
//               <ArrowUpRight size={16} />
//               <span className="inline-block whitespace-nowrap">{t('navbar.letsTalk')}</span>
//             </button>

//             <div className="pt-2 flex justify-center">
//               <LanguageSwitcher variant="mobile" />
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useTranslation } from "react-i18next";
import BrandLogo from '../components/Common/BrandLogo';
import LanguageSwitcher from './Common/LanguageSwitcher';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t, i18n } = useTranslation();

  // helper for active link
  const isActive = (path: string) => location.pathname === path;

  // keep direction synced
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    const onChange = (lng: string) => {
      document.documentElement.dir = i18n.dir(lng);
    };
    i18n.on('languageChanged', onChange);
    return () => i18n.off('languageChanged', onChange);
  }, [i18n]);

  return (
    <>
      {isHomePage && (
        <div
          className="fixed top-0 left-0 w-full h-[90px] z-40"
          style={{ backgroundColor: 'var(--theme-bg)' }}
        />
      )}

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4 md:px-6">
        <div className="flex items-center justify-between rounded-full py-3 px-4 md:px-6 w-full">
          
          {/* Brand */}
          <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap">
            <BrandLogo className="shrink-0" iconSize={28} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex bg-white rounded-full px-8 py-2 gap-8 border border-white shadow-lg">
            <Link
              to="/"
              className={`text-sm whitespace-nowrap min-w-[48px] ${
                isActive('/')
                  ? 'font-semibold text-black'
                  : 'font-normal text-black/70 hover:text-black'
              }`}
            >
              {t('navbar.home')}
            </Link>

            <Link
              to="/about"
              className={`text-sm whitespace-nowrap min-w-[120px] ${
                isActive('/about')
                  ? 'font-semibold text-black'
                  : 'font-normal text-black/70 hover:text-black'
              }`}
            >
              {t('navbar.about')}
            </Link>

            <Link
              to="/how-it-works"
              className={`text-sm whitespace-nowrap min-w-[190px] ${
                isActive('/how-it-works')
                  ? 'font-semibold text-black'
                  : 'font-normal text-black/70 hover:text-black'
              }`}
            >
              {t('navbar.howItWorks')}
            </Link>

            <Link
              to="/services"
              className={`text-sm whitespace-nowrap min-w-[88px] ${
                isActive('/services')
                  ? 'font-semibold text-black'
                  : 'font-normal text-black/70 hover:text-black'
              }`}
            >
              {t('navbar.services')}
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
            <button className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              <ArrowUpRight size={16} />
              <span className="inline-block whitespace-nowrap min-w-[92px] text-center">
                {t('navbar.letsTalk')}
              </span>
            </button>
            <LanguageSwitcher className="hidden md:block" variant="desktop" />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(s => !s)}
            className="md:hidden text-white"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 space-y-4 text-white text-center shadow-md">
            
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`block text-base whitespace-nowrap ${
                isActive('/') ? 'font-semibold' : 'opacity-80'
              }`}
            >
              {t('navbar.home')}
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`block text-base whitespace-nowrap ${
                isActive('/about') ? 'font-semibold' : 'opacity-80'
              }`}
            >
              {t('navbar.about')}
            </Link>

            <Link
              to="/how-it-works"
              onClick={() => setMenuOpen(false)}
              className={`block text-base whitespace-nowrap ${
                isActive('/how-it-works') ? 'font-semibold' : 'opacity-80'
              }`}
            >
              {t('navbar.howItWorks')}
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={`block text-base whitespace-nowrap ${
                isActive('/services') ? 'font-semibold' : 'opacity-80'
              }`}
            >
              {t('navbar.services')}
            </Link>

            <button className="mt-2 flex items-center justify-center gap-2 border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              <ArrowUpRight size={16} />
              {t('navbar.letsTalk')}
            </button>

            <div className="pt-2 flex justify-center">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
