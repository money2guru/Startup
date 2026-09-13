import { SchemeRoute, RoadmapStep, MythItem, OfficialPortal, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Just-In-Time',
  tagline: 'One-Stop Startup Solutions — Incorporations, Registrations, Government Schemes & Funding',
  address: 'B 44/2 Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha - 751024',
  phone: '+91 9437068052',
  phoneRaw: '9437068052',
  whatsappUrl: 'https://wa.me/919437068052?text=Hello%20Just-In-Time%2C%20I%20need%20expert%20guidance%20on%20Startup%20Registration%20and%20Government%20Schemes.',
  workingHours: 'Mon - Sat: 9:30 AM to 6:30 PM IST',
  emergencyLine: 'Call or WhatsApp: +91 9437068052',
  disclaimer: 'Just-In-Time is an independent private consultancy and startup advisory service. We are NOT a government body or affiliated with any government department. Core government filings such as Udyam Registration, DPIIT Startup Recognition on NSWS, and MUDRA applications have ₹0 official government fees on government portals (.gov.in / .nic.in). Just-In-Time charges transparent advisory and documentation preparation fees for strategic guidance, compliance drafting, and professional support.'
};

export const CORE_SCHEMES: SchemeRoute[] = [
  {
    id: 'dpiit',
    name: 'DPIIT Startup Recognition',
    badge: '100% Free Official Filing',
    fee: 'NIL / ₹0 Government Fee',
    shortDesc: 'Official certification under the Department for Promotion of Industry and Internal Trade (DPIIT) via the National Single Window System (NSWS).',
    turnoverRules: 'Turnover limit up to ₹200 Cr (₹300 Cr for Deep Tech startups up to 20 years).',
    keyRules: [
      'Turnover ceiling: Up to ₹200 Crore (Raised to ₹300 Crore for Deep Tech startups up to 20 years from incorporation).',
      'Eligible Entities: Private Limited Company, Limited Liability Partnership (LLP), Registered Partnership Firm, or Cooperative Societies.',
      'Age Limit: Entity must not be older than 10 years (20 years for recognized Deep Tech companies).',
      'Entity Creation: Must be an original enterprise — not formed by splitting up or reconstructing an existing business.'
    ],
    keyBenefits: [
      'Section 80-IAC Tax Holiday: 3 consecutive years 100% income tax exemption out of 10 years (requires separate IMB board review).',
      'Angel Tax Immunity: Full relief under Section 56(2)(viib) for investments received above fair market value.',
      'Subsidized IPR: 80% rebate on Patent filing fees and 50% rebate on Trademark registrations with fast-track examination.',
      'Self-Certification: Exemption from inspections under 6 Labour Laws and 3 Environmental Laws for up to 3 to 5 years.',
      'Public Procurement Relaxation: Exemption from prior turnover and experience criteria, plus EMD (Earnest Money Deposit) exemption on GeM.'
    ],
    portalLinks: [
      { name: 'NSWS National Single Window', url: 'https://www.nsws.gov.in' },
      { name: 'Startup India Portal', url: 'https://www.startupindia.gov.in' }
    ],
    highlightColor: 'from-blue-600 to-indigo-700',
    iconName: 'Award',
    details: {
      overview: 'DPIIT Recognition acts as the golden passport for Indian startups to unlock government seed grants, angel tax safeguards, patent subsidies, and public tender relaxations without paying any intermediary government filing fees.',
      eligibilityList: [
        'Registered as Pvt Ltd Company, LLP, or Registered Partnership',
        'Entity age is less than 10 years (20 years for Deep Tech)',
        'Annual turnover has never exceeded ₹200 Cr in any financial year',
        'Working towards innovation, development or commercialization of a new product or service with high scalability & employment potential'
      ],
      mandatoryDocuments: [
        'Certificate of Incorporation (COI) / Partnership Deed',
        'Company PAN Card and Director / Partner KYC',
        'Comprehensive write-up on product innovation, uniqueness, and scalability problem statement',
        'Website URL, pitch deck, or mobile app demo link',
        'Proof of concept / patent application numbers (if applicable)'
      ],
      proTip: 'The DPIIT recognition rejection rate is largely due to weak innovation write-ups or copying generic business descriptions. Just-In-Time assists founders in formulating precise, policy-compliant technical and scalability narratives.'
    }
  },
  {
    id: 'udyam',
    name: 'Udyam MSME Registration',
    badge: 'Instant & Zero-Fee',
    fee: 'NIL / ₹0 Government Fee',
    shortDesc: 'Official paperless identification for Micro, Small, and Medium Enterprises issued by the Ministry of MSME.',
    turnoverRules: 'Revised 2025/2026 composite criteria covering Micro, Small, and Medium classifications.',
    keyRules: [
      'Micro Enterprise: Plant & Machinery / Equipment Investment ≤ ₹2.5 Cr and Annual Turnover ≤ ₹10 Cr.',
      'Small Enterprise: Plant & Machinery / Equipment Investment ≤ ₹25 Cr and Annual Turnover ≤ ₹100 Cr.',
      'Medium Enterprise: Plant & Machinery / Equipment Investment ≤ ₹125 Cr and Annual Turnover ≤ ₹500 Cr.',
      '100% Paperless: Generated automatically based on Aadhaar, PAN, and GSTIN linkage with CBDT/CBIC databases.'
    ],
    keyBenefits: [
      'MSME Samadhaan Protection: Statutory mandate under Section 15 of MSME Act requiring buyers to clear payments within 45 days, backed by 3x compound interest.',
      'Priority Sector Lending (PSL): Lower interest rates and priority credit sanctioning from nationalized banks.',
      'Public Procurement Preference: Mandatory 25% procurement quota by Central Ministries and PSUs, with 4% earmarked for SC/ST and 3% for Women MSMEs.',
      '50% Trademark & Patent Subsidies: Substantial cost reduction for intellectual property filings.',
      'Permanent Lifetime Validity: Unique 19-digit Udyam Registration Number (URN) with no renewal fees required.'
    ],
    portalLinks: [
      { name: 'Official Udyam Registration Portal', url: 'https://udyamregistration.gov.in' }
    ],
    highlightColor: 'from-emerald-600 to-teal-700',
    iconName: 'Building2',
    details: {
      overview: 'Udyam is the foundational bedrock for any commercial operation in India. It guarantees legal protection against delayed vendor payments and secures priority banking credit lines.',
      eligibilityList: [
        'Proprietorship, Partnership, LLP, Pvt Ltd, Public Ltd, or Trust',
        'Valid Aadhaar of Director / Partner / Proprietor',
        'Active Business PAN and GSTIN (mandatory where GST registration threshold is breached)',
        'Bank Account in the name of the enterprise'
      ],
      mandatoryDocuments: [
        'Aadhaar Card of the authorized signatory',
        'Enterprise PAN Card',
        'Bank Account Details (Account Number & IFSC)',
        'Basic business activity description & NIC Code selection'
      ],
      proTip: 'Beware of fake portals that charge ₹1,500 to ₹3,000 for Udyam. The Government of India NEVER charges any fee for Udyam registration. Use exclusively https://udyamregistration.gov.in.'
    }
  },
  {
    id: 'mudra',
    name: 'PM MUDRA Yojana (PMMY)',
    badge: 'Collateral-Free Credit',
    fee: 'NIL Scheme Fee (Standard Bank Processing)',
    shortDesc: 'Refinance and credit facility providing collateral-free institutional loans for micro and small enterprises through commercial banks and NBFCs.',
    turnoverRules: 'Tiered credit allocation from ₹50,000 up to ₹20 Lakhs based on track record and repayment.',
    keyRules: [
      'Shishu Tier: Loan allocation up to ₹50,000 for early setup, initial stock, and micro ventures.',
      'Kishor Tier: Loan allocation from ₹50,000 to ₹5 Lakh for equipment purchase, tooling, and working capital.',
      'Tarun Tier: Loan allocation from ₹5 Lakh to ₹10 Lakh for established units scaling operations.',
      'Tarun Plus Tier: Loan allocation from ₹10 Lakh to ₹20 Lakh — specifically reserved for repeat entrepreneurs who have successfully availed and repaid Tarun loans.',
      'Credit Evaluation: Disbursed via commercial banks, RRBs, Small Finance Banks, and NBFCs based on lender risk assessment, credit score, and financial viability.'
    ],
    keyBenefits: [
      'Zero Collateral Guarantee: Covered under the Credit Guarantee Fund for Micro Units (CGFMU).',
      'Flexible Repayment Tenure: Standard 3 to 5 year amortization with customized moratorium periods.',
      'Working Capital MUDRA Card: Debit card facility for instant drawing against working capital limits.',
      'Competitive Interest Rates: Linked directly to MCLR/EBLR guidelines of participating commercial banks.'
    ],
    portalLinks: [
      { name: 'Jan Samarth Credit Portal', url: 'https://www.jansamarth.in' },
      { name: 'Department of Financial Services', url: 'https://financialservices.gov.in' }
    ],
    highlightColor: 'from-amber-600 to-orange-700',
    iconName: 'Coins',
    details: {
      overview: 'PM MUDRA Yojana bridges the formal credit gap for non-corporate, non-farm small and micro enterprises. It is not an unconditional grant, but an institutional bank loan with government credit backing.',
      eligibilityList: [
        'Indian citizens with a feasible business project proposal',
        'Non-farm micro or small business enterprise',
        'Clean CIBIL / Commercial credit track record (no prior bank defaults)',
        'For Tarun Plus (₹10L - ₹20L): Documented repayment completion of earlier Tarun facility'
      ],
      mandatoryDocuments: [
        'Detailed Project Report (DPR) with projected balance sheets and cash flows',
        'Enterprise proof (Udyam Certificate, GST returns, PAN)',
        'Last 6 to 12 months Bank Statement',
        'KYC of Promoters and Proof of business address'
      ],
      proTip: 'Apply directly via the official Jan Samarth portal (jansamarth.in). Banks reject MUDRA files lacking a viable cash-flow projection. Just-In-Time assists founders in building institutional-grade Project Reports (DPRs).'
    }
  },
  {
    id: 'sisfs',
    name: 'Startup India Seed Fund Scheme (SISFS)',
    badge: 'Up to ₹70 Lakh Support',
    fee: 'NIL / ₹0 Application Fee',
    shortDesc: 'Flagship financial assistance scheme providing early-stage seed capital for Proof of Concept, prototype development, product trials, and market entry.',
    turnoverRules: 'Exclusively for DPIIT-recognized startups incorporated within the last 2 years.',
    keyRules: [
      'Grant Component: Up to ₹20 Lakh non-repayable grant for Proof of Concept (POC), prototype development, or field trials.',
      'Debt / Convertible Debenture Component: Up to ₹50 Lakh via debt, convertible debentures, or debt-linked instruments for commercialization and market launch.',
      'Incubator Evaluation: Startups apply directly to approved incubators across India on the official portal; funding is disbursed directly by incubators.',
      'Monetary Limits: The startup must not have received more than ₹10 Lakh of monetary support under any other Central or State Government scheme (excluding prize money).'
    ],
    keyBenefits: [
      'Non-Dilutive Grant: The ₹20 Lakh milestone-based grant takes zero equity from founders.',
      'Founder-Friendly Convertible Debt: Up to ₹50 Lakh with low interest rates (up to repo rate) and flexible repayment moratorium up to 12 months.',
      'Incubator Mentorship: Direct access to state-of-the-art incubation labs, technical advisors, and testing facilities.',
      'Follow-On Investor Visibility: High institutional credibility that unlocks subsequent VC and angel rounds.'
    ],
    portalLinks: [
      { name: 'Seed Fund Official Portal', url: 'https://seedfund.startupindia.gov.in' }
    ],
    highlightColor: 'from-purple-600 to-indigo-800',
    iconName: 'Rocket',
    details: {
      overview: 'The Startup India Seed Fund Scheme (SISFS) was designed by DPIIT to secure early capital for entrepreneurs facing the "valley of death" before commercial revenues or venture capital backing kick in.',
      eligibilityList: [
        'Must hold valid DPIIT Startup Recognition',
        'Incorporated not more than 2 years prior to application date',
        'Business idea must utilize technology or novel innovation to solve real-world problems',
        'Has not received more than ₹10 Lakh support from other government grant schemes'
      ],
      mandatoryDocuments: [
        'DPIIT Certificate of Recognition',
        'Structured Business Pitch Deck and Financial Milestone Timeline',
        'Proof of Concept (POC) blueprints or prototype demonstration video',
        'Brief details of founder credentials and equity holding structure (minimum 51% Indian promoter holding)'
      ],
      proTip: 'You can apply to up to 3 incubators in preferential order under SISFS. Selecting incubators with domain expertise matching your industry substantially boosts selection probability.'
    }
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    stepNumber: 1,
    title: 'Incorporate Your Business Entity',
    subtitle: 'Establish legal existence and shareholding',
    shortSummary: 'Form a recognized corporate structure (Pvt Ltd, LLP, or Registered Partnership) via MCA SPICe+ or Registrar of Firms.',
    estimatedTime: '5 – 10 Business Days',
    cost: 'MCA statutory fee based on authorized capital (approx. ₹1,000 – ₹5,000 for standard limits)',
    keyDeliverables: [
      'Certificate of Incorporation (COI) / Registered Deed',
      'Corporate Identity Number (CIN) or LLPIN',
      'Permanent Account Number (PAN) & Tax Deduction Account Number (TAN)',
      'Digital Signature Certificates (DSC) & Director Identification Numbers (DIN)'
    ],
    prerequisites: [
      'Unique company name search on MCA database',
      'Minimum 2 directors/partners with KYC documents',
      'Registered office utility bill with NOC'
    ],
    officialPortal: 'https://www.mca.gov.in',
    commonTraps: 'Starting as an informal sole proprietorship locks you out of DPIIT recognition and institutional VC equity investments. Register a Pvt Ltd or LLP first.'
  },
  {
    stepNumber: 2,
    title: 'Instant Udyam MSME Registration',
    subtitle: 'Unlock statutory payment protection and banking benefits',
    shortSummary: 'Secure your 19-digit Udyam Registration Number (URN) with zero government fee and zero documentation.',
    estimatedTime: 'Instant (15 Minutes online self-filing)',
    cost: '₹0 (100% Free on official government portal)',
    keyDeliverables: [
      'Official Udyam Registration Certificate with dynamic QR code',
      'Classification as Micro, Small, or Medium Enterprise',
      'Priority Sector Lending (PSL) eligibility tag',
      'Coverage under MSME Samadhaan delayed payment tribunal'
    ],
    prerequisites: [
      'Company PAN card and Director / Partner Aadhaar linked to mobile for OTP',
      'Bank account details (Account number, IFSC)',
      'Accurate National Industry Classification (NIC) 5-digit code selection'
    ],
    officialPortal: 'https://udyamregistration.gov.in',
    commonTraps: 'Paying private aggregator websites ₹1,500 to ₹3,000. Udyam is permanently free on the government portal.'
  },
  {
    stepNumber: 3,
    title: 'DPIIT Startup Recognition',
    subtitle: 'Claim tax holidays, angel tax relief, and IPR rebates',
    shortSummary: 'Submit your application via the National Single Window System (NSWS) with a compelling innovation and scalability dossier.',
    estimatedTime: '3 – 7 Working Days (Subject to DPIIT scrutiny)',
    cost: '₹0 (100% Free on official NSWS portal)',
    keyDeliverables: [
      'Official DPIIT Certificate of Recognition with DIPP ID',
      'Exemption from Section 56(2)(viib) angel tax',
      'Access to apply for 3-year Section 80-IAC tax holiday (IMB certificate)',
      '80% patent and 50% trademark fee concession authorization'
    ],
    prerequisites: [
      'COI and active corporate PAN',
      'Well-drafted 250-word write-up addressing problem, solution, innovation, and job creation potential',
      'Product pitch deck, wireframe, or demo link'
    ],
    officialPortal: 'https://www.nsws.gov.in',
    commonTraps: 'Submitting generic business consulting descriptions without articulating the technology/process innovation. Rejections require a 30-day waiting period.'
  },
  {
    stepNumber: 4,
    title: 'Formal Credit & Seed Funding',
    subtitle: 'Leverage SISFS grants and PMMY/CGTMSE credit lines',
    shortSummary: 'Approach DPIIT-approved incubators for up to ₹20L grant / ₹50L debt under SISFS and commercial banks for MUDRA credit on Jan Samarth.',
    estimatedTime: '30 – 90 Days (Incubator cohorts & bank appraisal)',
    cost: 'Zero government application fee; standard bank documentation fees apply',
    keyDeliverables: [
      'SISFS non-repayable prototype grant or convertible debenture sanction',
      'Collateral-free commercial credit facility under PMMY or CGTMSE',
      'Formalized institutional audit trail and financial compliance'
    ],
    prerequisites: [
      'Active DPIIT recognition certificate',
      'Detailed Project Report (DPR) with realistic 3-year cash flow projections',
      'Incubator selection aligned with your startup industry domain'
    ],
    officialPortal: 'https://seedfund.startupindia.gov.in',
    commonTraps: 'Approaching banks without a structured CMA report or seeking SISFS before securing DPIIT recognition.'
  }
];

