import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  Award, 
  Coins, 
  Rocket, 
  ArrowRight,
  Info,
  Download,
  FileText,
  Loader2
} from 'lucide-react';
import { MSME_THRESHOLDS_2025 } from '../data/startupData';
import { generateMSMEPDF } from '../utils/pdfExport';
import { useToast } from '../context/ToastContext';

export const CalculatorSection: React.FC = () => {
  const [investmentCr, setInvestmentCr] = useState<number>(0.5);
  const [turnoverCr, setTurnoverCr] = useState<number>(2.0);
  const [entityType, setEntityType] = useState<'pvt_ltd' | 'llp' | 'partnership' | 'proprietorship'>('pvt_ltd');
  const [companyAgeYears, setCompanyAgeYears] = useState<number>(1);
  const [isDeepTech, setIsDeepTech] = useState<boolean>(false);
  const [priorTarunRepaid, setPriorTarunRepaid] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const { success, error: toastError } = useToast();

  // MSME Category Calculation based on 2025/2026 composite criteria
  const calculateMSME = () => {
    if (investmentCr <= MSME_THRESHOLDS_2025.micro.maxInvestmentCr && turnoverCr <= MSME_THRESHOLDS_2025.micro.maxTurnoverCr) {
      return {
        category: 'Micro Enterprise',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
        limits: 'Inv ≤ ₹2.5 Cr & Turnover ≤ ₹10 Cr',
        benefits: '100% priority lending, full MSME Samadhaan delayed payment protection, tender fee waiver.'
      };
    } else if (investmentCr <= MSME_THRESHOLDS_2025.small.maxInvestmentCr && turnoverCr <= MSME_THRESHOLDS_2025.small.maxTurnoverCr) {
      return {
        category: 'Small Enterprise',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-800',
        limits: 'Inv ≤ ₹25 Cr & Turnover ≤ ₹100 Cr',
        benefits: 'Priority sector credit lines, 25% public procurement preference, capital subsidy access.'
      };
    } else if (investmentCr <= MSME_THRESHOLDS_2025.medium.maxInvestmentCr && turnoverCr <= MSME_THRESHOLDS_2025.medium.maxTurnoverCr) {
      return {
        category: 'Medium Enterprise',
        badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-800',
        limits: 'Inv ≤ ₹125 Cr & Turnover ≤ ₹500 Cr',
        benefits: 'Institutional credit support, technology upgradation schemes, cluster development grants.'
      };
    } else {
      return {
        category: 'Large Enterprise (Exceeds MSME Caps)',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800',
        limits: 'Turnover > ₹500 Cr or Inv > ₹125 Cr',
        benefits: 'Not eligible for Udyam MSME classification.'
      };
    }
  };

  // DPIIT Eligibility Check
  const turnoverLimitDPIIT = isDeepTech ? 300 : 200;
  const ageLimitDPIIT = isDeepTech ? 20 : 10;
  const isEligibleDPIITEntity = entityType !== 'proprietorship';
  const isEligibleDPIITTurnover = turnoverCr <= turnoverLimitDPIIT;
  const isEligibleDPIITAge = companyAgeYears <= ageLimitDPIIT;
  const isEligibleDPIIT = isEligibleDPIITEntity && isEligibleDPIITTurnover && isEligibleDPIITAge;

  // SISFS Eligibility
  const isEligibleSISFS = isEligibleDPIIT && companyAgeYears <= 2;

  // MUDRA Recommended Tier
  const getMudraTier = () => {
    if (priorTarunRepaid) {
      return {
        tier: 'Tarun Plus (₹10 Lakh to ₹20 Lakh)',
        note: 'Eligible for extended limit due to confirmed prior Tarun repayment history.'
      };
    }
    if (turnoverCr < 0.25 && investmentCr < 0.1) {
      return {
        tier: 'Shishu (Up to ₹50,000) or Kishor (₹50k to ₹5 Lakh)',
        note: 'Ideal for initial working capital and early equipment purchases.'
      };
    }
    return {
      tier: 'Tarun (₹5 Lakh to ₹10 Lakh)',
      note: 'Appropriate for scaling operational units with bank financial assessment.'
    };
  };

  const msmeResult = calculateMSME();
  const mudraResult = getMudraTier();

  const handleExportPDF = () => {
    try {
      setIsExporting(true);
      const dpiitNotes: string[] = [];
      if (!isEligibleDPIITEntity) dpiitNotes.push('Sole proprietorships must convert to Pvt Ltd/LLP/Regd Partnership for DPIIT recognition.');
      if (!isEligibleDPIITTurnover) dpiitNotes.push(`Turnover exceeds statutory ₹${turnoverLimitDPIIT} Cr cap.`);
      if (!isEligibleDPIITAge) dpiitNotes.push(`Entity age exceeds ${ageLimitDPIIT} years threshold.`);
      if (isEligibleDPIIT) dpiitNotes.push('Meets all structural, turnover, and age thresholds for DPIIT Startup Recognition.');

      generateMSMEPDF({
        investmentCr,
        turnoverCr,
        entityType,
        companyAgeYears,
        isDeepTech,
        priorTarunRepaid,
        category: msmeResult.category,
        limits: msmeResult.limits,
        benefits: msmeResult.benefits,
        mudraTier: mudraResult.tier,
        mudraNote: mudraResult.note,
        dpiitEligible: isEligibleDPIIT,
        dpiitNotes: dpiitNotes.length > 0 ? dpiitNotes : ['Eligibility assessment complete.'],
        sisfsEligible: isEligibleSISFS,
        sisfsNote: isEligibleSISFS 
          ? 'Eligible for up to ₹20 Lakh proof of concept grant and ₹50 Lakh seed debt/convertible debenture via SISFS incubator portals.' 
          : 'SISFS requires DPIIT recognition and entity age <= 2 years at application.'
      });
      success(
        'Assessment Report Exported',
        'Official Just-In-Time MSME & Statutory Diagnostic PDF downloaded successfully.'
      );
    } catch (err) {
      console.error(err);
      toastError(
        'Export Failed',
        'Unable to export PDF diagnostic report. Please try again.'
      );
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section id="eligibility-tool" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            Interactive Diagnostics
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            MSME 2025/2026 Threshold &amp; Scheme Eligibility Checker
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Simulate your business metrics to instantly identify your statutory Udyam classification, DPIIT eligibility status, and credit scheme fit. Export the verified evaluation report as a PDF for your records.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white/90 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Plant & Machinery Investment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  Plant &amp; Machinery / Equipment Investment (₹ Crore)
                </label>
                <span className="px-2.5 py-0.5 text-xs font-bold font-mono bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-md border border-blue-200 dark:border-blue-800">
                  ₹{investmentCr.toFixed(2)} Cr
                </span>
              </div>
              <input
                type="range"
                min="0.05"
                max="150"
                step="0.25"
                value={investmentCr}
                onChange={(e) => setInvestmentCr(parseFloat(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                aria-label="Investment in Plant & Machinery in Crores"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>₹5 Lakh (0.05 Cr)</span>
                <span>Micro: ≤ ₹2.5 Cr</span>
                <span>Small: ≤ ₹25 Cr</span>
                <span>Medium: ≤ ₹125 Cr</span>
              </div>
            </div>

            {/* Annual Turnover */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  Annual Turnover (₹ Crore)
                </label>
                <span className="px-2.5 py-0.5 text-xs font-bold font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-md border border-emerald-200 dark:border-emerald-800">
                  ₹{turnoverCr.toFixed(2)} Cr
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="600"
                step="0.5"
                value={turnoverCr}
                onChange={(e) => setTurnoverCr(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                aria-label="Annual Turnover in Crores"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>₹10 Lakh (0.1 Cr)</span>
                <span>Micro: ≤ ₹10 Cr</span>
                <span>Small: ≤ ₹100 Cr</span>
                <span>Medium: ≤ ₹500 Cr</span>
              </div>
            </div>

            {/* Entity Type & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Legal Entity Type
                </label>
                <select
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="pvt_ltd">Private Limited Company</option>
                  <option value="llp">Limited Liability Partnership (LLP)</option>
                  <option value="partnership">Registered Partnership</option>
                  <option value="proprietorship">Sole Proprietorship (Not DPIIT eligible)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Years Since Incorporation ({companyAgeYears} {companyAgeYears === 1 ? 'Year' : 'Years'})
                </label>
                <input
                  type="range"
                  min="0"
                  max="22"
                  value={companyAgeYears}
                  onChange={(e) => setCompanyAgeYears(parseInt(e.target.value, 10))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                  aria-label="Company age in years"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>New (0)</span>
                  <span>SISFS: &lt; 2 Yrs</span>
                  <span>DPIIT: ≤ 10 Yrs</span>
                  <span>DeepTech: 20 Yrs</span>
                </div>
              </div>
            </div>

            {/* DeepTech & Prior Loan Toggles */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={isDeepTech}
                  onChange={(e) => setIsDeepTech(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Recognized Deep Tech Venture (Relaxes ceiling to ₹300 Cr / 20 Yrs)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={priorTarunRepaid}
                  onChange={(e) => setPriorTarunRepaid(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Prior Tarun Loan fully repaid (Unlocks ₹20L Tarun Plus)</span>
              </label>
            </div>

            {/* Statutory Tip */}
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
              <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Composite Criterion Rule:</strong> If either Investment OR Turnover exceeds the ceiling for a category, your enterprise is moved up to the next bracket.
              </span>
            </div>

          </div>

          {/* Real-time Analysis Card (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Instant Diagnostic Report
              </span>
              <span className="px-2 py-0.5 text-[11px] font-bold bg-blue-500/20 text-blue-400 rounded">
                Live Simulation
              </span>
            </div>

            {/* 1. MSME Result */}
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Udyam MSME Classification (2025/2026)
              </span>
              <div className="mt-1.5 flex items-center justify-between">
                <span className={`px-3 py-1 text-sm font-extrabold rounded-lg border ${msmeResult.badgeColor}`}>
                  {msmeResult.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Criteria: <span className="font-mono text-slate-200">{msmeResult.limits}</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {msmeResult.benefits}
              </p>
            </div>

            {/* 2. DPIIT Result */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                DPIIT Startup Recognition
              </span>
              <div className="mt-1.5 flex items-center gap-2">
                {isEligibleDPIIT ? (
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Eligible for DPIIT Recognition</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <XCircle className="w-5 h-5" />
                    <span>Ineligible: Entity or Turnover limit breached</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {entityType === 'proprietorship' 
                  ? '⚠️ Sole Proprietorship cannot be DPIIT recognized. Must incorporate Pvt Ltd or LLP.' 
                  : `Turnover is ₹${turnoverCr.toFixed(1)} Cr (Limit ₹${turnoverLimitDPIIT} Cr). Entity age is ${companyAgeYears} yrs (Limit ${ageLimitDPIIT} yrs).`}
              </p>
            </div>

            {/* 3. SISFS Seed Fund Result */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Startup India Seed Fund Scheme (SISFS)
              </span>
              <div className="mt-1.5 flex items-center gap-2">
                {isEligibleSISFS ? (
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Eligible for up to ₹20L Grant / ₹50L Debt</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Info className="w-4 h-4 text-slate-500" />
                    <span>
                      {!isEligibleDPIIT 
                        ? 'Requires DPIIT recognition first.' 
                        : 'Age exceeds 2-year window for SISFS.'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 4. PM MUDRA Tier */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                PM MUDRA Recommended Credit Tier
              </span>
              <div className="mt-1.5 text-sm font-bold text-amber-300">
                {mudraResult.tier}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {mudraResult.note}
              </p>
            </div>

            {/* PDF Export & Next Step CTAs */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating Assessment PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Export Evaluation Report as PDF</span>
                  </>
                )}
              </button>

              <a
                href="#consultation"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
              >
                <span>Consult Just-In-Time on Your File</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
