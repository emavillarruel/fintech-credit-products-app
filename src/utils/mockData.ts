import { DashboardData, CreditProduct, UserProfile, CreditRecommendation, ProactiveInsight } from '@/types/credit';

// Mock user profile
export const mockUserProfile: UserProfile = {
  id: 'user_123',
  name: 'Maria Silva',
  score: 750,
  scoreLevel: 'VERY_GOOD',
  customerSince: '2022-03-15',
  paymentHistory: 'EXCELLENT',
  estimatedIncome: 4500,
  preferredPaymentMethod: 'PIX',
  mlmpHistory: {
    totalPurchases: 45,
    averageMonthlySpending: 800,
    frequentCategories: ['Eletrônicos', 'Casa e Jardim', 'Moda'],
    paymentPattern: 'FREQUENT'
  }
};

// Mock current products
export const mockCurrentProducts: CreditProduct[] = [
  {
    id: 'lc_001',
    type: 'LC',
    name: 'Linha de Crédito',
    description: 'Para suas compras no Mercado Livre',
    status: 'ACTIVE',
    amount: {
      available: 2500,
      total: 5000,
      used: 2500
    },
    rate: {
      monthly: 2.5,
      annual: 34.5,
      personalizedRate: 2.3
    },
    benefits: [
      'Disponível 24h',
      'Paga só o que usar',
      'Sem anuidade'
    ],
    idealFor: [
      'Compras frequentes no ML',
      'Gastos variáveis',
      'Flexibilidade de pagamento'
    ]
  }
];

// Mock available products  
export const mockAvailableProducts: CreditProduct[] = [
  {
    id: 'pl_001',
    type: 'PL',
    name: 'Empréstimo Pessoal',
    description: 'Dinheiro na conta para usar como quiser',
    status: 'AVAILABLE',
    amount: {
      available: 8000,
      total: 8000,
      used: 0
    },
    rate: {
      monthly: 1.8,
      annual: 23.8,
      personalizedRate: 1.6
    },
    terms: {
      minMonths: 6,
      maxMonths: 36,
      preferredMonths: 12
    },
    benefits: [
      'Taxa personalizada',
      'Parcelas fixas',
      'Dinheiro na conta'
    ],
    idealFor: [
      'Quantia específica',
      'Planejamento fixo',
      'Investimentos'
    ],
    notIdealFor: [
      'Gastos variáveis',
      'Compras frequentes'
    ]
  },
  {
    id: 'bnpl_001',
    type: 'BNPL',
    name: 'Parcelamento sem Cartão',
    description: 'Parcele suas compras direto no checkout',
    status: 'AVAILABLE',
    amount: {
      available: 3000,
      total: 3000,
      used: 0
    },
    rate: {
      monthly: 0,
      annual: 0
    },
    benefits: [
      'Sem juros até 12x',
      'Aprovação instantânea',
      'Sem cartão de crédito'
    ],
    idealFor: [
      'Compras específicas',
      'Sem cartão de crédito',
      'Parcelamento sem juros'
    ]
  }
];

// Mock recommendation
export const mockRecommendation: CreditRecommendation = {
  productId: 'pl_001',
  matchPercentage: 92,
  reasons: [
    'Seu histórico mostra pagamentos regulares e no prazo',
    'Para quantia específica, empréstimo tem taxa menor que linha de crédito',
    'Parcelas fixas facilitam seu planejamento financeiro'
  ],
  benefits: [
    'Economia de R$ 164/mês vs usar LC + cartão',
    'Taxa personalizada 1,6% (menor que padrão)',
    'Planejamento mais fácil com parcelas fixas'
  ],
  comparison: {
    alternatives: [
      {
        productId: 'lc_001',
        whyNotIdeal: [
          'Limite atual insuficiente (R$ 2.500)',
          'Taxa maior para uso prolongado',
          'Precisaria combinar com cartão'
        ]
      }
    ]
  },
  simulation: {
    amount: 5000,
    monthlyPayment: 464,
    totalCost: 5568,
    interestCost: 568,
    months: 12,
    timeline: [
      { month: 1, payment: 464, remaining: 4536 },
      { month: 2, payment: 464, remaining: 4072 },
      { month: 3, payment: 464, remaining: 3608 },
      // ... mais meses
      { month: 12, payment: 464, remaining: 0 }
    ]
  }
};

// Mock proactive insights
export const mockProactiveInsights: ProactiveInsight[] = [
  {
    id: 'insight_001',
    type: 'OPPORTUNITY',
    title: 'Economia detectada',
    description: 'Para sua compra de R$ 3.200, linha de crédito sai mais barato que parcelar no cartão',
    action: {
      label: 'Usar LC',
      type: 'NAVIGATE',
      target: '/credit/lc/use'
    },
    savings: 180,
    relevanceScore: 95,
    context: {
      triggeredBy: 'cart_analysis',
      validUntil: '2024-01-15'
    }
  },
  {
    id: 'insight_002', 
    type: 'OPTIMIZATION',
    title: 'Limite LC quase no máximo',
    description: 'Você está usando 50% do seu limite. Considere aumentar ou usar empréstimo para compras maiores.',
    action: {
      label: 'Ver opções',
      type: 'NAVIGATE',
      target: '/credit/optimize'
    },
    relevanceScore: 80,
    context: {
      triggeredBy: 'usage_analysis'
    }
  }
];

// Mock dashboard data completo
export const mockDashboardData: DashboardData = {
  user: mockUserProfile,
  currentProducts: mockCurrentProducts,
  availableProducts: mockAvailableProducts,
  recommendation: mockRecommendation,
  proactiveInsights: mockProactiveInsights
};