export const MYTH_BUSTERS: MythItem[] = [
  {
    id: 'myth-1',
    category: 'fees',
    myth: 'DPIIT Recognition and Udyam Registration require costly private agents or high government stamp fees.',
    reality: 'Both DPIIT Startup Recognition and Udyam MSME Registration carry strictly ZERO (₹0 / NIL) government fees. Any portal or agent demanding mandatory government filing charges for these two registrations is fraudulent. Founders can complete both self-declarations directly on nsws.gov.in and udyamregistration.gov.in.',
    officialReference: 'Ministry of Commerce & Industry (DPIIT) & Ministry of MSME Notifications',
    impactScore: 'Critical'
  },
  {
    id: 'myth-2',
    category: 'funding',
    myth: 'PM MUDRA Yojana gives ₹20 Lakh in cash instantly to anyone upon filling an online application form.',
    reality: 'MUDRA is an institutional commercial credit facility disbursed by participating scheduled banks and NBFCs — not an unconditional government handout. Furthermore, the ₹10 Lakh to ₹20 Lakh "Tarun Plus" tier is strictly reserved for entrepreneurs who have already availed and successfully repaid a Tarun loan in full.',
    officialReference: 'PMMY Operational Guidelines & Department of Financial Services (DFS)',
    impactScore: 'Critical'
  },
  {
    id: 'myth-3',
    category: 'funding',
    myth: 'The Startup India Seed Fund (SISFS) is a ₹20 Lakh personal loan that has to be paid back immediately with interest.',
    reality: 'Under SISFS, funding up to ₹20 Lakh for Proof of Concept, prototype development, and product testing is provided as a 100% non-repayable grant. The secondary component of up to ₹50 Lakh for commercialization is provided as debt or convertible debentures with favorable repayment moratoriums.',
    officialReference: 'Startup India Seed Fund Scheme Guidelines, DPIIT',
    impactScore: 'High Risk'
  },
  {
    id: 'myth-4',
    category: 'validity',
    myth: 'My old Udyog Aadhaar Memorandum (UAM) or EM-II is still completely valid for government tenders and bank loans.',
    reality: 'Udyog Aadhaar and EM-II expired on June 30, 2022. All existing micro, small, and medium units must re-register or migrate to Udyam Registration on the official portal to maintain MSME validity, delayed payment protection, and priority sector benefits.',
    officialReference: 'Gazette Notification S.O. 2119(E), Ministry of MSME',
    impactScore: 'Moderate'
  },
  {
    id: 'myth-5',
    category: 'schemes',
    myth: 'Receiving DPIIT Recognition automatically means 100% tax exemption on profits for 3 years without any further steps.',
    reality: 'DPIIT Recognition grants entity status and angel tax relief, but the 3-year 100% tax holiday under Section 80-IAC requires a separate application to the Inter-Ministerial Board (IMB). Only startups with certified innovative and scalable business models are granted IMB tax holiday certificates.',
    officialReference: 'Section 80-IAC of the Income Tax Act, 1961',
    impactScore: 'High Risk'
  },
  {
    id: 'myth-6',
    category: 'schemes',
    myth: 'Only high-tech software and AI apps can qualify for DPIIT Startup Recognition.',
    reality: 'DPIIT recognition is sector-agnostic. Startups in agriculture, manufacturing, healthcare, waste management, green energy, logistics, and retail can qualify as long as they exhibit novelty in product, process, service delivery, or scalable employment potential.',
    officialReference: 'DPIIT Notification on Definition of Startup',
    impactScore: 'Moderate'
  }
];

