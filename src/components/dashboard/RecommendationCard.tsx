'use client';

import React, { useState } from 'react';
import { CreditRecommendation, CreditProduct } from '@/types/credit';
import { Target, TrendingUp, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: CreditRecommendation;
  products: CreditProduct[];
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  products
}) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const recommendedProduct = products.find(p => p.id === recommendation.productId);
  
  if (!recommendedProduct) return null;

  const getProductIcon = (type: string) => {
    switch (type) {
      case 'LC': return '💳';
      case 'PL': return '💵';
      case 'BNPL': return '🛒';
      default: return '📊';
    }
  };

  const getProductColor = (type: string) => {
    switch (type) {
      case 'LC': return 'credito-lc';
      case 'PL': return 'credito-pl';
      case 'BNPL': return 'credito-bnpl';
      default: return 'mp-blue';
    }
  };

  return (
    <section className="px-4 mb-6">
      <div className="bg-white border border-mp-gray-200 rounded-xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-credito-success/10 to-credito-info/10 p-4 border-b border-mp-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className={`p-2 bg-${getProductColor(recommendedProduct.type)}/10 rounded-lg`}>
              <Target className={`w-5 h-5 text-${getProductColor(recommendedProduct.type)}`} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-mp-gray-700">
                🎯 Para você que quer ter dinheiro disponível
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-lg">{getProductIcon(recommendedProduct.type)}</span>
                <span className="text-lg font-bold text-mp-gray-800">
                  RECOMENDAMOS: {recommendedProduct.name.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          
          {/* Match percentage */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white/50 rounded-full h-2">
              <div 
                className={`h-2 bg-${getProductColor(recommendedProduct.type)} rounded-full transition-all duration-1000`}
                style={{ width: `${recommendation.matchPercentage}%` }}
              ></div>
            </div>
            <span className={`text-sm font-bold text-${getProductColor(recommendedProduct.type)}`}>
              ⭐ {recommendation.matchPercentage}% ideal para você
            </span>
          </div>
        </div>

        {/* Reasons */}
        <div className="p-4">
          <h4 className="text-sm font-semibold text-mp-gray-700 mb-3 flex items-center">
            <CheckCircle2 className="w-4 h-4 text-credito-success mr-2" />
            POR QUE?
          </h4>
          
          <div className="space-y-2 mb-4">
            {recommendation.reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-credito-success mt-1">✅</span>
                <span className="text-xs text-mp-gray-600 leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>

          {/* Benefits destacados */}
          {recommendation.benefits && recommendation.benefits.length > 0 && (
            <div className="bg-credito-success/5 border border-credito-success/20 rounded-lg p-3 mb-4">
              <h5 className="text-xs font-semibold text-credito-success mb-2">
                💰 BENEFÍCIOS PARA VOCÊ:
              </h5>
              <div className="space-y-1">
                {recommendation.benefits.map((benefit, index) => (
                  <div key={index} className="text-xs text-credito-success flex items-start space-x-2">
                    <span>💎</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Simulação resumida */}
          <div className="bg-mp-gray-50 rounded-lg p-3 mb-4">
            <h5 className="text-xs font-semibold text-mp-gray-700 mb-2 flex items-center">
              <Calculator className="w-4 h-4 mr-2" />
              💰 PARA VOCÊ ESPECIFICAMENTE:
            </h5>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="text-mp-gray-500">Valor disponível:</div>
                <div className="font-semibold text-mp-gray-700">
                  R$ {recommendation.simulation.amount.toLocaleString()}
                </div>
              </div>
              
              <div>
                <div className="text-mp-gray-500">Taxa personalizada:</div>
                <div className="font-semibold text-credito-success">
                  {recommendedProduct.rate.personalizedRate || recommendedProduct.rate.monthly}% a.m.
                </div>
              </div>
              
              {recommendation.simulation.monthlyPayment && (
                <>
                  <div>
                    <div className="text-mp-gray-500">Exemplo 12x:</div>
                    <div className="font-semibold text-mp-gray-700">
                      R$ {recommendation.simulation.monthlyPayment}/mês
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-mp-gray-500">Total:</div>
                    <div className="font-semibold text-mp-gray-700">
                      R$ {recommendation.simulation.totalCost.toLocaleString()}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="w-full bg-mp-gray-100 text-mp-blue text-sm font-medium py-3 rounded-lg hover:bg-mp-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Calculator className="w-4 h-4" />
              <span>📊 VER COMPARAÇÃO COMPLETA</span>
            </button>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-mp-blue text-white text-sm font-medium py-3 rounded-lg hover:bg-mp-blue/90 transition-colors flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>✅ CONTINUAR COM EMPRÉSTIMO</span>
              </button>
              
              <button className="px-4 py-3 border border-mp-gray-300 text-mp-gray-600 text-sm rounded-lg hover:border-mp-gray-400 transition-colors">
                🔄 VER OUTRAS OPÇÕES
              </button>
            </div>
          </div>

          {/* Detailed comparison */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-mp-gray-100">
              <div className="bg-mp-blue/5 border border-mp-blue/20 rounded-lg p-3">
                <div className="text-xs font-medium text-mp-blue mb-2">
                  💡 RECOMENDAÇÃO PERSONALIZADA:
                </div>
                <div className="text-xs text-mp-gray-600">
                  Para R$ 5.000, empréstimo é R$ 164/mês mais barato que combinar LC + cartão
                </div>
                <button className="mt-3 bg-mp-blue text-white text-xs px-4 py-2 rounded-lg hover:bg-mp-blue/90 transition-colors flex items-center space-x-2">
                  <span>📱 PEDIR EMPRÉSTIMO AGORA</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
