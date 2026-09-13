import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  Building2,
  FileCheck2,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/startupData';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode?: () => void;
  setDarkMode?: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleTheme = () => {
    if (toggleDarkMode) {
      toggleDarkMode();
    } else if (setDarkMode) {
      setDarkMode(!darkMode);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '4 Core Routes', href: '#core-routes' },
    { name: 'Launch Roadmap', href: '#launch-roadmap' },
    { name: 'Eligibility Check', href: '#eligibility-tool' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Myth Busters', href: '#myth-busters' },
    { name: 'Govt Portals', href: '#portal-directory' },
    { name: 'Contact Desk', href: '#consultation' },
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-slate-900 dark:bg-slate-950 py-4'
      } text-white border-b border-slate-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Just-In-Time Home">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight font-display text-white">
                  Just-In-Time
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                  Verified Startup Desk
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1 max-w-[280px] sm:max-w-xs">
                One-Stop Startup Solutions • Bhubaneswar
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-blue-400 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Toggles */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="header-phone-cta"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9437068052</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-800 pb-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              
              <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Desk: +91 9437068052</span>
                </a>
                <p className="text-[11px] text-slate-400 text-center">
                  Bhubaneswar, Odisha • Free Initial Founder Consultation
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
