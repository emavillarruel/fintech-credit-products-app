// Types para produtos de crédito
export interface CreditProduct {
  id: string;
  type: 'LC' | 'PL' | 'BNPL' | 'VEHICLE' | 'BUSINESS';
  name: string;
  description: string;
  status: 'ACTIVE' | 'AVAILABLE' | 'PENDING' | 'BLOCKED';
  amount: {
    available: number;
    total: number;
    used: number;
  };
  rate: {
    monthly: number;
    annual: number;
    personalizedRate?: number;
  };
  terms?: {
    minMonths: number;
    maxMonths: number;
    preferredMonths?: number;
  };
  benefits: string[];
  idealFor: string[];
  notIdealFor?: string[];
}

// User profile para personalização
export interface UserProfile {
  id: string;
  name: string;
  score: number;
  scoreLevel: 'EXCELLENT' | 'VERY_GOOD' | 'GOOD' | 'FAIR' | 'POOR';
  customerSince: string;
  paymentHistory: 'EXCELLENT' | 'GOOD' | 'REGULAR' | 'POOR';
  estimatedIncome?: number;
  preferredPaymentMethod: string;
  mlmpHistory: {
    totalPurchases: number;
    averageMonthlySpending: number;
    frequentCategories: string[];
    paymentPattern: 'FREQUENT' | 'SPORADIC' | 'SEASONAL';
  };
}

// Necessidade detectada do usuário
export interface UserNeed {
  type: 'BUY_SPECIFIC' | 'HAVE_MONEY' | 'INVEST_BUSINESS' | 'EMERGENCY';
  description: string;
  amount?: number;
  urgency: 'NOW' | 'THIS_MONTH' | 'NEXT_MONTHS';
  paymentPreference: 'FIXED_INSTALLMENTS' | 'FLEXIBLE_USE';
  context?: {
    cartItems?: any[];
    businessType?: string;
    investmentPurpose?: string;
  };
}

// Recomendação personalizada
export interface CreditRecommendation {
  productId: string;
  matchPercentage: number;
  reasons: string[];
  benefits: string[];
  comparison?: {
    alternatives: {
      productId: string;
      whyNotIdeal: string[];
    }[];
  };
  simulation: {
    amount: number;
    monthlyPayment?: number;
    totalCost: number;
    interestCost: number;
    months?: number;
    timeline: {
      month: number;
      payment: number;
      remaining: number;
    }[];
  };
}

// Status atual do dashboard
export interface DashboardData {
  user: UserProfile;
  currentProducts: CreditProduct[];
  availableProducts: CreditProduct[];
  detectedNeed?: UserNeed;
  recommendation?: CreditRecommendation;
  proactiveInsights: ProactiveInsight[];
}

// Insights proativos do widget
export interface ProactiveInsight {
  id: string;
  type: 'OPPORTUNITY' | 'OPTIMIZATION' | 'EDUCATION' | 'WARNING';
  title: string;
  description: string;
  action?: {
    label: string;
    type: 'NAVIGATE' | 'SIMULATE' | 'CONTRACT' | 'LEARN';
    target: string;
  };
  savings?: number;
  relevanceScore: number;
  context: {
    triggeredBy: string;
    validUntil?: string;
  };
}
