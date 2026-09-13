import React, { useState } from 'react';
import { 
  AlertOctagon, 
  ShieldAlert, 
  CheckCircle, 
  ExternalLink, 
  PhoneForwarded, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp,
  XCircle,
  HelpCircle
} from 'lucide-react';
import { FRAUD_WARNING_GUIDELINES } from '../data/startupData';

export const FraudWarningBanner: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [copiedHelpline, setCopiedHelpline] = useState(false);

  const handleCopyHelpline = () => {
    navigator.clipboard.writeText('1930');
    setCopiedHelpline(true);
    setTimeout(() => setCopiedHelpline(false), 2000);
  };

  return (
    <section id="fraud-warning" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-2xl border-2 border-red-500/30 bg-gradient-to-r from-red-950/40 via-slate-900/90 to-amber-950/30 dark:bg-slate-900/90 p-5 sm:p-7 shadow-xl shadow-red-950/20">
        
        {/* Glow Element */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-red-500/20">
          
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 text-red-400">
              <AlertOctagon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider bg-red-600 text-white rounded-md">
                  Founder Alert
                </span>
                <span className="text-xs font-semibold text-amber-400 dark:text-amber-300">
                  Beware of Fake Government Portals &amp; Unofficial Agents
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-display mt-1">
                Zero Fees on Official Portals — Do NOT Pay Lookalike Intermediaries
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-expanded={expanded}
            >
              <span>{expanded ? 'Collapse Safety Rules' : 'View Safety Rules'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <button
              onClick={handleCopyHelpline}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-red-700 hover:bg-red-600 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
              title="National Cyber Crime Helpline"
            >
              {copiedHelpline ? <Check className="w-4 h-4 text-emerald-300" /> : <PhoneForwarded className="w-4 h-4" />}
              <span>{copiedHelpline ? 'Helpline 1930 Copied' : 'Cyber Helpline: 1930'}</span>
            </button>
          </div>

        </div>

        {/* Expandable Content */}
        {expanded && (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
            {FRAUD_WARNING_GUIDELINES.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-slate-900/80 dark:bg-slate-950/60 border border-slate-800 hover:border-red-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Reality Check bar */}
        <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              <strong>Golden Rule:</strong> DPIIT recognition on NSWS and MSME registration on Udyam are <span className="text-emerald-400 font-bold">100% FREE</span> of government charges.
            </span>
          </div>

          <a 
            href="https://cybercrime.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-red-400 hover:text-red-300 underline"
          >
            <span>Report Cyber Scams (cybercrime.gov.in)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
