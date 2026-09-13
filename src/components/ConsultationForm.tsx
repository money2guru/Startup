import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Building2, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  FileText,
  Trash2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/startupData';
import { EntityType, ServiceType, LeadSubmission } from '../types';
import { useToast } from '../context/ToastContext';

export const ConsultationForm: React.FC = () => {
  const [founderName, setFounderName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [entityType, setEntityType] = useState<EntityType>('Pvt Ltd');
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>(['DPIIT Filing Help']);
  const [mobileNumber, setMobileNumber] = useState('');
  const [notes, setNotes] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [pastSubmissions, setPastSubmissions] = useState<LeadSubmission[]>([]);

  const { success, warning, info } = useToast();

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jit_startup_inquiries');
      if (stored) {
        setPastSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const serviceOptions: ServiceType[] = [
    'DPIIT Filing Help',
    'Udyam Guidance',
    'Project Report Setup',
    'Business Scaling & Compliance',
    'MUDRA / Credit Preparation',
    'SISFS Seed Grant Strategy',
    'Optional GST Registration'
  ];

  const handleToggleService = (service: ServiceType) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!founderName.trim() || !mobileNumber.trim()) {
      const msg = 'Please provide your name and mobile number.';
      setErrorMessage(msg);
      warning('Incomplete Form', msg);
      return;
    }

    // Basic mobile validation
    const cleanedPhone = mobileNumber.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      const msg = 'Please enter a valid 10-digit mobile number.';
      setErrorMessage(msg);
      warning('Invalid Mobile Number', msg);
      return;
    }

    const newLead: LeadSubmission = {
      id: 'JIT-' + Date.now().toString().slice(-6),
      founderName: founderName.trim(),
      businessName: businessName.trim() || 'New Venture / Pre-Incorporation',
      entityType,
      servicesNeeded: selectedServices,
      mobileNumber: cleanedPhone,
      notes: notes.trim(),
      timestamp: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newLead, ...pastSubmissions];
    setPastSubmissions(updated);
    try {
      localStorage.setItem('jit_startup_inquiries', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
    success(
      'Consultation Request Submitted!',
      `Thank you, ${founderName.trim()}. Inquiry Ref: ${newLead.id} is queued for our advisory desk in Bhubaneswar.`
    );
  };

  const handleClearHistory = () => {
    localStorage.removeItem('jit_startup_inquiries');
    setPastSubmissions([]);
    info('History Cleared', 'Your previous consultation inquiries were removed from local storage.');
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Just-In-Time Desk!\n\n` +
      `I submitted an advisory inquiry:\n` +
      `• Founder: ${founderName || 'Founder'}\n` +
      `• Startup: ${businessName || 'New Venture'}\n` +
      `• Entity: ${entityType}\n` +
      `• Services: ${selectedServices.join(', ')}\n` +
      `• Phone: ${mobileNumber}\n\n` +
      `Please connect with me for startup registration and scheme guidance.`
    );
    return `https://wa.me/91${COMPANY_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Desk Contact & Value Proposition (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                Just-In-Time Founder Desk
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Consult With Our Startup Advisory Experts
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether formulating an airtight DPIIT innovation write-up, claiming MSME Samadhaan protection, or structuring a bankable Project Report, get direct guidance from experienced professionals.
              </p>
            </div>

            {/* Direct Office Details Card */}
            <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-md shadow-blue-600/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Just-In-Time Headquarters
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Direct Helpline &amp; WhatsApp
                  </h3>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`} 
                    className="text-base font-extrabold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Consultation Hours
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Zero Government Fee Transparency Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Confidential review of product blueprints and pitch decks</span>
              </div>
            </div>

            {/* Past Submissions Inquiries Log */}
            {pastSubmissions.length > 0 && (
              <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>Your Recent Inquiries ({pastSubmissions.length})</span>
                  </span>
                  <button
                    onClick={handleClearHistory}
                    className="text-[11px] text-red-500 hover:underline flex items-center gap-1"
                    title="Clear saved local inquiries"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1 text-xs">
                  {pastSubmissions.map((sub) => (
                    <div key={sub.id} className="p-2 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">
                          {sub.businessName} ({sub.id})
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {sub.servicesNeeded.join(', ')} • {sub.timestamp}
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 rounded">
                        Logged
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: High-Converting Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                    Thank You, {founderName}!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your startup profile for <strong>{businessName || 'your business'}</strong> has been received by the Just-In-Time Advisory Desk. Our senior consultant will reach out via mobile/WhatsApp shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Instant WhatsApp Chat</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      Get in Touch with Just-In-Time
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Fill in your venture details below. We review files within 2 to 4 business hours.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Founder & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Founder Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={founderName}
                        onChange={(e) => setFounderName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Business / Startup Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. NextGen Robotics"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Entity Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Current Legal Entity Type *
                    </label>
                    <select
                      value={entityType}
                      onChange={(e) => setEntityType(e.target.value as EntityType)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Pvt Ltd">Private Limited Company</option>
                      <option value="LLP">Limited Liability Partnership (LLP)</option>
                      <option value="Registered Partnership">Registered Partnership</option>
                      <option value="Proprietorship">Sole Proprietorship</option>
                      <option value="Idea Stage / Pre-Incorporation">Idea Stage / Pre-Incorporation</option>
                    </select>
                  </div>

                  {/* Services Needed Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Services &amp; Guidance Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => handleToggleService(svc)}
                            className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-blue-400'
                            }`}
                          >
                            <span>{svc}</span>
                            {isSelected ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <div className="w-3.5 h-3.5 rounded-full border border-slate-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Field - Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Mobile Number (+91) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9437068052"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full pl-11 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Our Bhubaneswar advisory desk will connect with you directly via Call / WhatsApp.
                    </p>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Brief Problem Statement / Specific Inquiry (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current stage, innovation problem statement, or questions regarding DPIIT / MUDRA / MSME..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    id="submit-intake-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get in Touch with Just-In-Time</span>
                  </button>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                    By submitting, your data is securely transferred to the Just-In-Time advisory desk in Bhubaneswar. We never sell founder contacts.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
