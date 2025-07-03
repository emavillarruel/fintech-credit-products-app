'use client';

import React, { useState } from 'react';

type NeedType = 'BUY_SPECIFIC' | 'HAVE_MONEY' | 'BUSINESS' | null;

export const SimpleDashboard: React.FC = () => {
  const [selectedNeed, setSelectedNeed] = useState<NeedType>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const needs = [
    {
      id: 'BUY_SPECIFIC' as NeedType,
      icon: '��',
      title: 'Comprar algo específico',
      description: 'Produtos, serviços, investimentos'
    },
    {
      id: 'HAVE_MONEY' as NeedType,
      icon: '💰',
      title: 'Ter dinheiro disponível',
      description: 'Quantia livre para usar como quiser'
    },
    {
      id: 'BUSINESS' as NeedType,
      icon: '🏢',
      title: 'Para meu negócio',
      description: 'Capital, equipamentos, expansão'
    }
  ];

  const getRecommendation = (need: NeedType) => {
    switch (need) {
      case 'HAVE_MONEY':
        return {
          product: 'EMPRÉSTIMO PESSOAL',
          icon: '💵',
          reasons: [
            'Você quer dinheiro livre',
            'Taxa menor que cartão',
            'Parcelas fixas = simples'
          ],
          whyNotOther: {
            title: 'Por que NÃO Linha de Crédito?',
            reasons: [
              '💳 LC é para compras frequentes',
              '💰 Empréstimo é para quantia fixa',
              '📊 Para R$ 5.000, empréstimo é mais barato'
            ]
          }
        };
      case 'BUY_SPECIFIC':
        return {
          product: 'LINHA DE CRÉDITO',
          icon: '💳',
          reasons: [
            'Para compras específicas',
            'Usa só o que precisar',
            'Disponível na hora'
          ],
          whyNotOther: {
            title: 'Por que NÃO Empréstimo?',
            reasons: [
              '💵 Empréstimo é valor fixo',
              '�� LC é flexível para compras',
              '⚡ LC libera crédito na hora'
            ]
          }
        };
      case 'BUSINESS':
        return {
          product: 'CRÉDITO EMPRESARIAL',
          icon: '🏢',
          reasons: [
            'Feito para negócios',
            'Limites maiores',
            'Condições especiais'
          ],
          whyNotOther: {
            title: 'Por que NÃO produtos pessoais?',
            reasons: [
              '🏢 Negócio precisa de mais limite',
              '📈 Condições melhores para empresa',
              '⚖️ Separar pessoa física de jurídica'
            ]
          }
        };
      default:
        return null;
    }
  };

  const recommendation = selectedNeed ? getRecommendation(selectedNeed) : null;

  // Step 1: Need Selection
  if (!selectedNeed) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Simple Header */}
        <header className="bg-mp-blue text-white text-center py-6">
          <h1 className="text-2xl font-bold">🎯 Crédito Ideal</h1>
          <p className="text-sm opacity-90 mt-1">Encontre o produto certo para você</p>
        </header>

        {/* Main Question */}
        <main className="flex-1 px-6 py-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Para que você precisa de dinheiro?
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Escolha a opção que mais combina com você
            </p>

            {/* Need Options */}
            <div className="space-y-4">
              {needs.map((need) => (
                <button
                  key={need.id}
                  onClick={() => setSelectedNeed(need.id)}
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl text-left hover:border-mp-blue hover:bg-mp-blue/5 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{need.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-mp-blue">
                        {need.title}
                      </h3>
                      <p className="text-gray-500 mt-1">{need.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Help Option */}
            <div className="mt-8 text-center">
              <button className="text-mp-blue hover:text-mp-blue/80 font-medium">
                🤔 Não sei qual escolher? Clique aqui para ajuda
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Step 2: Recommendation
  if (!showExplanation) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header with back */}
        <header className="bg-mp-blue text-white px-6 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedNeed(null)}
              className="text-white hover:text-white/80"
            >
              ← Voltar
            </button>
            <h1 className="text-xl font-bold">Recomendação para você</h1>
          </div>
        </header>

        {/* Recommendation */}
        <main className="flex-1 px-6 py-8">
          <div className="max-w-md mx-auto text-center">
            
            {/* Sparkle Effect */}
            <div className="text-6xl mb-4">✨</div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              PARA VOCÊ RECOMENDAMOS:
            </h2>

            {/* Product Card */}
            <div className="bg-gradient-to-r from-mp-blue to-mp-blue/80 text-white rounded-2xl p-8 mb-8">
              <div className="text-5xl mb-4">{recommendation?.icon}</div>
              <h3 className="text-2xl font-bold mb-6">
                {recommendation?.product}
              </h3>
              
              {/* Reasons */}
              <div className="space-y-3">
                {recommendation?.reasons.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Not Other Button */}
            <button
              onClick={() => setShowExplanation(true)}
              className="w-full py-4 border-2 border-gray-300 rounded-xl text-gray-600 font-medium mb-6 hover:border-gray-400 transition-colors"
            >
              🤔 {recommendation?.whyNotOther.title}
            </button>

            {/* Main CTA */}
            <button className="w-full bg-mp-green text-white text-xl font-bold py-6 rounded-xl hover:bg-mp-green/90 transition-colors shadow-lg">
              ✅ CONTINUAR COM {recommendation?.product}
            </button>

            {/* Secondary Option */}
            <button 
              onClick={() => setSelectedNeed(null)}
              className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700"
            >
              🔄 Ver outras opções
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Step 3: Explanation (Optional)
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-mp-blue text-white px-6 py-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowExplanation(false)}
            className="text-white hover:text-white/80"
          >
            ← Voltar
          </button>
          <h1 className="text-xl font-bold">Entenda a diferença</h1>
        </div>
      </header>

      {/* Explanation */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-gray-800">
              {recommendation?.whyNotOther.title}
            </h2>
          </div>

          {/* Explanation Points */}
          <div className="space-y-6 mb-8">
            {recommendation?.whyNotOther.reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl mt-1">{reason.split(' ')[0]}</span>
                <div>
                  <p className="text-lg text-gray-700">
                    {reason.substring(reason.indexOf(' ') + 1)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <button className="w-full bg-mp-green text-white text-xl font-bold py-6 rounded-xl hover:bg-mp-green/90 transition-colors shadow-lg">
            ✅ ENTENDI, QUERO {recommendation?.product}
          </button>

          <button 
            onClick={() => setSelectedNeed(null)}
            className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700"
          >
            🔄 Escolher outra necessidade
          </button>
        </div>
      </main>
    </div>
  );
};
