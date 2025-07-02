'use client';

import React from 'react';
import { CreditProduct, UserProfile } from '@/types/credit';
import { TrendingUp, CreditCard, DollarSign } from 'lucide-react';

interface StatusSectionProps {
  user: UserProfile;
  currentProducts: CreditProduct[];
  availableProducts: CreditProduct[];
}

export const StatusSection: React.FC<StatusSectionProps> = ({
  user,
  currentProducts,
  availableProducts
}) => {
  // Encontrar linha de crédito ativa
  const activeLc = currentProducts.find(p => p.type === 'LC' && p.status === 'ACTIVE');
  
  // Encontrar empréstimo pré-aprovado
  const preApprovedPl = availableProducts.find(p => p.type === 'PL' && p.status === 'AVAILABLE');

  const getScoreColor = (level: string) => {
    switch (level) {
      case 'EXCELLENT': return 'text-credito-success';
      case 'VERY_GOOD': return 'text-credito-success';
      case 'GOOD': return 'text-credito-info';
      case 'FAIR': return 'text-credito-warning';
      default: return 'text-credito-danger';
    }
  };

  const getScoreLabel = (level: string) => {
    switch (level) {
      case 'EXCELLENT': return 'Excelente';
      case 'VERY_GOOD': return 'Muito Bom';
      case 'GOOD': return 'Bom';
      case 'FAIR': return 'Regular';
      default: return 'Baixo';
    }
  };

  return (
    <section className="px-4 mb-6">
      {/* Status Card */}
      <div className="bg-gradient-to-r from-mp-blue to-mp-lightBlue rounded-xl p-4 text-white mb-4">
        <h2 className="text-sm font-medium opacity-90 mb-3">📊 SEU STATUS ATUAL:</h2>
        
        <div className="space-y-3">
          {/* Linha de Crédito */}
          {activeLc && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Linha Crédito:</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">
                  R$ {activeLc.amount.available.toLocaleString()} disponível
                </div>
                <div className="text-xs opacity-75">
                  de R$ {activeLc.amount.total.toLocaleString()}
                </div>
              </div>
            </div>
          )}
          
          {/* Empréstimo Pré-aprovado */}
          {preApprovedPl && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm">Empréstimo:</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">
                  Pré-aprovado até R$ {preApprovedPl.amount.available.toLocaleString()}
                </div>
                <div className="text-xs opacity-75">
                  Taxa personalizada {preApprovedPl.rate.personalizedRate}%
                </div>
              </div>
            </div>
          )}
          
          {/* Score */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Score:</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold">
                {getScoreLabel(user.scoreLevel)} ({user.score} pontos)
              </div>
              <div className="text-xs opacity-75">
                Cliente há {new Date().getFullYear() - new Date(user.customerSince).getFullYear()} anos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Progress - para LC ativa */}
      {activeLc && (
        <div className="bg-white border border-mp-gray-100 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-mp-gray-600">Uso da Linha de Crédito</span>
            <span className="text-xs text-mp-gray-500">
              {Math.round((activeLc.amount.used / activeLc.amount.total) * 100)}% usado
            </span>
          </div>
          
          <div className="w-full bg-mp-gray-100 rounded-full h-2 mb-2">
            <div 
              className="bg-mp-blue h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${(activeLc.amount.used / activeLc.amount.total) * 100}%` 
              }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-mp-gray-500">
            <span>R$ {activeLc.amount.used.toLocaleString()} usado</span>
            <span>R$ {activeLc.amount.available.toLocaleString()} disponível</span>
          </div>
          
          {/* Dica contextual */}
          {(activeLc.amount.used / activeLc.amount.total) > 0.8 && (
            <div className="mt-3 p-2 bg-credito-warning/10 border border-credito-warning/20 rounded-lg">
              <p className="text-xs text-credito-warning">
                ⚠️ Limite quase no máximo. Considere empréstimo para compras maiores.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Benefícios do perfil */}
      <div className="bg-credito-success/10 border border-credito-success/20 rounded-lg p-3">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm">✅</span>
          <span className="text-xs font-medium text-credito-success">Perfil Excelente</span>
        </div>
        
        <div className="text-xs text-mp-gray-600 space-y-1">
          <div>• Pagamentos sempre em dia</div>
          <div>• Taxas personalizadas disponíveis</div>
          <div>• Aprovações mais rápidas</div>
        </div>
      </div>
    </section>
  );
};
