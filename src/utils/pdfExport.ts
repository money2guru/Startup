import { jsPDF } from 'jspdf';
import { MSME_THRESHOLDS_2025 } from '../data/startupData';

export interface MSMEAssessmentData {
  investmentCr: number;
  turnoverCr: number;
  entityType: string;
  companyAgeYears: number;
  isDeepTech: boolean;
  priorTarunRepaid: boolean;
  category: string;
  limits: string;
  benefits: string;
  mudraTier: string;
  mudraNote: string;
  dpiitEligible: boolean;
  dpiitNotes: string[];
  sisfsEligible: boolean;
  sisfsNote: string;
}

export function generateMSMEPDF(data: MSMEAssessmentData) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let y = margin;

  // Header Banner Background
  doc.setFillColor(15, 23, 42); // slate-900 / navy
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('JUST-IN-TIME STARTUP SOLUTIONS', margin, 14);

  // Brand Tagline & Location
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text('B 44/2 Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha - 751024', margin, 20);
  doc.text('Helpline / WhatsApp: +91 9437068052 | Web: One-Stop Startup Advisory Desk', margin, 25);

  // Right-aligned report badge in header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(52, 211, 153); // emerald-400
  doc.text('STATUTORY DIAGNOSTICS REPORT', pageWidth - margin, 14, { align: 'right' });
  doc.setTextColor(226, 232, 240);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`, pageWidth - margin, 20, { align: 'right' });
  doc.text('Ref: JIT-MSME-' + Date.now().toString().slice(-6), pageWidth - margin, 25, { align: 'right' });

  y = 48;

  // Document Title
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('MSME 2025/2026 STATUTORY CLASSIFICATION & SCHEME ASSESSMENT', margin, y);
  
  y += 3;
  doc.setDrawColor(37, 99, 235); // blue-600
  doc.setLineWidth(0.8);
  doc.line(margin, y, pageWidth - margin, y);

  y += 7;

  // Section 1: Input Parameters
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  doc.setFont('helvetica', 'bold');
  doc.text('1. SIMULATED VENTURE PROFILE & FINANCIAL METRICS', margin, y);
  y += 5;

  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 26, 2, 2, 'FD');

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);

  const col1X = margin + 4;
  const col2X = margin + 65;
  const col3X = margin + 125;

  let rowY = y + 6;
  doc.text(`Legal Structure:`, col1X, rowY);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`${data.entityType.toUpperCase()}`, col1X + 26, rowY);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(`Entity Age:`, col2X, rowY);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`${data.companyAgeYears} Year(s)`, col2X + 22, rowY);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(`Deep Tech Status:`, col3X, rowY);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(data.isDeepTech ? 'YES (Deep Tech)' : 'General Venture', col3X + 28, rowY);

  rowY += 8;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(`Plant & Machinery Inv:`, col1X, rowY);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text(`INR ${data.investmentCr.toFixed(2)} Cr`, col1X + 35, rowY);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(`Annual Turnover:`, col2X, rowY);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text(`INR ${data.turnoverCr.toFixed(2)} Cr`, col2X + 26, rowY);

  rowY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`* Export turnover is statutory exempt from calculation under MSMED notification.`, col1X, rowY);

  y += 33;

  // Section 2: Statutory MSME Classification
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  doc.setFont('helvetica', 'bold');
  doc.text('2. STATUTORY MSME CLASSIFICATION RESULT', margin, y);
  y += 5;

  doc.setFillColor(241, 245, 249); // slate-100
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 30, 2, 2, 'FD');

  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.text(`Category: ${data.category}`, margin + 5, y + 7);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text(`Statutory Composite Criteria: ${data.limits}`, margin + 5, y + 13);
  doc.text(`Key Entitlements: ${data.benefits}`, margin + 5, y + 19, {
    maxWidth: pageWidth - (margin * 2) - 10
  });

  y += 37;

  // Section 3: Scheme Eligibility Diagnostics
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  doc.setFont('helvetica', 'bold');
  doc.text('3. STARTUP SCHEMES & CREDIT READINESS EVALUATION', margin, y);
  y += 5;

  // DPIIT Diagnostics Box
  doc.setDrawColor(203, 213, 225);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 24, 2, 2, 'FD');

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('A. DPIIT Startup Recognition (Startup India / NSWS):', margin + 4, y + 6);

  if (data.dpiitEligible) {
    doc.setTextColor(5, 150, 105);
  } else {
    doc.setTextColor(220, 38, 38);
  }
  doc.text(data.dpiitEligible ? 'STATUS: ELIGIBLE' : 'STATUS: NOT QUALIFIED', pageWidth - margin - 4, y + 6, { align: 'right' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  const dpiitNotesStr = data.dpiitNotes.slice(0, 2).join(' | ');
  doc.text(dpiitNotesStr, margin + 4, y + 12, { maxWidth: pageWidth - (margin * 2) - 8 });
  doc.text('Benefits: 3-Year 80-IAC Tax Holiday (Subject to IMB), Angel Tax 56(2)(viib) Relief, 80% Patent Rebate.', margin + 4, y + 18);

  y += 28;

  // MUDRA Diagnostics Box
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 20, 2, 2, 'FD');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('B. PMMY MUDRA / Jan Samarth Credit Assessment:', margin + 4, y + 6);
  doc.setTextColor(37, 99, 235);
  doc.text(data.mudraTier, pageWidth - margin - 4, y + 6, { align: 'right' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(data.mudraNote, margin + 4, y + 12, { maxWidth: pageWidth - (margin * 2) - 8 });

  y += 24;

  // SISFS Diagnostics Box
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 20, 2, 2, 'FD');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('C. Startup India Seed Fund Scheme (SISFS):', margin + 4, y + 6);
  if (data.sisfsEligible) {
    doc.setTextColor(5, 150, 105);
  } else {
    doc.setTextColor(180, 83, 9);
  }
  doc.text(data.sisfsEligible ? 'QUALIFIED FOR SEED DISBURSEMENT' : 'REQUIRES DPIIT RECOGNITION', pageWidth - margin - 4, y + 6, { align: 'right' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(data.sisfsNote, margin + 4, y + 12, { maxWidth: pageWidth - (margin * 2) - 8 });

  y += 26;

  // Section 4: Official Verification & Anti-Fraud Notice
  doc.setFillColor(254, 242, 242); // red-50
  doc.setDrawColor(254, 202, 202); // red-200
  doc.roundedRect(margin, y, pageWidth - (margin * 2), 24, 2, 2, 'FD');

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(185, 28, 28); // red-700
  doc.text('CRITICAL NOTICE — ZERO OFFICIAL GOVERNMENT APPLICATION FEES', margin + 4, y + 5);

  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(69, 10, 10);
  doc.text(
    'Udyam Registration (udyamregistration.gov.in) and DPIIT Startup Recognition on NSWS (nsws.gov.in) are completely FREE. Do not pay fake intermediary sites charging INR 1,000 to INR 3,000. Report any cyber scam attempts to cybercrime.gov.in (National Helpline: 1930).',
    margin + 4,
    y + 10,
    { maxWidth: pageWidth - (margin * 2) - 8 }
  );

  // Footer Disclaimer
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text(
    'Disclaimer: Just-In-Time is an independent advisory practice. This diagnostic report is generated based on simulated parameters for planning purposes and does not constitute statutory government sanction. Contact our Bhubaneswar desk for filing advisory.',
    margin,
    pageHeight - 8,
    { maxWidth: pageWidth - (margin * 2) }
  );

  doc.save(`Just-In-Time_MSME_Assessment_${data.category.replace(/\s+/g, '_')}.pdf`);
}