export const OFFICIAL_PORTALS: OfficialPortal[] = [
  {
    id: 'startupindia',
    name: 'Startup India Portal',
    governingBody: 'DPIIT, Ministry of Commerce & Industry',
    url: 'https://www.startupindia.gov.in',
    displayUrl: 'startupindia.gov.in',
    primaryPurpose: 'Central hub for ecosystem knowledge, mentor networks, incubator linkages, and scheme guidelines.',
    governmentFee: '₹0 (Free)',
    tag: 'National Ecosystem Hub',
    category: 'funding',
    isOptional: false
  },
  {
    id: 'nsws',
    name: 'National Single Window System (NSWS)',
    governingBody: 'Ministry of Commerce & Industry, Govt. of India',
    url: 'https://www.nsws.gov.in',
    displayUrl: 'nsws.gov.in',
    primaryPurpose: 'Official secure single-window gateway for filing DPIIT Startup Recognition and investor clearances.',
    governmentFee: '₹0 (Free)',
    tag: 'Official DPIIT Filing',
    category: 'core',
    isOptional: false
  },
  {
    id: 'udyam',
    name: 'Udyam Registration Portal',
    governingBody: 'Ministry of Micro, Small and Medium Enterprises',
    url: 'https://udyamregistration.gov.in',
    displayUrl: 'udyamregistration.gov.in',
    primaryPurpose: '100% paperless registration for Micro, Small & Medium enterprises with MSME Samadhaan protection.',
    governmentFee: '₹0 (Free & Paperless)',
    tag: 'Mandatory MSME License',
    category: 'core',
    isOptional: false
  },
  {
    id: 'gst',
    name: 'GST Registration',
    governingBody: 'Goods and Services Tax Network (GSTN) & CBIC',
    url: 'https://www.gst.gov.in',
    displayUrl: 'gst.gov.in',
    primaryPurpose: 'Official Government GST Portal for online registration (Form REG-01), tax filing, and compliance. An optional registration requirement for early-stage startups with annual turnover under ₹40 Lakhs (goods) or ₹20 Lakhs (services), unless engaged in inter-state commerce or e-commerce.',
    governmentFee: '₹0 (Free Govt Registration)',
    tag: 'Optional Registration for Startups',
    category: 'optional_tax',
    isOptional: true
  },
  {
    id: 'jansamarth',
    name: 'Jan Samarth National Portal',
    governingBody: 'Department of Financial Services (DFS), Ministry of Finance',
    url: 'https://www.jansamarth.in',
    displayUrl: 'jansamarth.in',
    primaryPurpose: 'Digital credit linkage portal connecting borrowers directly to commercial lenders for PM MUDRA & central schemes.',
    governmentFee: '₹0 (Scheme Application)',
    tag: 'Institutional Credit',
    category: 'funding',
    isOptional: false
  },
  {
    id: 'seedfund',
    name: 'Startup India Seed Fund Portal (SISFS)',
    governingBody: 'DPIIT, Ministry of Commerce & Industry',
    url: 'https://seedfund.startupindia.gov.in',
    displayUrl: 'seedfund.startupindia.gov.in',
    primaryPurpose: 'Application portal for up to ₹20 Lakh POC grants and up to ₹50 Lakh convertible debt via incubators.',
    governmentFee: '₹0 (Free Application)',
    tag: 'Early Stage Seed Grants',
    category: 'funding',
    isOptional: false
  },
  {
    id: 'mca',
    name: 'Ministry of Corporate Affairs (MCA21)',
    governingBody: 'Ministry of Corporate Affairs, Govt. of India',
    url: 'https://www.mca.gov.in',
    displayUrl: 'mca.gov.in',
    primaryPurpose: 'Online incorporation of Private Limited Companies and LLPs via SPICe+ and FiLLiP forms.',
    governmentFee: 'Statutory Fee based on Capital',
    tag: 'Corporate Entity Formation',
    category: 'core',
    isOptional: false
  }
];

