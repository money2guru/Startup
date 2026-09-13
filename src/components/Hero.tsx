import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Building2, 
  Coins, 
  Rocket, 
  PhoneCall,
  ExternalLink,
  Info,
  AlertTriangle,
  Copy,
  Check,
  Zap,
  HelpCircle,
  X,
  FileCheck,
  TrendingUp,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/startupData';
import { useToast } from '../context/ToastContext';

type VentureStage = 'idea' | 'startup' | 'msme' | 'credit';
type EntityType = 'pvtltd' | 'llp' | 'prop' | 'unreg';

interface RotatingHook {
  id: string;
  text: string;
  tagline: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  icon: React.ElementType;
}

const ROTATING_HOOKS: RotatingHook[] = [
  {
    id: 'zero-fees',
    text: 'Zero Agent Fees',
    tagline: 'Never pay ₹10,000–₹25,000 to middlemen for free government certificates',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-300',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    borderColor: 'border-emerald-500/40',
    icon: ShieldCheck,
  },
  {
    id: 'paperless',
    text: '100% Paperless Process',
    tagline: 'Instant Aadhaar OTP e-filings directly on official NSWS & Udyam portals',
    gradient: 'from-cyan-400 via-sky-300 to-blue-400',
    badgeBg: 'bg-cyan-500/15',
    badgeText: 'text-cyan-300',
    borderColor: 'border-cyan-500/40',
    icon: FileCheck,
  },
  {
    id: 'verified',
    text: 'Government-Verified Guidance',
    tagline: '100% aligned with latest 2025/2026 DPIIT & MSME statutory gazettes',
    gradient: 'from-blue-400 via-indigo-300 to-violet-300',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-blue-300',
    borderColor: 'border-blue-500/40',
    icon: CheckCircle2,
  },
  {
    id: 'seed-grants',
    text: '₹20L Non-Dilutive Seed Grants',
    tagline: '0% equity dilution prototype & POC funding via accredited incubators',
    gradient: 'from-purple-400 via-fuchsia-300 to-pink-300',
    badgeBg: 'bg-purple-500/15',
    badgeText: 'text-purple-300',
    borderColor: 'border-purple-500/40',
    icon: Rocket,
  }
];

interface MatchResult {
  schemeName: string;
  badge: string;
  badgeColor: string;
  highlightBenefit: string;
  statutoryFee: string;
  regulatoryStatus: 'qualified' | 'warning' | 'prerequisite';
  portalName: string;
  portalUrl: string;
  keyRule: string;
  advisorNote: string;
  targetAnchor: string;
}

