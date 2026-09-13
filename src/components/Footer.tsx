import React from 'react';
import { 
  Building2, 
  Phone, 
  ShieldAlert, 
  ExternalLink, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, OFFICIAL_PORTALS } from '../data/startupData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      
      {/* Disclaimer Banner */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-amber-300 font-semibold uppercase tracking-wider block sm:inline mr-2">
              Important Disclaimer &amp; Anti-Fraud Notice:
            </strong>
            {COMPANY_INFO.disclaimer}
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-600/30">
                J
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-display">
                Just-In-Time
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}. Assisting visionary Indian entrepreneurs through transparent, ethical, and verified regulatory pathways.
            </p>

            {/* Address */}
            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#core-routes" className="hover:text-white transition-colors">
                  Core Startup Schemes (DPIIT &amp; MSME)
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  4-Step Founder Roadmap
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  MSME &amp; Scheme Eligibility Checker
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors text-blue-400 font-semibold">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <a href="#myth-busters" className="hover:text-white transition-colors">
                  Policy Myth-Busters
                </a>
              </li>
              <li>
                <a href="#portal-directory" className="hover:text-white transition-colors">
                  Official Gov Portals Directory
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-white transition-colors">
                  Book Advisory Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Official Gov Portals Direct Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>Verified Government Links</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </h4>
            <p className="text-[11px] text-slate-400">
              Government portals end in <strong>.gov.in</strong> or <strong>.nic.in</strong>. Verify URLs before sharing sensitive credentials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {OFFICIAL_PORTALS.slice(0, 6).map((portal) => (
                <a
                  key={portal.id}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white text-[11px] flex items-center justify-between transition-colors"
                >
                  <span className="truncate">{portal.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-1 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Just-In-Time Startup Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white transition-colors text-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