export const GST_REGISTRATION_GUIDE = {
  portalName: 'GST Registration',
  officialUrl: 'https://www.gst.gov.in',
  directRegistrationUrl: 'https://reg.gst.gov.in/registration/',
  displayUrl: 'gst.gov.in',
  governingBody: 'Central Board of Indirect Taxes and Customs (CBIC) & GSTN',
  isOptional: true,
  turnoverThresholds: {
    goodsNormal: '₹40 Lakhs / year',
    servicesNormal: '₹20 Lakhs / year',
    specialCategoryStates: '₹20 Lakhs (Goods) / ₹10 Lakhs (Services)',
  },
  statutoryRule: 'Startups below these statutory thresholds are NOT legally obligated to obtain GSTIN. Early registration is purely voluntary.',
  whyRegisterVoluntarily: [
    {
      title: 'Claim Input Tax Credit (ITC)',
      desc: 'Recover up to 18%-28% GST paid on hardware (laptops, servers), office setup, raw materials, SaaS tools, and cloud infrastructure costs.'
    },
    {
      title: 'Inter-State & Cross-Border Trade',
      desc: 'Mandatory under Section 24 of CGST Act if you sell physical goods or services across state borders, even with ₹0 turnover.'
    },
    {
      title: 'E-Commerce Marketplace Selling',
      desc: 'Required by Amazon, Flipkart, Meesho, and government e-Marketplace (GeM) to list products as an online merchant.'
    },
    {
      title: 'B2B Client Trust & Invoicing',
      desc: 'Corporate and enterprise clients mandate GST invoices so they can claim their own ITC against payments made to you.'
    }
  ],
  documentsRequired: [
    'PAN Card of the Business Entity / Sole Proprietor',
    'Aadhaar Card of Primary Promoter / Authorized Signatory for OTP verification',
    'Certificate of Incorporation (COI) / Partnership Deed / Business Registration',
    'Principal Place of Business Proof (Electricity Bill / Municipal Tax Receipt / Rent Agreement + Landlord NOC)',
    'Active Bank Account Details (Cancelled Cheque, Bank Statement showing Name & IFSC)',
    'Authorized Signatory Letter / Board Resolution authorizing the applicant'
  ],
  stepsToRegister: [
    'Part A: Visit reg.gst.gov.in/registration, select "New Registration", enter Entity PAN, Legal Name, Mobile & Email for OTP verification to generate a 15-character Temporary Reference Number (TRN).',
    'Part B: Log in using TRN and mobile OTP within 15 days to fill business details, promoters, principal place of business, HSN/SAC codes, and upload PDF documents.',
    'Aadhaar Authentication: Opt for biometric or Aadhaar OTP authentication of the authorized signatory for faster 7-day approval without physical site inspection.',
    'ARN & GSTIN Grant: Receive Application Reference Number (ARN). Proper verification yields your 15-digit GSTIN Certificate (Form GST REG-06) at zero cost.'
  ]
};

