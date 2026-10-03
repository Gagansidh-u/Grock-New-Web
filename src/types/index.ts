export type PageId = 
  | 'home' 
  | 'services' 
  | 'pricing' 
  | 'how-it-works' 
  | 'about' 
  | 'contact' 
  | 'checkout' 
  | 'confirmation' 
  | 'privacy' 
  | 'terms' 
  | 'refund' 
  | 'delivery';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'web' | 'webapp' | 'android' | 'conversion' | 'data' | 'custom';
  shortDesc: string;
  fullDesc: string;
  idealFor: string[];
  included: string[];
  excluded: string[];
  process: string[];
  deliveryTime: string;
  pricingModel: string;
  customerRequirements: string[];
  revisionPolicy: string;
  deliverables: string[];
  startingPrice: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  serviceCategory: string;
  developmentFee: number;
  description: string;
  pagesOrScreens: string;
  scope: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  deliverables: string[];
  additionalDevFee: string;
  thirdPartyNotes: string;
  isPopular?: boolean;
}

export interface CustomerEnquiry {
  id: string;
  name: string;
  email: string;
  mobile: string;
  serviceRequired: string;
  projectDescription: string;
  budget?: string;
  additionalRequirements?: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'quoted' | 'closed';
}

export interface OrderItem {
  orderId: string;
  serviceId: string;
  serviceName: string;
  packageDescription: string;
  customerName: string;
  customerEmail: string;
  customerMobile: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  paymentStatus: 'PAID' | 'PENDING' | 'VERIFYING' | 'FAILED';
  paymentMethod: string;
  paymentReference: string;
  paymentDate: string;
  projectStatus: 'Requirement Review' | 'Scope Finalization' | 'In Development' | 'Testing' | 'Completed';
  notes?: string;
}
