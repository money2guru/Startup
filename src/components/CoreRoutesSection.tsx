import React, { useState } from 'react';
import { 
  Award, 
  Building2, 
  Coins, 
  Rocket, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Info, 
  ArrowRight,
  ShieldCheck,
  FileText,
  Lightbulb,
  X
} from 'lucide-react';
import { CORE_SCHEMES } from '../data/startupData';
import { SchemeRoute } from '../types';
import { useToast } from '../context/ToastContext';

export const CoreRoutesSection: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<SchemeRoute | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'registration' | 'funding'>('all');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const { success, linkNotice } = useToast();

  const handleCopy = (url: string, portalName: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    success('Portal URL Copied', `Copied link for ${portalName} to your clipboard.`);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredSchemes = CORE_SCHEMES.filter((scheme) => {
    if (activeFilter === 'registration') {
      return scheme.id === 'dpiit' || scheme.id === 'udyam';
    }
    if (activeFilter === 'funding') {
      return scheme.id === 'mudra' || scheme.id === 'sisfs';
    }
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Coins': return <Coins className="w-6 h-6" />;
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="core-routes" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              Government Framework Breakdown
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              The 4 Core Registration &amp; Funding Routes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Master the exact official rules, zero-cost government portals, and statutory benefits for each critical pathway.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All 4 Routes (Full Suite)
            </button>
            <button
              onClick={() => setActiveFilter('registration')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'registration'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Registrations (DPIIT &amp; Udyam)
            </button>
            <button
              onClick={() => setActiveFilter('funding')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'funding'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Credit &amp; Grants (MUDRA &amp; SISFS)
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white/90 dark:bg-slate-900 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-blue-500/50 transition-all duration-200"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {getIcon(scheme.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                        {scheme.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {scheme.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge & Fee Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Official Fee: {scheme.fee}</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40">
                    {scheme.badge}
                  </span>
                </div>

                {/* Key Rules Block */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2.5">
                    <Info className="w-4 h-4 text-blue-500" />
                    <span>Key Rules &amp; Thresholds</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {scheme.keyRules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits Block */}
                <div className="mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Core Statutory Benefits</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {scheme.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Portal Links & Detail Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {scheme.portalLinks.map((pLink, idx) => (
                    <div key={idx} className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300">
                      <a
                        href={pLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => linkNotice(pLink.name, pLink.url)}
                        className="hover:text-blue-600 dark:hover:text-blue-400 underline font-medium truncate max-w-[150px]"
                        title={`Open ${pLink.name}`}
                      >
                        {pLink.name}
                      </a>
                      <button
                        onClick={() => handleCopy(pLink.url, pLink.name)}
                        className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                        aria-label={`Copy URL for ${pLink.name}`}
                        title="Copy official URL"
                      >
                        {copiedUrl === pLink.url ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedRoute(scheme)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span>Deep Dive &amp; Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Deep-Dive Window */}
      {selectedRoute && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  {getIcon(selectedRoute.iconName)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-display">
                    {selectedRoute.name}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    Government Fee: {selectedRoute.fee}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedRoute(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Scheme Overview &amp; Mandate
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedRoute.details.overview}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Strict Eligibility Conditions</span>
                </h4>
                <ul className="space-y-1.5">
                  {selectedRoute.details.eligibilityList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mandatory Documents Required */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2.5">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Mandatory Documents Required</span>
                </h4>
                <ul className="space-y-1.5">
                  {selectedRoute.details.mandatoryDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Just-In-Time Advisory Pro Tip */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                    Just-In-Time Desk Pro-Tip
                  </h5>
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200/90 mt-1 leading-relaxed">
                    {selectedRoute.details.proTip}
                  </p>
                </div>
              </div>

              {/* Official Portals Direct Action */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Direct Official Portals
                </h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  {selectedRoute.portalLinks.map((portal, idx) => (
                    <a
                      key={idx}
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => linkNotice(portal.name, portal.url)}
                      className="flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                    >
                      <span>Visit {portal.name}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Need customized assistance from Just-In-Time?
              </span>
              <a
                href="#consultation"
                onClick={() => setSelectedRoute(null)}
                className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg transition-colors"
              >
                Request Founder Guidance
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
