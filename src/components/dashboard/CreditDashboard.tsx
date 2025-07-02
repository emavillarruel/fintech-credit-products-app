'use client';

import React, { useState, useEffect } from 'react';
import { DashboardData } from '@/types/credit';
import { mockDashboardData } from '@/utils/mockData';
import { MPNavigation } from './MPNavigation';
import { StatusSection } from './StatusSection';
import { NeedSelector } from './NeedSelector';
import { RecommendationCard } from './RecommendationCard';
import { QuickActions } from './QuickActions';
import { ProactiveWidget } from './ProactiveWidget';

interface CreditDashboardProps {
  initialData?: DashboardData;
}

export const CreditDashboard: React.FC<CreditDashboardProps> = ({ 
  initialData = mockDashboardData 
}) => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialData);
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [showProactiveWidget, setShowProactiveWidget] = useState(true);

  // Simula detecção proativa de necessidades
  useEffect(() => {
    // Em produção, aqui seria chamada para API de análise contextual
    setTimeout(() => {
      if (dashboardData.proactiveInsights.length > 0) {
        setShowProactiveWidget(true);
      }
    }, 2000);
  }, [dashboardData]);

  const handleNeedSelection = (needType: string) => {
    setSelectedNeed(needType);
    // Aqui seria disparada análise de recomendação baseada na necessidade
    console.log('Need selected:', needType);
  };

  const handleProactiveAction = (action: string) => {
    console.log('Proactive action:', action);
    // Implementar ações do widget proativo
  };

  return (
    <div className="min-h-screen bg-mp-gray-50">
      {/* Navigation Header */}
      <MPNavigation activeTab="credito" />
      
      {/* Main Dashboard Content */}
      <main className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header Section */}
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-xl font-semibold text-mp-gray-700 mb-1">
            🎯 Encontre seu crédito ideal
          </h1>
          <p className="text-sm text-mp-gray-400">
            Recomendações personalizadas para você
          </p>
        </div>

        {/* Status Atual Section */}
        <StatusSection 
          user={dashboardData.user}
          currentProducts={dashboardData.currentProducts}
          availableProducts={dashboardData.availableProducts}
        />

        {/* Need Selector */}
        <NeedSelector 
          onNeedSelect={handleNeedSelection}
          selectedNeed={selectedNeed}
          availableProducts={dashboardData.availableProducts}
        />

        {/* Recommendation Card */}
        {dashboardData.recommendation && (
          <RecommendationCard 
            recommendation={dashboardData.recommendation}
            products={[...dashboardData.currentProducts, ...dashboardData.availableProducts]}
          />
        )}

        {/* Quick Actions */}
        <QuickActions 
          currentProducts={dashboardData.currentProducts}
          availableProducts={dashboardData.availableProducts}
        />

        {/* Educational Section */}
        <div className="px-4 py-6 border-t border-mp-gray-100">
          <h3 className="text-sm font-medium text-mp-gray-600 mb-3">
            📚 ENTENDA AS DIFERENÇAS:
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 text-left border border-mp-gray-200 rounded-lg hover:border-mp-blue transition-colors">
              <div className="text-xs font-medium text-mp-blue">🔍 LC vs Empréstimo</div>
              <div className="text-xs text-mp-gray-500 mt-1">Compare lado a lado</div>
            </button>
            
            <button className="p-3 text-left border border-mp-gray-200 rounded-lg hover:border-mp-blue transition-colors">
              <div className="text-xs font-medium text-mp-blue">📊 Simulador</div>
              <div className="text-xs text-mp-gray-500 mt-1">Calcule custos</div>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            <button className="p-3 text-left border border-mp-gray-200 rounded-lg hover:border-mp-blue transition-colors">
              <div className="text-xs font-medium text-mp-blue">📱 Guia completo</div>
              <div className="text-xs text-mp-gray-500 mt-1">Aprenda mais</div>
            </button>
            
            <button className="p-3 text-left border border-mp-gray-200 rounded-lg hover:border-mp-blue transition-colors">
              <div className="text-xs font-medium text-mp-blue">💭 Dúvidas</div>
              <div className="text-xs text-mp-gray-500 mt-1">Perguntas frequentes</div>
            </button>
          </div>
        </div>

        {/* Footer spacing */}
        <div className="h-20"></div>
      </main>

      {/* Proactive Widget */}
      {showProactiveWidget && dashboardData.proactiveInsights.length > 0 && (
        <ProactiveWidget 
          insights={dashboardData.proactiveInsights}
          onAction={handleProactiveAction}
          onDismiss={() => setShowProactiveWidget(false)}
        />
      )}
    </div>
  );
};
