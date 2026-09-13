import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  FileCheck2,
  ReceiptText,
  ShieldCheck,
  Building2,
  BookOpen
} from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/startupData';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-startup-eligibility': true, // Open the first item by default
    'faq-tax-benefits-80iac': true   // Open the tax benefit item by default
  });

  const categoryFilterOptions = [
    { key: 'All', label: 'All Questions' },
    { key: 'eligibility', label: 'Eligibility' },
    { key: 'registration', label: 'Registration' },
    { key: 'tax', label: 'Tax & Exemptions' },
    { key: 'funding', label: 'Funding & Grants' },
    { key: 'compliance', label: 'IPR & Compliance' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => {
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.directAnswerSummary && item.directAnswerSummary.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.officialReference && item.officialReference.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredFaqs.forEach(faq => {
      allOpen[faq.id] = true;
    });
    setOpenItems(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenItems({});
  };

  // Generate FAQPage JSON-LD schema for SEO/AEO indexing with direct answer summaries
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': `${item.directAnswerSummary} ${item.answer.replace(/\n+/g, ' ')} Source: ${item.officialReference}`
      }
    }))
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
      aria-label="Frequently Asked Questions"
    >
      {/* Dynamic Schema Injection for Answer Engines & Search Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Direct Authority Knowledge Base</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Verified, statutory clarifications on DPIIT Startup India Recognition, 
            Section 80-IAC Tax Holidays, Angel Tax abolishment, MSME Samadhaan, and Seed Fund rules.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search questions (e.g., Section 80-IAC, Sole Proprietorship, ₹0 fee, SISFS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs & Expand/Collapse Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {categoryFilterOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setActiveCategory(opt.key)}
                  className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                    activeCategory === opt.key
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={handleExpandAll}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline px-2 py-1"
              >
                Expand All
              </button>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <button
                onClick={handleCollapseAll}
                className="text-slate-500 dark:text-slate-400 font-medium hover:underline px-2 py-1"
              >
                Collapse All
              </button>
            </div>
          </div>

        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">No matching questions found</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching for "registration", "tax holiday", "angel tax", or "eligibility", or reset the filter.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-50/90 dark:bg-slate-800/70 border-blue-300 dark:border-blue-700 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                          {faq.categoryLabel}
                        </span>
                        {faq.badge && (
                          <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            {faq.badge}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono">
                          Q{index + 1}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-full mt-1 flex-shrink-0 transition-transform duration-200 ${
                      isOpen 
                        ? 'bg-blue-600 text-white rotate-180' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/60 animate-in fade-in duration-200 space-y-4"
                    >
                      {/* Direct-Answer Inverted Pyramid Snippet (Engineered for AEO / SearchGPT / Perplexity / AI Overviews) */}
                      {faq.directAnswerSummary && (
                        <div className="p-3.5 rounded-xl bg-blue-50/90 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-950 dark:text-blue-100">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>Direct Statutory Summary (AEO Direct Answer)</span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                            {faq.directAnswerSummary}
                          </p>
                        </div>
                      )}

                      {/* Detailed Statutory Explanation */}
                      <div className="whitespace-pre-line space-y-2 pt-1 text-slate-700 dark:text-slate-300 font-normal">
                        {faq.answer}
                      </div>

                      {/* Verifiable Official Authority Citation */}
                      {faq.officialReference && (
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span><strong>Official Statutory Reference:</strong> {faq.officialReference}</span>
                          </div>
                          {faq.officialPortalUrl && (
                            <a 
                              href={faq.officialPortalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                              <span>Official Portal</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* FAQ Bottom Call to Action Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-semibold tracking-wide">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Still Have Specific Questions?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Talk Directly with Just-In-Time Advisors
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              From drafting your innovation brief to navigating MSME Samadhaan recovery and MUDRA credit sanction, our team in Bhubaneswar is ready to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-bold text-xs sm:text-sm shadow hover:bg-blue-50 transition-colors"
            >
              <span>Call Helpline</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow transition-colors"
            >
              <span>WhatsApp Us</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
