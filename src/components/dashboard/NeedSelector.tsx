'use client';

import React from 'react';
import { CreditProduct } from '@/types/credit';
import { ShoppingCart, DollarSign, Building2, HelpCircle } from 'lucide-react';

interface NeedSelectorProps {
  onNeedSelect: (needType: string) => void;
  selectedNeed: string | null;
  availableProducts: CreditProduct[];
}

export const NeedSelector: React.FC<NeedSelectorProps> = ({
  onNeedSelect,
  selectedNeed,
  availableProducts
}) => {
  const needs = [
    {
      id: 'BUY_SPECIFIC',
      title: '🛒 COMPRAR ALGO ESPECÍFICO',
      description: 'Produtos, serviços ou investimentos',
      icon: ShoppingCart,
      recommendation: {
        text: 'Melhor opção: Linha de Crédito',
        available: 'Disponível agora: R$ 2.500',
        color: 'text-credito-lc'
      }
    },
    {
      id: 'HAVE_MONEY',
      title: '💰 TER DINHEIRO DISPONÍVEL',
      description: 'Quantia livre para usar como quiser',
      icon: DollarSign,
      recommendation: {
        text: 'Melhor opção: Empréstimo',
        available: 'Até R$ 8.000 pré-aprovado',
        color: 'text-credito-pl'
      }
    },
    {
      id: 'INVEST_BUSINESS',
      title: '🏢 INVESTIR NO MEU NEGÓCIO',
      description: 'Capital, equipamentos, expansão',
      icon: Building2,
      recommendation: {
        text: 'Ver opções empresariais →',
        available: '',
        color: 'text-credito-info'
      }
    }
  ];

  const getProductAmount = (type: string) => {
    if (type === 'BUY_SPECIFIC') {
      // Retorna linha de crédito disponível
      const lc = availableProducts.find(p => p.type === 'LC');
      return lc ? `R$ ${lc.amount.available.toLocaleString()}` : 'R$ 2.500';
    }
    if (type === 'HAVE_MONEY') {
      // Retorna empréstimo disponível
      const pl = availableProducts.find(p => p.type === 'PL');
      return pl ? `R$ ${pl.amount.available.toLocaleString()}` : 'R$ 8.000';
    }
    return '';
  };

  return (
    <section className="px-4 mb-6">
      <h2 className="text-lg font-medium text-mp-gray-700 mb-4">
        ❓ O que você precisa hoje?
      </h2>

      <div className="space-y-3">
        {needs.map((need) => (
          <button
            key={need.id}
            onClick={() => onNeedSelect(need.id)}
            className={`w-full p-4 border rounded-xl text-left transition-all duration-200 ${
              selectedNeed === need.id
                ? 'border-mp-blue bg-mp-blue/5 shadow-mp'
                : 'border-mp-gray-200 bg-white hover:border-mp-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                selectedNeed === need.id ? 'bg-mp-blue/10' : 'bg-mp-gray-50'
              }`}>
                <need.icon className={`w-5 h-5 ${
                  selectedNeed === need.id ? 'text-mp-blue' : 'text-mp-gray-600'
                }`} />
              </div>
              
              <div className="flex-1">
                <h3 className={`text-sm font-semibold mb-1 ${
                  selectedNeed === need.id ? 'text-mp-blue' : 'text-mp-gray-700'
                }`}>
                  {need.title}
                </h3>
                
                <p className="text-xs text-mp-gray-500 mb-3">
                  {need.description}
                </p>
                
                <div className={`text-xs ${need.recommendation.color}`}>
                  <div className="font-medium">{need.recommendation.text}</div>
                  {need.recommendation.available && (
                    <div className="mt-1 opacity-80">
                      📊 {need.recommendation.available}
                    </div>
                  )}
                </div>
              </div>
              
              {selectedNeed === need.id && (
                <div className="w-2 h-2 bg-mp-blue rounded-full mt-2"></div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Option for undecided users */}
      <div className="mt-4 p-3 bg-mp-gray-50 rounded-lg">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <button 
            onClick={() => onNeedSelect('UNDECIDED')}
            className="flex items-center space-x-2 text-mp-gray-600 hover:text-mp-blue transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>🤔 Não sei qual escolher</span>
          </button>
          
          <div className="w-px h-4 bg-mp-gray-300"></div>
          
          <button className="text-mp-blue hover:text-mp-blue/80 transition-colors">
            💬 Falar com especialista
          </button>
        </div>
      </div>

      {/* Quick quiz option */}
      {selectedNeed === 'UNDECIDED' && (
        <div className="mt-4 p-4 bg-mp-blue/5 border border-mp-blue/20 rounded-lg">
          <div className="text-center">
            <div className="text-sm font-medium text-mp-blue mb-2">
              ⚡ Quiz rápido de 2 minutos
            </div>
            <div className="text-xs text-mp-gray-600 mb-3">
              Responda algumas perguntas e descubra o produto ideal para você
            </div>
            <button 
              onClick={() => onNeedSelect('QUIZ')}
              className="bg-mp-blue text-white text-sm px-4 py-2 rounded-lg hover:bg-mp-blue/90 transition-colors"
            >
              🚀 Começar quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
