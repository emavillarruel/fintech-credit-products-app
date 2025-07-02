'use client';

import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

interface MPNavigationProps {
  activeTab: string;
}

export const MPNavigation: React.FC<MPNavigationProps> = ({ activeTab }) => {
  const tabs = [
    { id: 'mp', label: 'MP', icon: '💳' },
    { id: 'cartao', label: 'Cartão', icon: '💳' },
    { id: 'conta', label: 'Conta', icon: '🏦' },
    { id: 'credito', label: 'CRÉDITO\nIDEAL', icon: '📊', active: true },
    { id: 'premio', label: 'Prêmio', icon: '🎁' },
    { id: 'invest', label: 'Inves.', icon: '📈' },
    { id: 'mais', label: 'Mais', icon: '⋯' },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="bg-white border-b border-mp-gray-100 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <Menu className="w-5 h-5 text-mp-gray-500" />
            <span className="text-lg font-semibold text-mp-blue">Mercado Pago</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-mp-gray-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-mp-orange rounded-full"></div>
            </div>
            <User className="w-5 h-5 text-mp-gray-500" />
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-white border-b border-mp-gray-100">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between px-2 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex flex-col items-center justify-center px-2 py-2 min-w-[50px] rounded-lg transition-all duration-200 ${
                  tab.id === activeTab
                    ? 'bg-mp-blue/10 text-mp-blue'
                    : 'text-mp-gray-400 hover:text-mp-gray-600'
                }`}
              >
                <span className="text-sm mb-1">{tab.icon}</span>
                <span className={`text-xs leading-tight text-center ${
                  tab.id === activeTab ? 'font-medium' : 'font-normal'
                }`}>
                  {tab.label}
                </span>
                {tab.id === activeTab && (
                  <div className="w-full h-0.5 bg-mp-blue rounded-full mt-1"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sub-navigation for Credit Section */}
      {activeTab === 'credito' && (
        <nav className="bg-white border-b border-mp-gray-100">
          <div className="max-w-md mx-auto px-4 py-2">
            <div className="text-xs text-mp-gray-500 mb-2">
              Home &gt; Crédito Ideal
            </div>
            
            <div className="flex space-x-4">
              {[
                { id: 'principal', label: '🏠 Principal', active: true },
                { id: 'comparar', label: '📊 Comparar', active: false },
                { id: 'simular', label: '💰 Simular', active: false },
                { id: 'ajuda', label: '❓ Ajuda', active: false },
              ].map((subTab) => (
                <button
                  key={subTab.id}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${
                    subTab.active
                      ? 'bg-mp-blue text-white'
                      : 'text-mp-gray-500 hover:text-mp-blue'
                  }`}
                >
                  {subTab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
