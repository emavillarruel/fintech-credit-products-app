# Product Design Requirements (PDR)
## Aplicación: "Seu Crédito Ideal" - Entendimento + Recomendação

---

### **🎯 OBJETIVO CENTRAL**
> **"Generar una experiencia que ayude al usuario a entender cual es el mejor producto de crédito para él"**

**Visión Amplia:** *"Ser o produto onde cada pessoa encontra o crédito certo, no momento certo, do jeito mais simples."*

---

### **1. EXECUTIVE SUMMARY**

**Core Focus:** Crear LA aplicación que elimine para siempre la confusión sobre productos de crédito, convirtiendo usuarios confundidos en usuarios seguros de su decisión.

**Propuesta de Valor:**
- **📚 ENTENDIMENTO:** Explica diferencias LC vs PL vs BNPL de forma cristalina
- **🎯 RECOMENDAÇÃO:** IA personalizada basada en perfil + histórico
- **📊 CLARIDADE:** Visualización simple de taxas, prazos, condições
- **⚡ DIAGNÓSTICO:** "Quero investir no negócio" → Produto ideal instantâneo
- **🔍 COMPARAÇÃO:** Side-by-side explicativo adaptado al usuario

**Problema Crítico Resuelto:** 35% usuarios LC no saben para qué sirve → 0% usuarios eligen producto sin entender por qué es ideal para ellos.

---

### **2. CONTEXTO - FOCO EN ENTENDIMENTO**

#### **2.1 Pain Points Específicos de Comprensión:**

##### **🔴 CONFUSÃO PRODUTOS:**
- **35% LC users:** "No sé para qué sirve mi línea de crédito"
- **Diferencias invisibles:** LC vs PL parecen iguales al usuario
- **BNPL mal entendido:** "Es como tarjeta de crédito pero no entiendo diferencia"
- **Términos técnicos:** "Domiciliação", "IOF", "CET" causan abandono inmediato

##### **🔴 FALTA RECOMENDAÇÃO PERSONALIZADA:**
- **Recomendaciones genéricas:** No consideran perfil específico usuario
- **Sin histórico:** IA no usa datos ML/MP para personalizar
- **Context-blind:** "Quero investir no negócio" debería → produto empresarial
- **One-size-fits-all:** Misma recomendación para diferentes necesidades

##### **🔴 INFORMACIÓN OPACA:**
- **Taxas ocultas:** IOF aparece después, no antes
- **Prazos confusos:** "12x" sin explicar impacto total
- **Condições técnicas:** T&C bancarios que nadie entiende
- **Sin comparativo:** No explica por qué A es mejor que B para SU caso

##### **🔴 DIAGNÓSTICO INEXISTENTE:**
- **Sin discovery:** Usuario debe saber qué busca
- **Necesidades no mapeadas:** "Emergencia" vs "Inversión" → productos diferentes
- **Intent detection zero:** No detecta "quiero comprar X" vs "necesito dinero libre"

---

### **3. SOLUCIÓN - ENTENDIMENTO + RECOMENDAÇÃO CORE**

#### **3.1 Funcionalidades Core - 100% Enfocadas en Comprensión**

##### **📚 EXPLICADOR INTELIGENTE DE PRODUTOS**

**Diferenciador LC vs PL - Cristalino:**
```
LINHA DE CRÉDITO:
✅ "Para você que compra frequentemente"
✅ "Paga só o que usar + só quando usar"
✅ "Ideal para: compras parceladas no ML"
✅ "Funciona como: dinheiro sempre disponível"

EMPRÉSTIMO PESSOAL:
✅ "Para você que precisa de uma quantia específica"
✅ "Recebe tudo de uma vez + parcelas fixas"
✅ "Ideal para: investir no negócio, emergência médica"
✅ "Funciona como: empréstimo tradicional mas mais simples"
```

**Visual Explicativo Dinâmico:**
- **Simulador lado-a-lado:** LC vs PL para SUA necessidade específica
- **Timeline visual:** Como funciona cada produto mês a mês
- **Iconografia clara:** Símbolos universais + cores diferenciadas
- **Micro-animações:** Mostram fluxo de dinheiro entrada/saída

##### **🎯 RECOMENDADOR PERSONALIZADO INTELIGENTE**

**Diagnóstico Rápido de Necessidade:**
```
Perguntas Inteligentes:
1. "O que você quer fazer?" → [Comprar algo | Ter dinheiro livre | Investir no negócio]
2. "Quando precisa?" → [Agora | Este mês | Nos próximos meses]
3. "Como prefere pagar?" → [Parcelas fixas | Flexível conforme uso]
4. "Já usa crédito no ML?" → [Contexto histórico]
```

**IA Personalizada com Histórico:**
- **Financial Advisor enhanced:** Analisa padrão compras ML/MP
- **Perfil comportamental:** Compra frequente vs esporádica
- **Contexto financeiro:** Renda estimada + gastos típicos
- **Necessidade inferida:** "Investir no negócio" → produtos empresariais

