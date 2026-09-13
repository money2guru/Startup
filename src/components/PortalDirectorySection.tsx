import React, { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Building, 
  Search, 
  Lock,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { OFFICIAL_PORTALS, GST_REGISTRATION_GUIDE } from '../data/startupData';
import { useToast } from '../context/ToastContext';

export const PortalDirectorySection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'funding' | 'optional_tax'>('all');
  const [showGstDetails, setShowGstDetails] = useState(false);
  const { success, linkNotice } = useToast();

  const handleCopy = (id: string, url: string, displayUrl: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    success('URL Copied to Clipboard', `Copied ${displayUrl} directly to your clipboard.`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPortals = OFFICIAL_PORTALS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery = 
      p.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.displayUrl.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.governingBody.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.primaryPurpose.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="portal-directory" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              Official Reference Directory
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Direct Official Government Portal Directory
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Only use authorized government portals ending in <code className="text-blue-600 dark:text-blue-400 font-mono font-bold">.gov.in</code> or <code className="text-blue-600 dark:text-blue-400 font-mono font-bold">.nic.in</code>. Verified with zero intermediary markups.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search portal, GST, Udyam, MCA..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300/80 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* Dedicated Optional GST Registration Portal Banner / Hub */}
        <div className="mb-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 border border-slate-700/80 shadow-lg relative overflow-hidden">
          {/* Subtle Ambient Background Accent */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Optional &amp; Voluntary for Early Startups</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  ₹0 Government Filing Fee
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30 font-mono">
                  Form GST REG-01
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Official Link: reg.gst.gov.in</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight flex items-center gap-2.5">
                  <span>Goods &amp; Services Tax (GST) Portal Registration</span>
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Under statutory Indian tax law, GST registration is <strong className="text-amber-300">not mandatory</strong> for early ventures with annual turnover below <strong className="text-white">₹40 Lakhs</strong> (goods) or <strong className="text-white">₹20 Lakhs</strong> (services) in normal states. However, you can <strong className="text-emerald-300">voluntarily register directly from here</strong> at zero cost if your business requires it.
                </p>

                {/* Statutory Threshold Quick Box */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                    <div className="text-slate-400 font-medium">Supply of Goods</div>
                    <div className="font-extrabold text-white text-sm mt-0.5">{GST_REGISTRATION_GUIDE.turnoverThresholds.goodsNormal}</div>
                    <div className="text-[11px] text-emerald-400 mt-1">Exempt below limit</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                    <div className="text-slate-400 font-medium">Supply of Services</div>
                    <div className="font-extrabold text-white text-sm mt-0.5">{GST_REGISTRATION_GUIDE.turnoverThresholds.servicesNormal}</div>
                    <div className="text-[11px] text-emerald-400 mt-1">Exempt below limit</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                    <div className="text-slate-400 font-medium">Special States</div>
                    <div className="font-extrabold text-white text-sm mt-0.5">{GST_REGISTRATION_GUIDE.turnoverThresholds.specialCategoryStates}</div>
                    <div className="text-[11px] text-amber-400 mt-1">NE &amp; Hill states</div>
                  </div>
                </div>

                {/* Expandable Deep Dive Checklist */}
                {showGstDetails && (
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-6 animate-fadeIn">
                    {/* Why Register Voluntarily */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        <span>Why Early Startups Choose Voluntary Registration</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {GST_REGISTRATION_GUIDE.whyRegisterVoluntarily.map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs">
                            <div className="font-bold text-white mb-1">{item.title}</div>
                            <div className="text-slate-300 leading-relaxed">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Required Documents */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span>Documents Required for Free Online Filing</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {GST_REGISTRATION_GUIDE.documentsRequired.map((doc, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-300 p-2 rounded-lg bg-slate-800/40">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 4-Step Filing Flow */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-400" />
                        <span>Official 4-Step Registration Procedure (REG-01)</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        {GST_REGISTRATION_GUIDE.stepsToRegister.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-slate-300 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
                            <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold flex-shrink-0 text-[11px]">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 bg-slate-800/90 p-5 rounded-xl border border-slate-700/90 shadow-md">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Government Action
                </div>

                <a
                  href={GST_REGISTRATION_GUIDE.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => linkNotice('Official GST Registration Portal', GST_REGISTRATION_GUIDE.officialUrl)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all hover:shadow-blue-500/20"
                >
                  <span>Register on GST Portal (REG-01)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400">
                  <span className="truncate">{GST_REGISTRATION_GUIDE.displayUrl}</span>
                  <button
                    onClick={() => handleCopy('gst-main-banner', GST_REGISTRATION_GUIDE.officialUrl, GST_REGISTRATION_GUIDE.displayUrl)}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                    title="Copy official registration URL"
                    aria-label="Copy official registration URL"
                  >
                    {copiedId === 'gst-main-banner' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowGstDetails(!showGstDetails)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg text-slate-300 hover:text-white bg-slate-700/60 hover:bg-slate-700 transition-colors"
                >
                  <span>{showGstDetails ? 'Hide Detailed Guide & Checklist' : 'View Checklist & Step-by-Step Guide'}</span>
                  {showGstDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <div className="pt-2 border-t border-slate-700/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Need expert filing guidance?</span>
                  <a href="#consultation" className="text-blue-400 hover:text-blue-300 font-semibold underline">
                    Ask Consultation Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2 uppercase tracking-wider">
            Filter Portals:
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            All Portals ({OFFICIAL_PORTALS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('core')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'core'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            Core Corporate &amp; MSME
          </button>
          <button
            onClick={() => setSelectedCategory('funding')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'funding'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            Grants &amp; Bank Credit
          </button>
          <button
            onClick={() => setSelectedCategory('optional_tax')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
              selectedCategory === 'optional_tax'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 hover:bg-amber-100 dark:hover:bg-amber-900/50'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Optional Tax (GST)</span>
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/75 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <th className="py-4 px-6">Official Portal &amp; Ministry</th>
                <th className="py-4 px-6">Verified Secure URL</th>
                <th className="py-4 px-6">Statutory Scope &amp; Purpose</th>
                <th className="py-4 px-4 text-center">Govt Fee</th>
                <th className="py-4 px-6 text-right">Direct Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {filteredPortals.map((portal) => (
                <tr 
                  key={portal.id} 
                  className={`hover:bg-slate-50/80 dark:hover:bg-slate-850 transition-colors ${
                    portal.isOptional ? 'bg-amber-50/20 dark:bg-amber-950/10' : ''
                  }`}
                >
                  
                  {/* Name & Ministry */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold flex-shrink-0 ${
                        portal.isOptional 
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                          : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                      }`}>
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {portal.name}
                          </span>
                          {portal.isOptional && (
                            <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                              Optional
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {portal.governingBody}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* URL with Copy */}
                  <td className="py-4 px-6 font-mono text-xs">
                    <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/90 px-3 py-1.5 rounded-lg text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      <Lock className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{portal.displayUrl}</span>
                      <button
                        onClick={() => handleCopy(portal.id, portal.url, portal.displayUrl)}
                        className="p-1 rounded text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                        title="Copy official URL"
                        aria-label={`Copy URL for ${portal.name}`}
                      >
                        {copiedId === portal.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </td>

                  {/* Purpose */}
                  <td className="py-4 px-6 text-xs text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                    {portal.primaryPurpose}
                  </td>

                  {/* Fee */}
                  <td className="py-4 px-4 text-center">
                    <span className="inline-block px-2.5 py-1 text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                      {portal.governmentFee}
                    </span>
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-6 text-right">
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => linkNotice(portal.name, portal.url)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-white text-xs font-bold shadow-sm transition-colors ${
                        portal.isOptional 
                          ? 'bg-amber-600 hover:bg-amber-500' 
                          : 'bg-blue-600 hover:bg-blue-500'
                      }`}
                    >
                      <span>{portal.isOptional ? 'Register Online' : 'Open Portal'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Cards View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPortals.map((portal) => (
            <div
              key={portal.id}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between ${
                portal.isOptional ? 'ring-1 ring-amber-400/30' : ''
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded">
                      {portal.tag}
                    </span>
                    {portal.isOptional && (
                      <span className="px-2 py-0.5 text-[11px] font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded">
                        Optional
                      </span>
                    )}
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded">
                    {portal.governmentFee}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  {portal.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {portal.governingBody}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {portal.primaryPurpose}
                </p>

                <div className="mt-4 flex items-center justify-between bg-slate-100/70 dark:bg-slate-800 px-3 py-2 rounded-lg font-mono text-xs text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700">
                  <span className="truncate">{portal.displayUrl}</span>
                  <button
                    onClick={() => handleCopy(portal.id, portal.url, portal.displayUrl)}
                    className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white flex-shrink-0"
                    aria-label={`Copy URL for ${portal.name}`}
                  >
                    {copiedId === portal.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => linkNotice(portal.name, portal.url)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-white rounded-lg shadow-sm ${
                    portal.isOptional ? 'bg-amber-600 hover:bg-amber-500' : 'bg-blue-600 hover:bg-blue-500'
                  }`}
                >
                  <span>{portal.isOptional ? 'Register Online (Optional)' : 'Visit Official Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
