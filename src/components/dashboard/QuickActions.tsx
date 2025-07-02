'use client';

import React from 'react';
import { CreditProduct } from '@/types/credit';
import { DollarSign, TrendingUp, Calculator, MessageCircle } from 'lucide-react';

interface QuickActionsProps {
  currentProducts: CreditProduct[];
  availableProducts: CreditProduct[];
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  currentProducts,
  availableProducts
}) => {
  const actions = [
    {
      id: 'request_loan',
      icon: DollarSign,
      label: '💰 Pedir empréstimo',
      description: 'Até R$ 8.000 pré-aprovado',
      color: 'bg-credito-pl text-white',
      available: true
    },
    {
      id: 'increase_limit',
      icon: TrendingUp,
      label: '🔄 Aumentar limite LC',
      description: 'Solicitar aumento',
      color: 'bg-credito-lc text-white',
      available: currentProducts.some(p => p.type === 'LC')
    },
    {
      id: 'simulate_costs',
      icon: Calculator,
      label: '📊 Simular custos',
      description: 'Compare produtos',
      color: 'bg-mp-gray-600 text-white',
      available: true
    },
    {
      id: 'talk_specialist',
      icon: MessageCircle,
      label: '💬 Falar especialista',
      description: 'Tire suas dúvidas',
      color: 'bg-credito-info text-white',
      available: true
    }
  ];

  const availableActions = actions.filter(action => action.available);

  return (
    <section className="px-4 mb-6">
      <h3 className="text-sm font-medium text-mp-gray-600 mb-3">
        ⚡ AÇÕES RÁPIDAS:
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {availableActions.map((action) => (
          <button
            key={action.id}
            className={`${action.color} p-4 rounded-xl text-left hover:opacity-90 transition-opacity shadow-sm`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <action.icon className="w-4 h-4" />
              <span className="text-xs font-semibold">{action.label}</span>
            </div>
            <div className="text-xs opacity-90">{action.description}</div>
          </button>
        ))}
      </div>
    </section>
  );
};