**Output da Recomendação:**
```
"Para você que [perfil específico], recomendamos [produto]:

PORQUE:
✅ Seu padrão de compras mostra que [evidência]
✅ Para sua necessidade '[diagnóstico]', este produto oferece [benefício específico]
✅ Baseado no seu histórico, você economizará [valor] vs outras opções

COMO FUNCIONA PARA VOCÊ:
📊 Visualização personalizada com seus números
💰 Custos finais para sua situação específica
📅 Timeline adaptada ao seu perfil de pagamento"
```

##### **📊 CLARIDADE VISUAL RADICAL**

**Explicação Visual de Taxas:**
- **Taxa real vs taxa nominal:** Gráfico que mostra diferença
- **IOF explicado:** "Esta taxa governa federal de 0.38% por dia"
- **CET visual:** "Custo total = valor + juros + taxas = R$ X"
- **Comparativo automático:** "LC para você: 2.5%/mês | PL para você: 1.8%/mês"

**Timeline Financeiro Personal:**
- **Projeção mês a mês:** Quanto vai pagar cada mês
- **Impacto na renda:** "Comprometimento: 15% da sua renda estimada"
- **Payoff visualization:** Quando termina de pagar + valor final
- **Scenarios:** "Se pagar antecipado, economiza R$ X"

**Conditions & Terms Humanizados:**
- **T&C em linguagem natural:** Zero juridiquês
- **FAQ preventiva:** Principais dúvidas respondidas antes de surgir
- **Risk disclosure claro:** "Se não pagar, pode acontecer [X,Y,Z]"

#### **3.2 User Experience - Focused Learning Journey**

##### **🚀 JORNADA DE DESCOBERTA**

**Fase 1: Diagnóstico (30 segundos)**
```
1. "Olá! Vamos encontrar o crédito ideal para você"
2. Perguntas visuais simples sobre necessidade
3. Análise automática perfil ML/MP
4. "Entendemos sua situação: [summary]"
```

**Fase 2: Educação (60 segundos)**
```
1. "Para sua necessidade, existem 2 opções principais:"
2. Explicação visual LC vs PL
3. "Para você especificamente, recomendamos [X] porque..."
4. Simulador lado-a-lado personalizado
```

**Fase 3: Compreensão (30 segundos)**
```
1. "Vamos confirmar que você entendeu:"
2. Quiz rápido sobre escolha
3. "Correto! Você escolheu [produto] porque [razões]"
4. Momento de pausa: "Tem certeza? Pode revisar."
```

**Fase 4: Contratação (60 segundos)**
```
1. Condições finais personalizadas
2. "Resumindo: você vai [ação] e vai pagar [valor específico]"
3. Confirmação final educativa
4. "Parabéns! Seu [produto] está ativo. Veja como usar."
```

---

### **4. FUNCIONALIDADES DETALHADAS**

#### **4.1 Core MVP - Sistema de Entendimento**

##### **🧠 SMART CREDIT ADVISOR**
- **Intake inteligente:** Detecta necessidade real através de perguntas visuais
- **Profile analyzer:** Usa dados ML/MP para personalização
- **Product matcher:** Algoritmo que considera perfil + necessidade + histórico
- **Explanation engine:** Gera explicação personalizada do "por quê"

##### **📚 VISUAL EXPLAINER**
- **Difference visualizer:** LC vs PL vs BNPL com animações claras
- **Personal simulator:** Calculadora adaptada ao perfil específico
- **Cost breakdown:** Desglose visual de todos os custos
- **Timeline generator:** Projeção mês a mês personalizada

##### **�� RECOMMENDATION ENGINE**
```
INPUT: [Necessidade + Perfil + Histórico + Contexto]
PROCESS: [IA Analysis + Risk Assessment + Optimization]
OUTPUT: [Produto ideal + Explicação personalizada + Simulação específica]
```

##### **✅ COMPREHENSION VALIDATOR**
- **Understanding quiz:** Verifica se usuário realmente entendeu
- **Decision confidence:** Mede certeza da escolha
- **Explanation on-demand:** Verdichat para qualquer dúvida
- **Pause moments:** Oportunidades de reconsiderar

#### **4.2 Advanced Features - Recomendação Superior**

##### **🔍 ADVANCED PROFILING**
- **Behavioral analysis:** Padrão de compras + pagamentos
- **Life stage detection:** Estudante, profissional, aposentado
- **Business context:** Pessoa física vs jurídica
- **Risk profile:** Conservador vs agressivo

##### **💡 PROACTIVE INSIGHTS**
- **Need anticipation:** "Baseado no seu padrão, você pode precisar de..."
- **Optimization suggestions:** "Considerando sua situação, você poderia..."
- **Education moments:** "Você sabia que para sua necessidade..."
- **Market updates:** "Nova opção disponível ideal para seu perfil"

