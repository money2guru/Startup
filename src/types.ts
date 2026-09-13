export type EntityType = 
  | 'Pvt Ltd'
  | 'LLP'
  | 'Registered Partnership'
  | 'Proprietorship'
  | 'Idea Stage / Pre-Incorporation';

export type ServiceType = 
  | 'DPIIT Filing Help'
  | 'Udyam Guidance'
  | 'Project Report Setup'
  | 'Business Scaling & Compliance'
  | 'MUDRA / Credit Preparation'
  | 'SISFS Seed Grant Strategy'
  | 'Optional GST Registration';

export interface SchemeRoute {
  id: string;
  name: string;
  badge: string;
  fee: string;
  shortDesc: string;
  keyRules: string[];
  keyBenefits: string[];
  turnoverRules?: string;
  portalLinks: { name: string; url: string }[];
  highlightColor: string;
  iconName: string;
  details: {
    overview: string;
    eligibilityList: string[];
    mandatoryDocuments: string[];
    proTip: string;
  };
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  shortSummary: string;
  estimatedTime: string;
  cost: string;
  keyDeliverables: string[];
  prerequisites: string[];
  officialPortal: string;
  commonTraps: string;
}

export interface MythItem {
  id: string;
  category: 'fees' | 'funding' | 'schemes' | 'validity';
  myth: string;
  reality: string;
  officialReference: string;
  impactScore: 'High Risk' | 'Moderate' | 'Critical';
}

export interface OfficialPortal {
  id: string;
  name: string;
  governingBody: string;
  url: string;
  displayUrl: string;
  primaryPurpose: string;
  governmentFee: string;
  tag: string;
  isOptional?: boolean;
  category?: 'core' | 'funding' | 'optional_tax';
}

export interface LeadSubmission {
  id: string;
  founderName: string;
  businessName: string;
  entityType: EntityType;
  servicesNeeded: ServiceType[];
  mobileNumber: string;
  email?: string;
  notes?: string;
  timestamp: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'registration' | 'tax' | 'eligibility' | 'funding' | 'compliance';
  categoryLabel: string;
  directAnswerSummary: string;
  officialReference: string;
  officialPortalUrl?: string;
  badge?: string;
}