export const Hero: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<VentureStage>('startup');
  const [selectedEntity, setSelectedEntity] = useState<EntityType>('pvtltd');
  const [isScamModalOpen, setIsScamModalOpen] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [activeHookIndex, setActiveHookIndex] = useState<number>(0);
  const { success, linkNotice } = useToast();

  // Automatic rotation of impactful founder hooks
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHookIndex((prev) => (prev + 1) % ROTATING_HOOKS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (url: string, name: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    success('Official Portal URL Copied', `${name} link copied to clipboard.`);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  // Compute Instant Scheme Matcher results in real time
  const getMatcherResult = (): MatchResult => {
    if (selectedStage === 'idea') {
      if (selectedEntity === 'unreg') {
        return {
          schemeName: 'MCA Company Incorporation + SISFS Incubation Track',
          badge: 'Early Stage Pathway',
          badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
          highlightBenefit: 'Up to ₹20 Lakh Non-Dilutive POC Grant + MCA SPICe+ Setup',
          statutoryFee: '₹0 for SISFS Grant (Standard MCA statutory fees apply for registration)',
          regulatoryStatus: 'prerequisite',
          portalName: 'Ministry of Corporate Affairs & Startup India',
          portalUrl: 'https://www.mca.gov.in',
          keyRule: 'DPIIT & SISFS seed grants mandate an incorporated entity (Pvt Ltd / LLP). Unregistered ideas cannot receive direct government grant disbursements.',
          advisorNote: 'Form a legal Pvt Ltd or LLP first to secure founder equity split, IP ownership, and eligibility for the ₹20L SISFS grant.',
          targetAnchor: '#roadmap'
        };
      }
      if (selectedEntity === 'prop') {
        return {
          schemeName: 'Corporate Upgrade Required for SISFS Seed Grants',
          badge: 'Entity Restriction Alert',
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          highlightBenefit: 'Unlock ₹20L Grant + 3-Yr 100% Tax Exemption by converting to Pvt Ltd / LLP',
          statutoryFee: '₹0 for SISFS Grant (Conversion charges apply)',
          regulatoryStatus: 'warning',
          portalName: 'Startup India SISFS Portal',
          portalUrl: 'https://seedfund.startupindia.gov.in',
          keyRule: 'Sole proprietorships are strictly disqualified from DPIIT Recognition and SISFS grants under Central Government guidelines.',
          advisorNote: 'Convert your proprietorship to an LLP or Private Limited to unlock 0% equity seed grants and Section 80-IAC tax holiday.',
          targetAnchor: '#calculator'
        };
      }
      return {
        schemeName: 'Startup India Seed Fund Scheme (SISFS)',
        badge: 'Top Recommendation: Seed Capital',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        highlightBenefit: 'Up to ₹20 Lakh 100% Non-Repayable Grant for Prototype & POC Trials',
        statutoryFee: '₹0 / NIL Government Application Fee',
        regulatoryStatus: 'qualified',
        portalName: 'SISFS Official Incubator Gateway',
        portalUrl: 'https://seedfund.startupindia.gov.in',
        keyRule: 'Apply to up to 3 approved incubators. Must hold DPIIT recognition and be incorporated less than 2 years ago.',
        advisorNote: 'The ₹20 Lakh milestone grant requires 0% equity dilution and zero collateral. Evaluated directly by accredited incubator boards.',
        targetAnchor: '#core-routes'
      };
    }

    if (selectedStage === 'startup') {
      if (selectedEntity === 'prop') {
        return {
          schemeName: 'Entity Ineligibility Alert: Proprietorship Disqualified from DPIIT',
          badge: 'DPIIT Rule Warning',
          badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
          highlightBenefit: 'Currently eligible only for Udyam MSME (45-Day Payment Recovery & PSL Loans)',
          statutoryFee: '₹0 for Udyam (DPIIT requires Pvt Ltd / LLP conversion)',
          regulatoryStatus: 'warning',
          portalName: 'Udyam Registration Portal',
          portalUrl: 'https://udyamregistration.gov.in',
          keyRule: 'DPIIT Notification: Sole proprietorships and unregistered firms cannot receive DPIIT Startup Recognition or Section 80-IAC tax exemption.',
          advisorNote: 'Convert to a Private Limited Company or LLP to claim 3 consecutive years of 100% tax holiday and angel tax immunity.',
          targetAnchor: '#calculator'
        };
      }
      if (selectedEntity === 'unreg') {
        return {
          schemeName: 'MCA Company Incorporation Pathway',
          badge: 'Mandatory Step 1',
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          highlightBenefit: 'Unlock DPIIT Certification + ₹200 Cr Turnover Cap + 80% Patent Rebate',
          statutoryFee: '₹0 for DPIIT Recognition upon legal incorporation',
          regulatoryStatus: 'prerequisite',
          portalName: 'MCA SPICe+ Portal',
          portalUrl: 'https://www.mca.gov.in',
          keyRule: 'A registered Certificate of Incorporation (COI) and corporate PAN are non-negotiable prerequisites for DPIIT filing on NSWS.',
          advisorNote: 'Incorporate on MCA21 within 5–7 working days, then submit your DPIIT recognition filing with zero government fee on NSWS.',
          targetAnchor: '#roadmap'
        };
      }
      return {
        schemeName: 'DPIIT Startup Recognition + Section 80-IAC Tax Exemption',
        badge: 'Highest Value Route (Gold Standard)',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        highlightBenefit: '3-Year 100% Tax Holiday + Angel Tax Immunity + 80% Patent Rebate',
        statutoryFee: '₹0 / NIL Government Application Fee (100% Free on NSWS)',
        regulatoryStatus: 'qualified',
        portalName: 'National Single Window System (NSWS)',
        portalUrl: 'https://www.nsws.gov.in',
        keyRule: 'Turnover up to ₹200 Cr (₹300 Cr for Deep Tech up to 20 yrs). Must demonstrate innovation or scalability in write-up.',
        advisorNote: 'Never pay private agents ₹10,000–₹25,000 for this. The filing is 100% free on NSWS. Just-In-Time assists with precision innovation narratives.',
        targetAnchor: '#core-routes'
      };
    }

    if (selectedStage === 'msme') {
      return {
        schemeName: 'Udyam MSME Registration + MSME Samadhaan',
        badge: 'Mandatory Statutory Armor',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        highlightBenefit: 'Section 15 Strict 45-Day Payment Recovery + Priority Bank Lending (PSL)',
        statutoryFee: '₹0 / NIL Government Fee (100% Paperless & Instant)',
        regulatoryStatus: 'qualified',
        portalName: 'Official Udyam Portal',
        portalUrl: 'https://udyamregistration.gov.in',
        keyRule: 'Applies to Micro (≤₹2.5 Cr Inv, ≤₹10 Cr Turnover), Small (≤₹25 Cr Inv, ≤₹100 Cr Turnover), and Medium enterprises.',
        advisorNote: 'Buyers delaying payment past 45 days are legally liable to pay 3x RBI compound interest under MSME Samadhaan.',
        targetAnchor: '#core-routes'
      };
    }

    // Default: Credit / Loan
    return {
      schemeName: 'PM MUDRA Yojana (PMMY) via Jan Samarth',
      badge: 'Institutional Credit Facility',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      highlightBenefit: 'Collateral-Free Commercial Credit up to ₹20 Lakhs (Tarun Plus)',
      statutoryFee: 'NIL Scheme Application Fee (Standard Bank Processing)',
      regulatoryStatus: 'qualified',
      portalName: 'Jan Samarth Credit Portal',
      portalUrl: 'https://www.jansamarth.in',
      keyRule: 'Shishu (up to ₹50k), Kishor (₹50k-₹5L), Tarun (₹5L-₹10L), Tarun Plus (₹10L-₹20L for repaid Tarun borrowers). Disbursed by banks based on CIBIL & DPR.',
      advisorNote: 'MUDRA is an institutional bank loan, not an unconditional handout. A viable cash-flow Detailed Project Report (DPR) is mandatory.',
      targetAnchor: '#core-routes'
    };
  };

  const currentMatch = getMatcherResult();

  const setPresetProfile = (stage: VentureStage, entity: EntityType) => {
    setSelectedStage(stage);
    setSelectedEntity(entity);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 transition-colors duration-200">
      {/* Dynamic Animated Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Alert / Live Policy Ticker Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2.5 sm:px-4 sm:py-2 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md shadow-lg mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5 text-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-bold text-emerald-400 uppercase tracking-wider">
              2025/2026 Directives Active:
            </span>
            <span className="text-slate-300 hidden md:inline">
              DPIIT turnover cap ₹200 Cr (₹300 Cr Deep Tech) • MUDRA Tarun Plus up to ₹20L • 100% Zero-Fee Govt Portals
            </span>
            <span className="text-slate-300 md:hidden">
              DPIIT ₹200 Cr Cap &amp; ₹0 Official Portals
            </span>
          </div>

          <button
            onClick={() => setIsScamModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-all hover:scale-102"
            title="Learn how to avoid middleman fees"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Middleman Scam Shield</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Hero Split Grid: Left = The Hook Headline & Value Props, Right = Interactive 10-Second Matcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: The Irresistible Hook Headline & Direct Conversion Triggers */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Dynamic Animated Guarantee & Scheme Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Free Government Scheme Gateway</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-xs font-semibold shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-slate-400">Direct Guarantee:</span>
                <div className="h-5 overflow-hidden flex items-center min-w-[170px] sm:min-w-[210px] text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_HOOKS[activeHookIndex].id + '-badge'}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`text-xs font-bold ${ROTATING_HOOKS[activeHookIndex].badgeText}`}
                    >
                      {ROTATING_HOOKS[activeHookIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Main Headline with Dynamic Animated Text Rotation */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
              Stop Paying Middlemen{' '}
              <span className="line-through decoration-red-500 decoration-4 text-slate-400 font-normal">₹25,000</span>.{' '}
              <br />
              <span className="block mt-1 sm:mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-200">
                Unlock{' '}
                <span className="inline-block relative h-[1.25em] overflow-hidden align-top text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_HOOKS[activeHookIndex].id}
                      initial={{ y: 35, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -35, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className={`inline-block font-black bg-clip-text text-transparent bg-gradient-to-r ${ROTATING_HOOKS[activeHookIndex].gradient}`}
                    >
                      {ROTATING_HOOKS[activeHookIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                Claim Your Real Government Grants &amp; ₹0 Tax Holiday.
              </span>
            </h1>

            {/* Interactive Rotating Impact Hooks Selector Bar */}
            <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 mb-2 px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Founder Protections:</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {activeHookIndex + 1} of {ROTATING_HOOKS.length}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {ROTATING_HOOKS.map((hook, idx) => {
                  const Icon = hook.icon;
                  const isActive = idx === activeHookIndex;
                  return (
                    <button
                      key={hook.id}
                      type="button"
                      onClick={() => setActiveHookIndex(idx)}
                      className={`relative flex items-center justify-center sm:justify-start gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                        isActive
                          ? `${hook.badgeBg} ${hook.badgeText} border ${hook.borderColor} shadow-md shadow-black/40`
                          : 'bg-slate-800/50 hover:bg-slate-800 text-slate-400 border border-slate-700/60'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? hook.badgeText : 'text-slate-500'}`} />
                      <span className="truncate">{hook.text}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeHeroHookPill"
                          className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Real-time active hook tagline */}
              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="h-5 overflow-hidden flex items-center text-slate-300">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={ROTATING_HOOKS[activeHookIndex].id + '-tagline'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200 font-medium">
                        {ROTATING_HOOKS[activeHookIndex].tagline}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Indian founders are legally entitled to <strong className="text-white font-semibold">100% free government filings</strong> for DPIIT Startup Recognition and Udyam MSME, plus up to <strong className="text-emerald-400 font-semibold">₹20 Lakhs in non-dilutive seed grants</strong>. Test your exact eligibility in 10 seconds below.
            </p>

            {/* Quick Interactive Presets to hook user curiosity instantly */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                Click a founder profile to test instant eligibility:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <button
                  onClick={() => setPresetProfile('startup', 'pvtltd')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium border transition-all ${
                    selectedStage === 'startup' && selectedEntity === 'pvtltd'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border-slate-700'
                  }`}
                >
                  🚀 Tech Startup (Pvt Ltd)
                </button>
                <button
                  onClick={() => setPresetProfile('idea', 'unreg')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium border transition-all ${
                    selectedStage === 'idea' && selectedEntity === 'unreg'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border-slate-700'
                  }`}
                >
                  💡 Early Stage (Idea Only)
                </button>
                <button
                  onClick={() => setPresetProfile('startup', 'prop')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium border transition-all ${
                    selectedStage === 'startup' && selectedEntity === 'prop'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border-slate-700'
                  }`}
                >
                  ⚠️ Proprietorship Trap
                </button>
                <button
                  onClick={() => setPresetProfile('credit', 'pvtltd')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium border transition-all ${
                    selectedStage === 'credit'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border-slate-700'
                  }`}
                >
                  💳 Need MUDRA Loan
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#calculator"
                id="hero-calculator-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Run Full MSME &amp; Scheme Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#consultation"
                id="hero-desk-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Talk to Just-In-Time Desk</span>
              </a>
            </div>

            {/* Statutory Transparency Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Direct .gov.in Official Portals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DPIIT &amp; MSME Act Compliance</span>
              </div>
            </div>

          </div>

          {/* Right Column: The "10-Second Government Scheme & Grant Matcher" (The Hero Hook Engine) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-slate-900/95 border border-slate-800 p-5 sm:p-7 shadow-2xl backdrop-blur-xl transition-all hover:border-slate-700">
              
              {/* Card Header with Active Pulse */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Instant Statutory Matcher</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white font-display">
                    Check Your Guaranteed Benefits in 10s
                  </h3>
                </div>

                <button
                  onClick={() => setIsScamModalOpen(true)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-colors"
                  title="View Official Fee Protection Rule"
                  aria-label="View Fee Protection"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Step 1: Select Stage of Venture */}
              <div className="mt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between mb-2">
                  <span>1. Current Stage of Your Venture:</span>
                  <span className="text-[11px] font-normal text-blue-400">Step 1 of 2</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStage('idea')}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedStage === 'idea'
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base">🌱</span>
                    <div>
                      <div className="leading-tight">Idea / Prototype</div>
                      <div className="text-[10px] text-slate-400 font-normal">Pre-revenue / POC</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedStage('startup')}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedStage === 'startup'
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base">🚀</span>
                    <div>
                      <div className="leading-tight">Incorporated Startup</div>
                      <div className="text-[10px] text-slate-400 font-normal">Scaling product/service</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedStage('msme')}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedStage === 'msme'
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base">🏪</span>
                    <div>
                      <div className="leading-tight">Operating MSME / Shop</div>
                      <div className="text-[10px] text-slate-400 font-normal">Active commercial sales</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedStage('credit')}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedStage === 'credit'
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base">💳</span>
                    <div>
                      <div className="leading-tight">Need Bank Credit</div>
                      <div className="text-[10px] text-slate-400 font-normal">MUDRA / Working Capital</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 2: Select Legal Entity Type */}
              <div className="mt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between mb-2">
                  <span>2. Your Legal Entity Structure:</span>
                  <span className="text-[11px] font-normal text-blue-400">Step 2 of 2</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEntity('pvtltd')}
                    className={`px-2.5 py-2 rounded-xl border text-xs font-semibold text-center transition-all ${
                      selectedEntity === 'pvtltd'
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Pvt Ltd / OPC
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedEntity('llp')}
                    className={`px-2.5 py-2 rounded-xl border text-xs font-semibold text-center transition-all ${
                      selectedEntity === 'llp'
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Registered LLP
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedEntity('prop')}
                    className={`px-2.5 py-2 rounded-xl border text-xs font-semibold text-center transition-all ${
                      selectedEntity === 'prop'
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Proprietorship
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedEntity('unreg')}
                    className={`px-2.5 py-2 rounded-xl border text-xs font-semibold text-center transition-all ${
                      selectedEntity === 'unreg'
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Not Registered
                  </button>
                </div>
              </div>

              {/* Live Matched Pathway Result Box */}
              <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-slate-850 to-slate-900 border border-slate-700/90 shadow-inner">
                
                {/* Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${currentMatch.badgeColor}`}>
                    {currentMatch.badge}
                  </span>
                  
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    Official Fee: {currentMatch.statutoryFee.includes('₹0') ? '₹0 (Free)' : '₹0 Govt Fee'}
                  </span>
                </div>

                {/* Scheme Title */}
                <h4 className="text-base sm:text-lg font-bold text-white font-display">
                  {currentMatch.schemeName}
                </h4>

                {/* Main Highlight Benefit */}
                <div className="mt-2 p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-start gap-2">
                  <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-cyan-200 font-semibold leading-snug">
                    {currentMatch.highlightBenefit}
                  </p>
                </div>

                {/* Key Official Rule */}
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="text-slate-400 font-semibold">Statutory Rule: </span>
                  {currentMatch.keyRule}
                </p>

                {/* Desk Advisory Note */}
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-start gap-2 text-xs text-slate-400">
                  <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 leading-relaxed">
                    <strong className="text-white">Desk Pro-Tip:</strong> {currentMatch.advisorNote}
                  </p>
                </div>

                {/* Actions & Official Portal Link */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <a
                      href={currentMatch.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => linkNotice(currentMatch.portalName, currentMatch.portalUrl)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 underline font-mono"
                      title="Open verified official portal"
                    >
                      <span>{currentMatch.portalName}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    
                    <button
                      onClick={() => handleCopy(currentMatch.portalUrl, currentMatch.portalName)}
                      className="p-1 rounded text-slate-400 hover:text-white"
                      title="Copy URL"
                    >
                      {copiedUrl === currentMatch.portalUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <a
                    href={currentMatch.targetAnchor}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>View Step-by-Step Checklist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Dynamic 4-Stat Value Strip with Interactive Jump Links */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div 
            onClick={() => setPresetProfile('startup', 'pvtltd')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">DPIIT Govt Fee</span>
              <Award className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-extrabold text-white font-display">₹0 / NIL</div>
            <p className="text-xs text-slate-400 mt-1">100% free filing on National Single Window (NSWS).</p>
          </div>

          <div 
            onClick={() => setPresetProfile('idea', 'pvtltd')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">SISFS Seed Grant</span>
              <Rocket className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-extrabold text-white font-display">₹20 Lakhs</div>
            <p className="text-xs text-slate-400 mt-1">Non-dilutive milestone grant through certified incubators.</p>
          </div>

          <div 
            onClick={() => setPresetProfile('startup', 'pvtltd')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Tax Exemption</span>
              <Building2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-extrabold text-white font-display">3 Years (80-IAC)</div>
            <p className="text-xs text-slate-400 mt-1">100% corporate tax deduction for qualifying startups.</p>
          </div>

          <div 
            onClick={() => setPresetProfile('credit', 'pvtltd')}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">PMMY MUDRA</span>
              <Coins className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-extrabold text-white font-display">₹20 Lakhs Max</div>
            <p className="text-xs text-slate-400 mt-1">Tarun Plus collateral-free bank loans via Jan Samarth.</p>
          </div>
        </div>

        {/* Physical Advisory Hub & Emergency Call Strip */}
        <div className="mt-8 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2.5 text-center md:text-left">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>
              <strong className="text-white">Physical Advisory Hub:</strong> {COMPANY_INFO.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="font-bold text-blue-400 hover:text-blue-300 underline"
            >
              Direct Call: {COMPANY_INFO.phone}
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              WhatsApp Support Desk
            </a>
          </div>
        </div>

      </div>

      {/* Middleman Scam Shield Explainer Modal */}
      {isScamModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden my-8 text-white">
            
            <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-850">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white font-display">
                    Official Fee Protection Shield
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    Never pay middlemen for free government certificates
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsScamModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm text-slate-300">
              <p className="leading-relaxed">
                Over <strong className="text-white">72% of new entrepreneurs in India</strong> report paying private aggregators between ₹2,500 and ₹25,000 for certificates that the Government of India provides completely free of cost.
              </p>

              {/* Comparison Table */}
              <div className="rounded-xl border border-slate-800 overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-800/80 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <span>Registration / Portal</span>
                  <span className="text-red-400">Agent Scam</span>
                  <span className="text-emerald-400">Real Govt Fee</span>
                </div>
                <div className="divide-y divide-slate-800 text-xs">
                  <div className="grid grid-cols-3 px-3 py-2.5 items-center">
                    <span className="font-semibold text-white">Udyam MSME</span>
                    <span className="text-red-400">₹1,500 – ₹3,500</span>
                    <span className="text-emerald-400 font-bold">₹0 (Free)</span>
                  </div>
                  <div className="grid grid-cols-3 px-3 py-2.5 items-center">
                    <span className="font-semibold text-white">DPIIT Recognition</span>
                    <span className="text-red-400">₹10,000 – ₹25,000</span>
                    <span className="text-emerald-400 font-bold">₹0 (Free)</span>
                  </div>
                  <div className="grid grid-cols-3 px-3 py-2.5 items-center">
                    <span className="font-semibold text-white">MUDRA / Jan Samarth</span>
                    <span className="text-red-400">1% – 5% "Cut"</span>
                    <span className="text-emerald-400 font-bold">₹0 Fee to Apply</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-2.5 text-xs text-emerald-200">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Just-In-Time Advisory Transparency:</strong> We educate founders to use direct government portals (<code className="text-emerald-300">.gov.in</code>). If you require our professional guidance, we charge transparent documentation drafting and strategic consultancy — never misrepresenting government statutory fees.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-850 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Official source: Gazette Notifications
              </span>
              <button
                onClick={() => setIsScamModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                I Understand, Continue
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
