'use client';

import React, { useState, useEffect } from 'react';
import { DashboardData, CreditProduct, UserProfile } from '@/types/credit';
import { mockDashboardData } from '@/utils/mockData';
import { StatusSection } from '../Dashboard/StatusSection';
import { NeedSelector } from '../Dashboard/NeedSelector';
import { RecommendationCard } from '../Dashboard/RecommendationCard';
import { QuickActions } from '../Dashboard/QuickActions';
import { ProactiveWidget } from '../Dashboard/ProactiveWidget';
import { TrendingUp, AlertTriangle, Lightbulb, Calculator, BookOpen } from 'lucide-react';

interface AdvancedCreditDashboardProps {
  initialData?: DashboardData;
  version?: 'A' | 'B' | 'C';
}

export const AdvancedCreditDashboard: React.FC<AdvancedCreditDashboardProps> = ({ 
  initialData = mockDashboardData,
  version = 'A'
}) => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialData);
  const [selectedNeed, setSelectedNeed] = useState<string | null>('HAVE_MONEY');
  const [showProactiveWidget, setShowProactiveWidget] = useState(false);
  const [activeEducationalSection, setActiveEducationalSection] = useState<string | null>(null);
  const [userBehavior, setUserBehavior] = useState({
    timeOnPage: 0,
    interactionCount: 0,
    sectionsViewed: new Set<string>()
  });

  // Análisis de comportamiento avanzado
  useEffect(() => {
    const timer = setInterval(() => {
      setUserBehavior(prev => ({
        ...prev,
        timeOnPage: prev.timeOnPage + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // IA Proactiva avanzada
  useEffect(() => {
    // Mostrar widget proactivo basado en comportamiento
    if (userBehavior.timeOnPage > 5 && userBehavior.interactionCount > 2) {
      setShowProactiveWidget(true);
    }
  }, [userBehavior]);

  const handleNeedSelection = (needType: string) => {
    setSelectedNeed(needType);
    setUserBehavior(prev => ({
      ...prev,
      interactionCount: prev.interactionCount + 1,
      sectionsViewed: prev.sectionsViewed.add('need-selector')
    }));
  };

  const handleEducationalInteraction = (section: string) => {
    setActiveEducationalSection(section);
    setUserBehavior(prev => ({
      ...prev,
      interactionCount: prev.interactionCount + 1,
      sectionsViewed: prev.sectionsViewed.add('educational')
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Dashboard Content */}
      <main className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header Section */}
        <div className="px-4 pt-6 pb-4" style={{ background: 'linear-gradient(135deg, #3483FA, #4285F4)' }}>
          <h1 className="text-xl font-semibold text-white mb-1">
            🎯 Encontre seu crédito ideal
          </h1>
          <p className="text-sm text-white opacity-80">
            Recomendações personalizadas para você
          </p>
          
          {/* Indicador de inteligência */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs text-white opacity-90">
              IA analisando seu perfil • {userBehavior.sectionsViewed.size} seções exploradas
            </span>
          </div>
        </div>

        {/* Status Atual Section */}
        <StatusSection 
          user={dashboardData.user}
          currentProducts={dashboardData.currentProducts}
          availableProducts={dashboardData.availableProducts}
        />

        {/* Need Selector Avançado */}
        <section className="px-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              ❓ O que você precisa hoje?
            </h2>
            <div className="text-xs text-gray-500">
              {selectedNeed ? '✅ Selecionado' : '👆 Escolha uma opção'}
            </div>
          </div>

          <NeedSelector 
            onNeedSelect={handleNeedSelection}
            selectedNeed={selectedNeed}
            availableProducts={dashboardData.availableProducts}
          />

          {/* Análise comportamental */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                🧠 IA detectou seu perfil: <strong>Planejador</strong>
              </span>
              <button className="text-mp-blue text-xs hover:underline">
                Como assim?
              </button>
            </div>
          </div>
        </section>

        {/* Recommendation Card com IA */}
        {dashboardData.recommendation && (
          <RecommendationCard 
            recommendation={dashboardData.recommendation}
            products={[...dashboardData.currentProducts, ...dashboardData.availableProducts]}
          />
        )}

        {/* Simulador Inteligente */}
        <section className="px-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
              <Calculator className="w-4 h-4 mr-2" />
              💻 SIMULADOR INTELIGENTE
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">
                  Baseado no seu perfil, recomendamos:
                </div>
                <div className="text-sm font-medium text-blue-600">
                  R$ 5.000 em 12x de R$ 464
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 py-2 px-3 bg-blue-600 text-white text-sm rounded-lg">
                  📊 Simular outros valores
                </button>
                <button className="flex-1 py-2 px-3 border border-blue-600 text-blue-600 text-sm rounded-lg">
                  🔄 Comparar produtos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <QuickActions 
          currentProducts={dashboardData.currentProducts}
          availableProducts={dashboardData.availableProducts}
        />

        {/* Seção Educacional Avançada */}
        <section className="px-4 mb-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3 flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            📚 CENTRO DE APRENDIZADO IA
          </h3>
          
          <div className="space-y-3">
            {/* Conteúdo personalizado baseado no perfil */}
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-green-600 mt-1" />
                <div>
                  <div className="text-xs font-medium text-green-600">
                    💡 Dica personalizada para você
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Como planejador, você pode economizar R$ 200/mês organizando seus créditos
                  </div>
                </div>
              </div>
            </div>

            {/* Botões educacionais */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'comparison', label: '🔍 LC vs Empréstimo', desc: 'Compare lado a lado' },
                { id: 'simulator', label: '📊 Simulador', desc: 'Calcule custos' },
                { id: 'guide', label: '📱 Guia completo', desc: 'Aprenda mais' },
                { id: 'faq', label: '💭 Dúvidas', desc: 'Perguntas frequentes' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleEducationalInteraction(item.id)}
                  className={`p-3 text-left border rounded-lg transition-all ${
                    activeEducationalSection === item.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-xs font-medium text-blue-600">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics para o usuário */}
        <section className="px-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              📊 SEU PERFIL FINANCEIRO
            </h3>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-white rounded-lg">
                <div className="text-lg font-bold text-green-600">92%</div>
                <div className="text-xs text-gray-600">Compatibilidade</div>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <div className="text-lg font-bold text-blue-600">R$ 180</div>
                <div className="text-xs text-gray-600">Economia potencial</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-20"></div>
      </main>

      {/* Proactive Widget Avançado */}
      {showProactiveWidget && (
        <ProactiveWidget 
          insights={dashboardData.proactiveInsights}
          onAction={(action) => console.log('Proactive action:', action)}
          onDismiss={() => setShowProactiveWidget(false)}
        />
      )}
    </div>
  );
}; 