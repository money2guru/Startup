import React, { useState } from 'react';
import { 
  Building, 
  FileBadge2, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  AlertTriangle,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Check
} from 'lucide-react';
import { ROADMAP_STEPS } from '../data/startupData';
import { useToast } from '../context/ToastContext';

export const RoadmapSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ROADMAP_STEPS[activeStepIndex];
  const { linkNotice } = useToast();

  const getStepIcon = (stepNum: number) => {
    switch (stepNum) {
      case 1: return <Building className="w-5 h-5" />;
      case 2: return <FileBadge2 className="w-5 h-5" />;
      case 3: return <Award className="w-5 h-5" />;
      case 4: return <TrendingUp className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const progressPercentage = ((activeStepIndex + 1) / ROADMAP_STEPS.length) * 100;

  return (
    <section id="launch-roadmap" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            Execution Blueprint
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            The Correct Order to Launch Your Startup
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Avoid costly regulatory rejections and legal bottlenecks. Follow this sequential 4-step launch roadmap verified by Just-In-Time advisors.
          </p>
        </div>

        {/* Visual Progress Bar Component */}
        <div className="mb-10 max-w-4xl mx-auto p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Roadmap Progress: Phase {activeStepIndex + 1} of {ROADMAP_STEPS.length}
              </span>
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {activeStep.title}
              </span>
            </div>
            <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
              {progressPercentage}% Completed
            </div>
          </div>

          {/* Continuous Progress Track */}
          <div className="relative w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Step Timeline Nodes */}
          <div className="grid grid-cols-4 gap-2 relative">
            {ROADMAP_STEPS.map((step, idx) => {
              const isPast = idx < activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none"
                  aria-label={`Go to Step ${step.stepNumber}: ${step.title}`}
                >
                  <div 
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isCurrent
                        ? 'bg-blue-600 text-white ring-4 ring-blue-500/20 shadow-md scale-110'
                        : isPast
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4 text-white stroke-[3]" /> : step.stepNumber}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-bold mt-2 line-clamp-1 transition-colors ${
                    isCurrent 
                      ? 'text-blue-600 dark:text-blue-400 font-extrabold' 
                      : isPast
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    Phase {step.stepNumber}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 max-w-[130px]">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Steps Selector Cards (Desktop Stepper) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ROADMAP_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSelected 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold px-2 py-0.5 rounded flex items-center gap-1 ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : isCompleted
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                      : 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                  }`}>
                    {isCompleted && <Check className="w-3 h-3" />}
                    STEP {step.stepNumber}
                  </span>
                  <div className={`p-1.5 rounded-lg ${
                    isSelected ? 'bg-white/20 text-white' : 'text-slate-400'
                  }`}>
                    {getStepIcon(step.stepNumber)}
                  </div>
                </div>
                <h3 className={`text-sm font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {step.title}
                </h3>
                <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center font-display text-base shadow-sm">
                  {activeStep.stepNumber}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                    {activeStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {activeStep.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
                {activeStep.shortSummary}
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Timeline: {activeStep.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-800/60 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                <span>Cost: {activeStep.cost}</span>
              </div>
            </div>
          </div>

          {/* Body Columns */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Deliverables */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Mandatory Deliverables in Step {activeStep.stepNumber}</span>
              </h4>
              <ul className="space-y-2.5">
                {activeStep.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3.5">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Prerequisites Before Filing</span>
              </h4>
              <ul className="space-y-2.5">
                {activeStep.prerequisites.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Common Trap Alert Box */}
          <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-amber-300/80 dark:border-amber-800/60 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                Common Founder Trap in Step {activeStep.stepNumber}:
              </span>
              <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200/90 mt-0.5">
                {activeStep.commonTraps}
              </p>
            </div>
          </div>

          {/* Step Navigation Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={activeStep.officialPortal}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => linkNotice(activeStep.title, activeStep.officialPortal)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                <span>Official Filing Gateway</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#consultation"
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 underline"
              >
                Need Just-In-Time Filing Support?
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Step</span>
              </button>
              <button
                disabled={activeStepIndex === ROADMAP_STEPS.length - 1}
                onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors shadow-sm"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
