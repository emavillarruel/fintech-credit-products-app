'use client';

import React, { useState, useEffect } from 'react';
import { ProactiveInsight } from '@/types/credit';
import { X, Minimize2, TrendingUp, AlertTriangle, Lightbulb, Info } from 'lucide-react';

interface ProactiveWidgetProps {
  insights: ProactiveInsight[];
  onAction: (action: string) => void;
  onDismiss: () => void;
}

export const ProactiveWidget: React.FC<ProactiveWidgetProps> = ({
  insights,
  onAction,
  onDismiss
}) => {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar widget após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Rotacionar insights a cada 10 segundos
  useEffect(() => {
    if (insights.length > 1) {
      const interval = setInterval(() => {
        setCurrentInsightIndex((prev) => (prev + 1) % insights.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [insights.length]);

  if (!isVisible || insights.length === 0) return null;

  const currentInsight = insights[currentInsightIndex];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'OPPORTUNITY': return TrendingUp;
      case 'WARNING': return AlertTriangle;
      case 'EDUCATION': return Lightbulb;
      default: return Info;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'OPPORTUNITY': return 'credito-success';
      case 'WARNING': return 'credito-warning';
      case 'EDUCATION': return 'credito-info';
      default: return 'mp-blue';
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className={`bg-${getInsightColor(currentInsight.type)} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}
        >
          <TrendingUp className="w-5 h-5" />
          {currentInsight.savings && (
            <div className="absolute -top-2 -right-2 bg-credito-warning text-white text-xs px-2 py-1 rounded-full">
              R$ {currentInsight.savings}
            </div>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
      <div className={`bg-white border-2 border-${getInsightColor(currentInsight.type)} rounded-t-xl shadow-2xl animate-slide-up`}>
        {/* Header */}
        <div className={`bg-${getInsightColor(currentInsight.type)}/10 px-4 py-3 flex items-center justify-between border-b border-${getInsightColor(currentInsight.type)}/20`}>
          <div className="flex items-center space-x-3">
            <div className={`p-2 bg-${getInsightColor(currentInsight.type)}/20 rounded-lg`}>
              {React.createElement(getInsightIcon(currentInsight.type), {
                className: `w-4 h-4 text-${getInsightColor(currentInsight.type)}`
              })}
            </div>
            <div>
              <h4 className={`text-sm font-semibold text-${getInsightColor(currentInsight.type)}`}>
                🤖 Assistente de Crédito
              </h4>
              <span className="text-xs text-mp-gray-500">
                {currentInsight.type === 'OPPORTUNITY' ? 'Oportunidade detectada' : 'Dica para você'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 text-mp-gray-400 hover:text-mp-gray-600 transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onDismiss}
              className="p-1 text-mp-gray-400 hover:text-mp-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className={`text-sm font-semibold text-${getInsightColor(currentInsight.type)} mb-2`}>
            {currentInsight.title}
          </h3>
          
          <p className="text-sm text-mp-gray-700 mb-3 leading-relaxed">
            {currentInsight.description}
          </p>

          {/* Savings highlight */}
          {currentInsight.savings && (
            <div className="bg-credito-success/10 border border-credito-success/20 rounded-lg p-3 mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">💰</span>
                <div>
                  <div className="text-sm font-semibold text-credito-success">
                    Economia: R$ {currentInsight.savings}
                  </div>
                  <div className="text-xs text-credito-success/80">
                    Em juros comparado ao método atual
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2">
            {currentInsight.action && (
              <button
                onClick={() => onAction(currentInsight.action!.target)}
                className={`flex-1 bg-${getInsightColor(currentInsight.type)} text-white text-sm font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity`}
              >
                {currentInsight.action.label}
              </button>
            )}
            
            <button
              onClick={onDismiss}
              className="px-4 py-2 border border-mp-gray-300 text-mp-gray-600 text-sm rounded-lg hover:border-mp-gray-400 transition-colors"
            >
              ❌ AGORA NÃO
            </button>
            
            <button
              onClick={() => onAction('explain')}
              className="px-4 py-2 border border-mp-gray-300 text-mp-gray-600 text-sm rounded-lg hover:border-mp-gray-400 transition-colors"
            >
              🤔 EXPLICAR
            </button>
          </div>

          {/* Multiple insights indicator */}
          {insights.length > 1 && (
            <div className="flex justify-center mt-3 space-x-1">
              {insights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInsightIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentInsightIndex 
                      ? `bg-${getInsightColor(currentInsight.type)}` 
                      : 'bg-mp-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