##### **📱 ONGOING SUPPORT**
- **Usage coaching:** "Você tem R$ X disponível, ideal para [sugestão]"
- **Payment optimization:** "Pagando hoje, você economiza R$ X"
- **Product evolution:** "Seu perfil mudou, talvez interesse..."

---

### **5. TECH ARCHITECTURE - FOCUSED**

#### **5.1 AI-Powered Core**
```
User Input → Profile Enricher → Need Analyzer → Product Matcher → Explanation Generator → Visual Renderer
```

#### **5.2 Key Integrations**
- **Financial Advisor SDK:** Para recomendações base
- **Verdichat API:** Para explicações humanizadas
- **ML/MP APIs:** Para dados históricos
- **Scoring services:** Para elegibilidade products

#### **5.3 Performance Requirements**
- **Recomendação:** <3 segundos da necessidade ao produto ideal
- **Explicação:** <2 segundos qualquer dúvida respondida
- **Simulação:** <1 segundo cálculos personalizados
- **Comprensão:** 95% usuários entendem escolha

---

### **6. SUCCESS METRICS - UNDERSTANDING FOCUSED**

#### **6.1 Compreensão Metrics**
- **Understanding score:** 95% usuários explicam por que escolheram produto
- **Confusion elimination:** De 35% a <5% consultas "para que serve"
- **Decision confidence:** 90% usuários "tenho certeza da minha escolha"
- **Knowledge retention:** 80% usuários lembram diferenças LC vs PL após 1 semana

#### **6.2 Recomendação Metrics**
- **Recommendation accuracy:** 95% usuários satisfeitos com produto recomendado
- **Personalization success:** 90% usuários "parecia feito para mim"
- **Historical relevance:** 85% recomendações consideram histórico apropriadamente
- **Need matching:** 95% diagnóstico correto da necessidade real

#### **6.3 Experience Metrics**
- **Time to understanding:** <2 minutos para compreender produto ideal
- **Completion rate:** 90% usuários completam jornada educativa
- **Satisfaction NPS:** >70 com processo de descoberta
- **Support reduction:** -80% tickets sobre confusão produtos

---

### **7. DEVELOPMENT PHASES**

#### **Fase 1: ENTENDIMENTO CORE (8-10 semanas)**
**Objetivo:** Usuario nunca mais confunde LC vs PL
- Explicador visual productos
- Diagnóstico rápido necessidade 
- Simulador personalizado básico
- Quiz de comprensão

**Success:** 0% confusão LC vs PL

#### **Fase 2: RECOMENDAÇÃO IA (8-10 semanas)**
**Objetivo:** Recomendação perfeita baseada em perfil
- IA personalizada com histórico ML/MP
- Explanation engine avançado
- Verdichat integrado para dúvidas
- Advanced profiling

**Success:** 95% satisfação com recomendação

#### **Fase 3: OPTIMIZATION (6-8 semanas)**
**Objetivo:** Experiência refinada e proativa
- Proactive insights
- Ongoing education
- Advanced visualizations
- Mobile optimization

**Success:** NPS >70 + <2min tempo total

---

### **8. DESIGN PRINCIPLES**

#### **8.1 Clarity First**
- **Zero ambiguity:** Cada produto tem explicação única e clara
- **Visual hierarchy:** Informação mais importante sempre destacada
- **Progressive disclosure:** Informação complexa revelada gradualmente
- **Consistent language:** Mesmos termos para mesmos conceitos

#### **8.2 Personalization Always**
- **Every explanation adapted:** "Para você que..." em toda comunicação
- **Contextual examples:** "Para sua necessidade de investir no negócio..."
- **Personal numbers:** Simulações sempre com dados reais do usuário
- **Relevant comparisons:** Somente opções adequadas ao perfil

#### **8.3 Understanding Validation**
- **Active confirmation:** "Você entendeu que...?"
- **Explain-back method:** Usuario explica escolha
- **Confidence checking:** "Quão seguro está da decisão?"
- **Support always available:** Verdichat para qualquer dúvida

---

### **9. NEXT STEPS**

1. **User research específico:** Como usuarios atualmente entendem LC vs PL
2. **IA integration discovery:** Capacidades atuais Financial Advisor + Verdichat
3. **Visual design system:** Iconografia + cores para diferenciação produtos
4. **Algoritmo recomendação:** Lógica personalização baseada em perfil
5. **Content strategy:** Scripts explicativos humanizados
6. **Prototype MVP:** Jornada completa diagnóstico → recomendação → compreensão

---

**Data:** Dezembro 2024
**Versão:** 5.0 - FOCO ENTENDIMENTO + RECOMENDAÇÃO
**Objetivo:** Eliminar confusão produtos de crédito para sempre
**Success:** Usuario sempre sabe por que escolheu determinado produto
