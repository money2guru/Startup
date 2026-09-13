import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FraudWarningBanner } from './components/FraudWarningBanner';
import { CoreRoutesSection } from './components/CoreRoutesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CalculatorSection } from './components/CalculatorSection';
import { MythBusterSection } from './components/MythBusterSection';
import { FAQSection } from './components/FAQSection';
import { PortalDirectorySection } from './components/PortalDirectorySection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/startupData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on preference or system
  useEffect(() => {
    const isDark = localStorage.getItem('jit_theme') === 'dark' || 
      (!localStorage.getItem('jit_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('jit_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('jit_theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setDarkMode={setDarkMode} />

      {/* Main Content Area */}
      <main>
        {/* Section A: Hero with Trust Stats */}
        <Hero />

        {/* Section B: Security Alert & Zero-Fee Transparency */}
        <FraudWarningBanner />

        {/* Section C: Core Government Startup Routes (Interactive Cards & Detailed Modals) */}
        <CoreRoutesSection />

        {/* Section D: 4-Step Interactive Founder Roadmap */}
        <RoadmapSection />

        {/* Section E: MSME Threshold Calculator & Scheme Checker */}
        <CalculatorSection />

        {/* Section F: Policy Myth-Busters & Real Facts Accordion */}
        <MythBusterSection />

        {/* Section G: Frequently Asked Questions (FAQ) with AEO Schema */}
        <FAQSection />

        {/* Section H: Searchable Official Gov Portals Directory */}
        <PortalDirectorySection />

        {/* Section I: Founder Consultation Intake Form */}
        <ConsultationForm />
      </main>

      {/* Section I: Comprehensive Footer with Disclaimer & Office Address */}
      <Footer />

      {/* Floating Action Buttons for Direct Connect */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="p-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg border border-slate-700 flex items-center justify-center group transition-transform hover:scale-105"
          title="Direct Call to Just-In-Time Advisory Desk"
          aria-label="Call Just-In-Time Desk"
        >
          <Phone className="w-5 h-5 text-emerald-400" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            Call +91 9437068052
          </span>
        </a>

        {/* Quick WhatsApp Connect */}
        <a
          href={`https://wa.me/91${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Hello Just-In-Time Desk! I am seeking startup registration and government scheme guidance.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl flex items-center gap-2 font-bold text-xs sm:text-sm tracking-wide transition-all hover:scale-105 shadow-emerald-600/30"
          aria-label="Connect via WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
