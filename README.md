# 🎯 Crédito Ideal - Dashboard Principal

## Visão Geral
Dashboard principal da seção "Crédito Ideal" integrada no aplicativo Mercado Pago. Implementa a estratégia de entendimento e recomendação personalizada de produtos de crédito.

## Funcionalidades Implementadas

### 🏠 Dashboard Principal
- **Status contextual**: Mostra produtos atuais (LC ativa, empréstimos pré-aprovados)
- **Seletor de necessidades**: 3 opções principais + quiz para indecisos
- **Recomendação personalizada**: IA sugere produto ideal com justificativas
- **Ações rápidas**: Botões para tarefas comuns
- **Widget proativo**: Detecta oportunidades de economia

### 📊 Componentes Principais
- `CreditDashboard`: Componente principal orquestrando toda a experiência
- `MPNavigation`: Navegação integrada do Mercado Pago
- `StatusSection`: Status atual dos produtos do usuário
- `NeedSelector`: Seleção de necessidade com recomendações visuais
- `RecommendationCard`: Cartão de recomendação com justificativas
- `QuickActions`: Ações rápidas contextuais
- `ProactiveWidget`: Widget de insights proativos

### 🎨 Design System
- Cores oficiais do Mercado Pago
- Layout mobile-first (max-width: 448px)
- Animações suaves e feedback visual
- Acessibilidade com foco e contraste

## Estrutura do Projeto
```
src/
├── components/
│   └── Dashboard/           # Componentes do dashboard
├── types/                   # TypeScript types
├── utils/                   # Utilitários e mock data
└── app/                     # Next.js app directory
```

## Tecnologias
- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para styling
- **Lucide React** para ícones
- **Framer Motion** para animações

## Executar o Projeto
```bash
npm install
npm run dev
```

## Próximos Passos
1. Integração com APIs reais
2. Testes unitários
3. Implementação do quiz de diagnóstico
4. Comparador visual LC vs PL
5. Simulador interativo