export const FRAUD_WARNING_GUIDELINES = [
  {
    title: 'Exclusively Rely on .gov.in and .nic.in Domains',
    desc: 'Legitimate Indian government departments never use domains ending in .com, .org, .net, or .co.in for official statutory filings. Always check the browser address bar for official governmental suffixes.'
  },
  {
    title: 'Zero Government Filing Charges for DPIIT & Udyam',
    desc: 'The Government of India has waived 100% of filing fees for both DPIIT Startup Recognition and Udyam MSME certificates. Never pay private lookalike sites claiming "mandatory government stamp fees".'
  },
  {
    title: 'Strictly Protect Aadhaar OTPs and Banking Pins',
    desc: 'Government portals verify identity via direct, automated OTP delivery. No official government officer or scheme evaluator will ever call you requesting an OTP or upfront processing fee.'
  },
  {
    title: 'Verify Loan Sanction Letters Independently',
    desc: 'Fake sanction letters bearing forged Ministry of Finance logos are often circulated by scammers demanding "processing security deposits". All genuine PMMY credit is sanctioned directly by RBI-registered banks.'
  }
];

export const MSME_THRESHOLDS_2025 = {
  micro: {
    maxInvestmentCr: 2.5,
    maxTurnoverCr: 10,
    name: 'Micro Enterprise',
    color: 'text-emerald-600 dark:text-emerald-400',
    description: 'Investment in Plant & Machinery ≤ ₹2.5 Cr and Annual Turnover ≤ ₹10 Cr'
  },
  small: {
    maxInvestmentCr: 25,
    maxTurnoverCr: 100,
    name: 'Small Enterprise',
    color: 'text-blue-600 dark:text-blue-400',
    description: 'Investment in Plant & Machinery ≤ ₹25 Cr and Annual Turnover ≤ ₹100 Cr'
  },
  medium: {
    maxInvestmentCr: 125,
    maxTurnoverCr: 500,
    name: 'Medium Enterprise',
    color: 'text-purple-600 dark:text-purple-400',
    description: 'Investment in Plant & Machinery ≤ ₹125 Cr and Annual Turnover ≤ ₹500 Cr'
  }
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-startup-eligibility',
    category: 'eligibility',
    categoryLabel: 'Startup Eligibility',
    badge: 'Statutory Criteria',
    question: 'What are the official eligibility criteria for DPIIT Startup India recognition?',
    directAnswerSummary: 'An entity must be a registered Private Limited Company, LLP, or Partnership firm under 10 years old (20 years for Deep Tech) with turnover not exceeding ₹200 Cr, working towards product innovation or scalable employment creation.',
    answer: 'To qualify for DPIIT Startup Recognition under the Department for Promotion of Industry and Internal Trade (Ministry of Commerce & Industry):\n\n1. Entity Type: Must be incorporated as a Private Limited Company (under Companies Act 2013), a Limited Liability Partnership (LLP under LLP Act 2008), or a Registered Partnership Firm (under Indian Partnership Act 1932). Sole Proprietorships and Hindu Undivided Families (HUFs) are strictly ineligible.\n2. Entity Age: Not older than 10 years from the original date of incorporation/registration (extended up to 20 years for recognized Deep Tech startups under the National Deep Tech Startup Policy).\n3. Turnover Ceiling: Annual turnover must not have exceeded ₹200 Crores in any previous financial year (and up to ₹300 Crores for Deep Tech entities).\n4. Originality & Innovation: The entity must NOT be formed by splitting up or reconstructing an existing business enterprise. It must demonstrate work towards innovation, development, or commercialization of new products, processes, or services driven by technology or intellectual property, or possess a scalable business model with high employment or wealth generation potential.',
    officialReference: 'DPIIT Notification G.S.R. 127(E) dated 19 Feb 2019 & Gazette of India',
    officialPortalUrl: 'https://www.nsws.gov.in'
  },
  {
    id: 'faq-registration-fees',
    category: 'registration',
    categoryLabel: 'Statutory Fees',
    badge: '₹0 Government Fee',
    question: 'How much does the Government of India charge for DPIIT recognition and Udyam registration?',
    directAnswerSummary: 'Statutory government filing fees are exactly ₹0 (Nil) for both DPIIT Startup India Recognition on NSWS and Udyam MSME Registration.',
    answer: 'The official statutory government fee for both DPIIT Startup Recognition (via National Single Window System - nsws.gov.in) and Udyam MSME Registration (udyamregistration.gov.in) is exactly ₹0 (Nil). The Government of India levies zero filing fees. Any private portal demanding "mandatory statutory stamp duty" or "portal processing charges" is an unauthorized intermediary. Just-In-Time provides professional documentation curation, compliance advisory, pitch-deck formatting, and filing assistance under transparent, agreed advisory fees, but the government portal filing itself is completely free.',
    officialReference: 'Ministry of MSME Notification S.O. 2119(E) & DPIIT Startup India Guidelines',
    officialPortalUrl: 'https://udyamregistration.gov.in'
  },
  {
    id: 'faq-tax-benefits-80iac',
    category: 'tax',
    categoryLabel: 'Tax Benefits (80-IAC)',
    badge: '100% Tax Deduction',
    question: 'How does the Section 80-IAC 3-year 100% Tax Holiday work, and is it automatic?',
    directAnswerSummary: 'Section 80-IAC grants a 100% deduction on profits for any 3 consecutive years out of 10 years from incorporation, but requires separate certification from the Inter-Ministerial Board (IMB) via Form-1.',
    answer: 'Section 80-IAC of the Income Tax Act provides an eligible startup with a 100% deduction on profits and gains for any 3 consecutive assessment years out of a 10-year block starting from incorporation.\n\nCrucially, Section 80-IAC is NOT automatic upon receiving DPIIT recognition. Startups must submit a separate application (Form-1) along with detailed audited financial statements, business plans, and video pitch decks to the Inter-Ministerial Board (IMB) of Certification. Key conditions:\n- Entity must be incorporated on or after 1st April 2016.\n- Must be a Private Limited Company or LLP.\n- Must obtain formal certification from the IMB proving innovative products or high-potential scalable employment models.',
    officialReference: 'Income Tax Act 1961, Section 80-IAC & Central Board of Direct Taxes (CBDT)',
    officialPortalUrl: 'https://www.startupindia.gov.in'
  },
  {
    id: 'faq-angel-tax-exemption',
    category: 'tax',
    categoryLabel: 'Angel Tax (56(2)(viib))',
    badge: 'Officially Abolished',
    question: 'What is Section 56(2)(viib) (Angel Tax) relief, and what is its current status?',
    directAnswerSummary: 'Section 56(2)(viib) (Angel Tax) has been officially abolished for all investor classes across unlisted Indian companies, removing premium taxation risks.',
    answer: 'Section 56(2)(viib) of the Income Tax Act historically taxed the excess premium received on issue of shares over and above Fair Market Value (FMV) in unlisted companies as "Income from Other Sources".\n\n1. DPIIT Exemption (Form-2): DPIIT-recognized startups that filed Form-2 declaration with the CBDT were exempt from Angel Tax, provided the aggregate amount of paid-up share capital and share premium did not exceed ₹25 Crores (excluding investments by non-residents, listed companies, or Category I/II AIFs).\n2. Union Budget Abolition: The Finance Act has officially abolished Section 56(2)(viib) across all classes of investors (both domestic and foreign) for unlisted Indian companies, permanently eliminating Angel Tax friction for fundraising startups.',
    officialReference: 'Finance Act (Abolition of Section 56(2)(viib)) & CBDT Circulars',
    officialPortalUrl: 'https://incometax.gov.in'
  },
  {
    id: 'faq-patent-trademark-concessions',
    category: 'compliance',
    categoryLabel: 'Intellectual Property',
    badge: 'Up to 80% Rebate',
    question: 'What IPR and patent rebates do recognized startups receive?',
    directAnswerSummary: 'Recognized startups receive an 80% rebate on statutory patent filing fees, a 50% rebate on trademark filings, and free patent drafting through empaneled facilitators under SIPP.',
    answer: 'Under the Scheme for Facilitating Start-Ups Intellectual Property Protection (SIPP):\n- Fast-Track Examination: Startups receive expedited examination of patent applications at no additional government surcharge.\n- Government Fee Rebates: Up to 80% statutory rebate on patent filing fees and 50% statutory rebate on trademark filings compared to standard corporate applicants.\n- Facilitator Panel: The Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) empannels specialized IP facilitators who provide IP drafting and prosecution assistance, where the facilitation fees are directly reimbursed by the Central Government.',
    officialReference: 'SIPP Scheme Guidelines, CGPDTM, Department for Promotion of Industry and Internal Trade',
    officialPortalUrl: 'https://ipindia.gov.in'
  },
  {
    id: 'faq-entity-proprietorship',
    category: 'eligibility',
    categoryLabel: 'Entity Structures',
    badge: 'Legal Constraint',
    question: 'Can a Sole Proprietorship or HUF register under Startup India or claim DPIIT benefits?',
    directAnswerSummary: 'Sole Proprietorships and HUFs cannot register under DPIIT Startup India, but can register as Udyam MSMEs to access priority lending and MSME Samadhaan.',
    answer: 'No. Sole Proprietorships and Hindu Undivided Families (HUFs) are legally ineligible for DPIIT Startup India recognition. To become eligible, the proprietor must incorporate a Private Limited Company or register a Limited Liability Partnership (LLP) with the Ministry of Corporate Affairs (MCA) and transfer the business operations legally. However, Sole Proprietorships CAN register under Udyam MSME to claim MSME interest subvention, priority sector lending, and MSME Samadhaan delayed payment protection.',
    officialReference: 'Ministry of Commerce & Industry Gazette Notification G.S.R. 127(E)',
    officialPortalUrl: 'https://udyamregistration.gov.in'
  },
  {
    id: 'faq-msme-samadhaan-protection',
    category: 'compliance',
    categoryLabel: 'Payment Protection',
    badge: '3x RBI Interest',
    question: 'How does MSME Samadhaan protect startups against delayed payments?',
    directAnswerSummary: 'Corporate buyers must pay registered MSMEs within 45 days. Delayed payments legally incur compound interest at 3 times the RBI bank rate under the MSMED Act.',
    answer: 'Under Section 15 of the MSMED Act 2006, buyers of goods or services from a registered MSME are legally required to make payment within the agreed timeframe (maximum 45 days). If no written agreement exists, payment must be made within 15 days.\n\nIf the buyer fails to pay within 45 days:\n- The buyer is legally mandated to pay compound interest with monthly rests at 3 times the RBI Bank Rate from the due date.\n- The MSME can file an online recovery petition before the Micro and Small Enterprise Facilitation Council (MSEFC) on the MSME Samadhaan portal.\n- Corporate buyers are required by MCA Form MSME-1 to disclose all outstanding MSME dues exceeding 45 days along with reasons for delay.',
    officialReference: 'MSMED Act 2006 (Sections 15 to 24) & Ministry of MSME',
    officialPortalUrl: 'https://samadhaan.msme.gov.in'
  },
  {
    id: 'faq-sisfs-seed-fund',
    category: 'funding',
    categoryLabel: 'Seed Fund (SISFS)',
    badge: 'Up to ₹70 Lakhs',
    question: 'What is the Startup India Seed Fund Scheme (SISFS) and how is funding disbursed?',
    directAnswerSummary: 'SISFS provides up to ₹20 Lakhs in non-repayable grants for proof-of-concept/prototype and up to ₹50 Lakhs in debt/convertible debentures for commercialization through approved incubators.',
    answer: 'The Startup India Seed Fund Scheme (SISFS) provides financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization.\n\nFunding Structure:\n1. Non-Repayable Grant (up to ₹20 Lakhs): Disbursed in milestone-linked tranches for proof of concept, prototype validation, or field trials.\n2. Debt / Convertible Debentures (up to ₹50 Lakhs): Disbursed for market entry, commercialization, or business scaling at nominal interest rates.\n\nEligibility & Application:\n- Startups apply directly through the Startup India portal to eligible DPIIT-approved incubators across India.\n- The startup must not have received more than ₹10 Lakhs in monetary support under any other Central or State government scheme (excluding prize money).\n- Startup must have an innovative business idea with an operational prototype or viable concept.',
    officialReference: 'SISFS Operational Guidelines, Startup India & DPIIT',
    officialPortalUrl: 'https://seedfund.startupindia.gov.in'
  },
  {
    id: 'faq-mudra-loan-rules',
    category: 'funding',
    categoryLabel: 'MUDRA Credit (PMMY)',
    badge: 'Collateral-Free',
    question: 'What are the loan limits under Pradhan Mantri MUDRA Yojana (PMMY) including Tarun Plus?',
    directAnswerSummary: 'PMMY offers collateral-free loans in four categories: Shishu (up to ₹50k), Kishor (₹50k–₹5L), Tarun (₹5L–₹10L), and Tarun Plus (₹10L–₹20L) through scheduled banks.',
    answer: 'PMMY offers collateral-free business loans through scheduled commercial banks, RRBs, Small Finance Banks, and MFIs:\n- Shishu: Micro credit up to ₹50,000 for early ideation and setup equipment.\n- Kishor: Credit from ₹50,001 up to ₹5,00,000 for purchasing machinery, inventory, and working capital.\n- Tarun: Credit from ₹5,00,001 up to ₹10,00,000 for enterprise expansion.\n- Tarun Plus: Credit from ₹10,00,001 up to ₹20,00,000 for entrepreneurs who have successfully availed and repaid previous Tarun loans with clean credit track records.\n- Collateral: Zero collateral or third-party guarantee required; covered by the Credit Guarantee Fund for Micro Units (CGFMU).',
    officialReference: 'Department of Financial Services, Ministry of Finance, PMMY Guidelines',
    officialPortalUrl: 'https://www.mudra.org.in'
  },
  {
    id: 'faq-gst-threshold-startups',
    category: 'tax',
    categoryLabel: 'GST Applicability',
    badge: 'Voluntary vs Mandatory',
    question: 'Is GST registration mandatory immediately upon incorporating a startup?',
    directAnswerSummary: 'Mandatory only above ₹40L turnover (goods) or ₹20L (services), or for inter-state and e-commerce supply; voluntary registration enables claiming Input Tax Credit (ITC).',
    answer: 'GST registration is mandatory under the following legal circumstances:\n1. Aggregate Annual Turnover: Exceeding ₹40 Lakhs for intra-state suppliers of goods (₹20 Lakhs in special category States) or ₹20 Lakhs for suppliers of services (₹10 Lakhs in special category States).\n2. Compulsory Section 24 Registration regardless of turnover:\n   - Making inter-state taxable supply of goods.\n   - Supplying goods or services through an E-commerce operator (e.g., Amazon, Flipkart, Blinkit).\n   - Liable to pay tax under Reverse Charge Mechanism (RCM).\n   - Providing online information and database access or retrieval (OIDAR) services from outside India.\nEven for pre-revenue startups, voluntary GST registration is widely recommended to claim Input Tax Credit (ITC) on initial equipment, computers, cloud servers, and office rents, and to establish corporate vendor credibility.',
    officialReference: 'Central Goods and Services Tax (CGST) Act 2017, Sections 22 & 24',
    officialPortalUrl: 'https://www.gst.gov.in'
  }
];
