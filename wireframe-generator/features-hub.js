// Features Hub JavaScript

// Feature Modal Functions
function openFeatureModal(featureId) {
    const modal = document.getElementById('featureModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const featureData = getFeatureData(featureId);
    
    modalTitle.textContent = featureData.title;
    modalContent.innerHTML = featureData.content;
    
    modal.style.display = 'block';
}

function closeFeatureModal() {
    document.getElementById('featureModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('featureModal');
    if (event.target === modal) {
        closeFeatureModal();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFeatureModal();
    }
});

// Feature Data
function getFeatureData(featureId) {
    const features = {
        // Conceito 1: RPG Financeiro
        'achievement-system': {
            title: 'Sistema de Conquistas',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de gamificação que recompensa usuários por boas decisões financeiras através de badges, níveis e conquistas desbloqueáveis.</p>
                    
                    <h3>Funcionalidades Core</h3>
                    <ul>
                        <li><strong>Badge Engine:</strong> Sistema de badges dinâmicos baseado em ações</li>
                        <li><strong>Level System:</strong> Progressão de níveis com XP</li>
                        <li><strong>Achievement Tree:</strong> Árvore de conquistas conectadas</li>
                        <li><strong>Social Sharing:</strong> Compartilhamento de conquistas</li>
                    </ul>
                    
                    <h3>Exemplos de Badges</h3>
                    <ul>
                        <li>"Pagador em Dia" - 6 meses sem atraso</li>
                        <li>"Economizador" - Reduziu gastos 20%</li>
                        <li>"Investidor" - Primeira aplicação</li>
                        <li>"Meta Alcançada" - Completou objetivo financeiro</li>
                    </ul>
                    
                    <h3>Stack Técnico</h3>
                    <ul>
                        <li><strong>Frontend:</strong> React/Vue com animações CSS</li>
                        <li><strong>Backend:</strong> Node.js + Redis para cache</li>
                        <li><strong>Database:</strong> MongoDB para achievement data</li>
                        <li><strong>Real-time:</strong> WebSockets para notificações</li>
                    </ul>
                    
                    <h3>Métricas de Sucesso</h3>
                    <ul>
                        <li>+40% engagement no app</li>
                        <li>+25% retenção mensal</li>
                        <li>+60% completação de tarefas financeiras</li>
                    </ul>
                </div>
            `
        },
        
        'xp-calculator': {
            title: 'Calculadora de XP',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Algoritmo que converte ações financeiras em pontos de experiência, criando um sistema de progressão baseado em comportamento.</p>
                    
                    <h3>Sistema de Pontuação</h3>
                    <ul>
                        <li><strong>Pagamento em dia:</strong> 50 XP</li>
                        <li><strong>Pagamento antecipado:</strong> 100 XP</li>
                        <li><strong>Redução de gastos:</strong> 25 XP por % reduzido</li>
                        <li><strong>Meta alcançada:</strong> 500 XP</li>
                        <li><strong>Primeira aplicação:</strong> 200 XP</li>
                    </ul>
                    
                    <h3>Algoritmo Core</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function calculateXP(action, userProfile) {
  let baseXP = ACTION_XP_MAP[action.type];
  let multiplier = getUserMultiplier(userProfile);
  let streak = getStreakBonus(action, userProfile);
  
  return Math.floor(baseXP * multiplier * streak);
}</pre>
                    
                    <h3>Implementação</h3>
                    <ul>
                        <li><strong>Event Listeners:</strong> Captura ações do usuário</li>
                        <li><strong>XP Engine:</strong> Calcula pontos em tempo real</li>
                        <li><strong>Level Calculator:</strong> Converte XP em níveis</li>
                        <li><strong>Progress Tracker:</strong> Monitora progresso</li>
                    </ul>
                    
                    <h3>API Endpoints</h3>
                    <ul>
                        <li><code>POST /api/xp/calculate</code> - Calcula XP para ação</li>
                        <li><code>GET /api/user/xp</code> - Busca XP total do usuário</li>
                        <li><code>GET /api/user/level</code> - Nível atual</li>
                    </ul>
                </div>
            `
        },

        'character-evolution': {
            title: 'Evolução do Personagem',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de avatar dinâmico que evolui visualmente baseado no perfil e comportamento financeiro do usuário.</p>
                    
                    <h3>Elementos Visuais</h3>
                    <ul>
                        <li><strong>Avatar Base:</strong> Personagem inicial customizável</li>
                        <li><strong>Roupas/Acessórios:</strong> Desbloqueados por conquistas</li>
                        <li><strong>Ambiente:</strong> Casa/escritório que melhora com saúde financeira</li>
                        <li><strong>Pets/Companheiros:</strong> Desbloqueados por metas</li>
                    </ul>
                    
                    <h3>Sistema de Evolução</h3>
                    <ul>
                        <li><strong>Saúde Financeira:</strong> Afeta aparência geral</li>
                        <li><strong>Score de Crédito:</strong> Influencia qualidade dos itens</li>
                        <li><strong>Economia/Gastos:</strong> Determina acessórios</li>
                        <li><strong>Objetivos:</strong> Desbloqueiam novos ambientes</li>
                    </ul>
                    
                    <h3>Tecnologias</h3>
                    <ul>
                        <li><strong>Gráficos:</strong> SVG dinâmico ou Canvas 2D</li>
                        <li><strong>Animações:</strong> Lottie ou CSS animations</li>
                        <li><strong>Customização:</strong> Sistema modular de assets</li>
                        <li><strong>Performance:</strong> Lazy loading de assets</li>
                    </ul>
                    
                    <h3>Exemplos de Evolução</h3>
                    <ul>
                        <li>Score baixo: Personagem cansado, ambiente simples</li>
                        <li>Score médio: Roupas melhores, casa organizada</li>
                        <li>Score alto: Roupas premium, casa luxuosa, pet</li>
                    </ul>
                </div>
            `
        },

        'quest-system': {
            title: 'Sistema de Missões',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Objetivos financeiros gamificados apresentados como missões de RPG com recompensas e progressão.</p>
                    
                    <h3>Tipos de Missões</h3>
                    <ul>
                        <li><strong>Daily Quests:</strong> Tarefas diárias simples</li>
                        <li><strong>Weekly Challenges:</strong> Objetivos semanais</li>
                        <li><strong>Monthly Goals:</strong> Metas de longo prazo</li>
                        <li><strong>Epic Quests:</strong> Objetivos de vida (casa, carro)</li>
                    </ul>
                    
                    <h3>Exemplos de Missões</h3>
                    <ul>
                        <li>"Economize R$ 100 esta semana" - 200 XP</li>
                        <li>"Use o app 5 dias seguidos" - 150 XP</li>
                        <li>"Pague conta antes do vencimento" - 100 XP</li>
                        <li>"Atinja 750 de score" - 1000 XP + Badge</li>
                    </ul>
                    
                    <h3>Sistema de Recompensas</h3>
                    <ul>
                        <li><strong>XP Points:</strong> Para evolução do personagem</li>
                        <li><strong>Moedas Virtuais:</strong> Para compras no avatar</li>
                        <li><strong>Badges:</strong> Conquistas especiais</li>
                        <li><strong>Benefícios Reais:</strong> Cashback, desconto em taxas</li>
                    </ul>
                    
                    <h3>Arquitetura</h3>
                    <ul>
                        <li><strong>Quest Engine:</strong> Gerencia missões ativas</li>
                        <li><strong>Progress Tracker:</strong> Monitora progresso</li>
                        <li><strong>Reward System:</strong> Distribui recompensas</li>
                        <li><strong>Notification Service:</strong> Avisos de conclusão</li>
                    </ul>
                </div>
            `
        },

        // Conceito 2: Admin Preditivo
        'pattern-detector': {
            title: 'Detector de Padrões',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de IA que analisa histórico financeiro para identificar padrões de comportamento e prever futuras necessidades de crédito.</p>
                    
                    <h3>Algoritmos de ML</h3>
                    <ul>
                        <li><strong>Time Series Analysis:</strong> Para padrões temporais</li>
                        <li><strong>Clustering:</strong> Agrupamento de comportamentos</li>
                        <li><strong>Anomaly Detection:</strong> Gastos atípicos</li>
                        <li><strong>Regression Models:</strong> Previsão de gastos futuros</li>
                    </ul>
                    
                    <h3>Dados Analisados</h3>
                    <ul>
                        <li>Histórico de transações (12+ meses)</li>
                        <li>Sazonalidade de gastos</li>
                        <li>Categorias de despesas</li>
                        <li>Padrões de renda</li>
                        <li>Eventos de vida (casamento, filhos, etc.)</li>
                    </ul>
                    
                    <h3>Padrões Detectados</h3>
                    <ul>
                        <li><strong>Ciclos de Gastos:</strong> Picos mensais/sazonais</li>
                        <li><strong>Emergências:</strong> Padrões que precedem necessidades urgentes</li>
                        <li><strong>Investimentos:</strong> Momentos propensos a aplicações</li>
                        <li><strong>Grandes Compras:</strong> Sinais de intenção de compra</li>
                    </ul>
                    
                    <h3>Tecnologias</h3>
                    <ul>
                        <li><strong>Python/TensorFlow:</strong> Modelos de ML</li>
                        <li><strong>Apache Kafka:</strong> Streaming de dados</li>
                        <li><strong>Redis:</strong> Cache de predições</li>
                        <li><strong>PostgreSQL:</strong> Armazenamento de padrões</li>
                    </ul>
                    
                    <h3>Output do Sistema</h3>
                    <ul>
                        <li>Probabilidade de necessidade (0-100%)</li>
                        <li>Tipo de necessidade prevista</li>
                        <li>Timeline estimada</li>
                        <li>Valor estimado necessário</li>
                    </ul>
                </div>
            `
        },

        'predictive-alerts': {
            title: 'Alertas Preditivos',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de notificações inteligentes que antecipa necessidades financeiras e envia alertas proativos.</p>
                    
                    <h3>Tipos de Alertas</h3>
                    <ul>
                        <li><strong>Fluxo de Caixa:</strong> "Saldo ficará negativo em 5 dias"</li>
                        <li><strong>Oportunidades:</strong> "Bom momento para investir"</li>
                        <li><strong>Riscos:</strong> "Gasto acima da média detectado"</li>
                        <li><strong>Metas:</strong> "Você está 80% da sua meta!"</li>
                    </ul>
                    
                    <h3>Sistema de Priorização</h3>
                    <ul>
                        <li><strong>Urgência:</strong> Crítico, Alto, Médio, Baixo</li>
                        <li><strong>Relevância:</strong> Score baseado no perfil</li>
                        <li><strong>Timing:</strong> Momento ideal para envio</li>
                        <li><strong>Frequência:</strong> Controle anti-spam</li>
                    </ul>
                    
                    <h3>Canais de Notificação</h3>
                    <ul>
                        <li><strong>Push Notifications:</strong> Para alertas urgentes</li>
                        <li><strong>In-App:</strong> Notificações dentro do app</li>
                        <li><strong>Email:</strong> Para resumos e relatórios</li>
                        <li><strong>SMS:</strong> Para emergências críticas</li>
                    </ul>
                    
                    <h3>Machine Learning</h3>
                    <ul>
                        <li>Otimização de timing de envio</li>
                        <li>Personalização de mensagens</li>
                        <li>Predição de engagement</li>
                        <li>A/B testing automático</li>
                    </ul>
                    
                    <h3>Métricas</h3>
                    <ul>
                        <li>Taxa de abertura: >45%</li>
                        <li>Taxa de ação: >25%</li>
                        <li>Precisão das previsões: >85%</li>
                        <li>Satisfação do usuário: >4.5/5</li>
                    </ul>
                </div>
            `
        },

        'life-timeline': {
            title: 'Timeline da Vida',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Visualização interativa das etapas de vida do usuário com previsão de necessidades financeiras futuras.</p>
                    
                    <h3>Marcos da Vida</h3>
                    <ul>
                        <li><strong>Profissionais:</strong> Promoção, mudança de emprego</li>
                        <li><strong>Pessoais:</strong> Casamento, filhos, aposentadoria</li>
                        <li><strong>Financeiros:</strong> Casa própria, carro, investimentos</li>
                        <li><strong>Educacionais:</strong> Graduação, especialização</li>
                    </ul>
                    
                    <h3>Predições Financeiras</h3>
                    <ul>
                        <li>Custos estimados para cada marco</li>
                        <li>Timeline de poupança necessária</li>
                        <li>Produtos financeiros recomendados</li>
                        <li>Estratégias de preparação</li>
                    </ul>
                    
                    <h3>Interface Visual</h3>
                    <ul>
                        <li><strong>Timeline Horizontal:</strong> Linha do tempo interativa</li>
                        <li><strong>Marcos Visuais:</strong> Ícones para cada etapa</li>
                        <li><strong>Zonas de Tempo:</strong> Próximo, médio e longo prazo</li>
                        <li><strong>Detalhes on Hover:</strong> Informações expandidas</li>
                    </ul>
                    
                    <h3>Funcionalidades</h3>
                    <ul>
                        <li>Adição de marcos personalizados</li>
                        <li>Ajuste de datas e valores</li>
                        <li>Simulações de cenários</li>
                        <li>Compartilhamento com família</li>
                    </ul>
                    
                    <h3>Tecnologias</h3>
                    <ul>
                        <li><strong>Frontend:</strong> React + D3.js para visualizações</li>
                        <li><strong>Cálculos:</strong> Bibliotecas de matemática financeira</li>
                        <li><strong>Responsive:</strong> Design adaptativo mobile-first</li>
                    </ul>
                </div>
            `
        },

        'smart-preapproval': {
            title: 'Pré-aprovação Inteligente',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema automatizado que pré-aprova crédito baseado em análise preditiva de necessidades futuras.</p>
                    
                    <h3>Motor de Decisão</h3>
                    <ul>
                        <li><strong>Risk Scoring:</strong> Análise de risco automatizada</li>
                        <li><strong>Need Prediction:</strong> Probabilidade de necessidade</li>
                        <li><strong>Capacity Analysis:</strong> Capacidade de pagamento</li>
                        <li><strong>Timing Optimization:</strong> Melhor momento para oferta</li>
                    </ul>
                    
                    <h3>Tipos de Pré-aprovação</h3>
                    <ul>
                        <li><strong>Emergencial:</strong> Para situações imprevistas</li>
                        <li><strong>Sazonal:</strong> Para gastos recorrentes</li>
                        <li><strong>Oportunidade:</strong> Para investimentos/compras</li>
                        <li><strong>Planejada:</strong> Para objetivos de longo prazo</li>
                    </ul>
                    
                    <h3>Algoritmo de Aprovação</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function smartPreApproval(user, prediction) {
  let riskScore = calculateRisk(user);
  let needProbability = prediction.probability;
  let amount = estimateAmount(prediction);
  
  if (riskScore < 0.3 && needProbability > 0.7) {
    return preApprove(user, amount);
  }
}</pre>
                    
                    <h3>Validações de Segurança</h3>
                    <ul>
                        <li>Análise de fraude em tempo real</li>
                        <li>Verificação de identidade contínua</li>
                        <li>Monitoramento de comportamento anômalo</li>
                        <li>Limites dinâmicos baseados em risco</li>
                    </ul>
                    
                    <h3>Compliance</h3>
                    <ul>
                        <li>Conformidade com LGPD</li>
                        <li>Auditoria de decisões</li>
                        <li>Transparência algorítmica</li>
                        <li>Direito de contestação</li>
                    </ul>
                    
                    <h3>Benefícios</h3>
                    <ul>
                        <li>Redução de 70% no tempo de aprovação</li>
                        <li>Aumento de 40% na satisfação</li>
                        <li>Diminuição de 25% na inadimplência</li>
                        <li>Melhoria de 60% na experiência</li>
                    </ul>
                </div>
            `
        },

        // Conceito 3: Admin Adaptativo
        'intent-detector': {
            title: 'Detector de Intenção',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de NLP que analisa interações do usuário para detectar intenções não expressas explicitamente.</p>
                    
                    <h3>Tecnologias de NLP</h3>
                    <ul>
                        <li><strong>BERT/GPT:</strong> Para compreensão contextual</li>
                        <li><strong>Intent Classification:</strong> Classificação de intenções</li>
                        <li><strong>Sentiment Analysis:</strong> Análise de sentimento</li>
                        <li><strong>Entity Extraction:</strong> Extração de entidades</li>
                    </ul>
                    
                    <h3>Fontes de Dados</h3>
                    <ul>
                        <li>Mensagens no chat/suporte</li>
                        <li>Buscas internas no app</li>
                        <li>Cliques e navegação</li>
                        <li>Tempo gasto em seções</li>
                        <li>Interações com produtos</li>
                    </ul>
                    
                    <h3>Intenções Detectadas</h3>
                    <ul>
                        <li><strong>Compra:</strong> "Estou pensando em trocar de carro"</li>
                        <li><strong>Investimento:</strong> "Como funciona renda fixa?"</li>
                        <li><strong>Emergência:</strong> "Preciso de dinheiro urgente"</li>
                        <li><strong>Planejamento:</strong> "Quero comprar casa em 2 anos"</li>
                    </ul>
                    
                    <h3>Pipeline de Processamento</h3>
                    <ol>
                        <li>Captura de texto/comportamento</li>
                        <li>Pré-processamento e limpeza</li>
                        <li>Análise contextual com NLP</li>
                        <li>Classificação de intenção</li>
                        <li>Score de confiança</li>
                        <li>Ação recomendada</li>
                    </ol>
                    
                    <h3>Modelo de Confiança</h3>
                    <ul>
                        <li><strong>Alta (>80%):</strong> Ação automática</li>
                        <li><strong>Média (50-80%):</strong> Sugestão humana</li>
                        <li><strong>Baixa (<50%):</strong> Apenas logging</li>
                    </ul>
                    
                    <h3>Accuracy Esperada</h3>
                    <ul>
                        <li>Intenções explícitas: 95%</li>
                        <li>Intenções implícitas: 78%</li>
                        <li>Falsos positivos: <5%</li>
                    </ul>
                </div>
            `
        },

        'adaptive-interface': {
            title: 'Interface Adaptativa',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de UI dinâmica que se reconfigura automaticamente baseada nos objetivos e comportamento do usuário.</p>
                    
                    <h3>Componentes Adaptativos</h3>
                    <ul>
                        <li><strong>Menu Principal:</strong> Reorganiza por frequência de uso</li>
                        <li><strong>Dashboard:</strong> Widgets personalizados por objetivo</li>
                        <li><strong>Ofertas:</strong> Produtos relevantes em destaque</li>
                        <li><strong>Navegação:</strong> Atalhos para ações comuns</li>
                    </ul>
                    
                    <h3>Regras de Adaptação</h3>
                    <ul>
                        <li><strong>Objetivo de Casa:</strong> Destaque para financiamentos</li>
                        <li><strong>Foco em Investimento:</strong> Produtos de investimento em primeiro</li>
                        <li><strong>Perfil Jovem:</strong> Interface mais visual e gamificada</li>
                        <li><strong>Empresário:</strong> Foco em produtos PJ</li>
                    </ul>
                    
                    <h3>Tecnologia Frontend</h3>
                    <ul>
                        <li><strong>React/Vue:</strong> Componentes modulares</li>
                        <li><strong>State Management:</strong> Redux/Vuex para estado global</li>
                        <li><strong>CSS-in-JS:</strong> Estilos dinâmicos</li>
                        <li><strong>Animation Library:</strong> Transições suaves</li>
                    </ul>
                    
                    <h3>Sistema de Personalização</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function adaptInterface(userProfile, goals) {
  let layout = generateLayout(goals);
  let components = selectComponents(userProfile);
  let theme = chooseTheme(userProfile.preferences);
  
  return buildInterface(layout, components, theme);
}</pre>
                    
                    <h3>Teste A/B Automático</h3>
                    <ul>
                        <li>Testa diferentes layouts</li>
                        <li>Mede engagement por variação</li>
                        <li>Otimização contínua</li>
                        <li>Rollback automático se conversão cair</li>
                    </ul>
                    
                    <h3>Performance</h3>
                    <ul>
                        <li>Lazy loading de componentes</li>
                        <li>Cache de layouts personalizados</li>
                        <li>Renderização do lado servidor</li>
                        <li>Otimização para mobile</li>
                    </ul>
                </div>
            `
        },

        'goal-tracker': {
            title: 'Rastreador de Objetivos',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema que monitora e acompanha o progresso do usuário em direção aos seus objetivos financeiros.</p>
                    
                    <h3>Tipos de Objetivos</h3>
                    <ul>
                        <li><strong>Poupança:</strong> Juntar X reais até data Y</li>
                        <li><strong>Redução de Gastos:</strong> Diminuir categoria em X%</li>
                        <li><strong>Score de Crédito:</strong> Alcançar score alvo</li>
                        <li><strong>Investimentos:</strong> Aportar mensalmente</li>
                        <li><strong>Quitação:</strong> Pagar dívida específica</li>
                    </ul>
                    
                    <h3>Métricas Acompanhadas</h3>
                    <ul>
                        <li>Progresso percentual</li>
                        <li>Tempo restante</li>
                        <li>Velocidade atual</li>
                        <li>Projeção de conclusão</li>
                        <li>Desvios do plano</li>
                    </ul>
                    
                    <h3>Sistema de Alertas</h3>
                    <ul>
                        <li><strong>Atraso:</strong> "Meta atrasada em 15%"</li>
                        <li><strong>Aceleração:</strong> "Você pode antecipar a meta!"</li>
                        <li><strong>Risco:</strong> "Gasto pode comprometer objetivo"</li>
                        <li><strong>Conquista:</strong> "Meta alcançada! 🎉"</li>
                    </ul>
                    
                    <h3>Visualizações</h3>
                    <ul>
                        <li>Barras de progresso animadas</li>
                        <li>Gráficos de evolução temporal</li>
                        <li>Calendário de marcos</li>
                        <li>Comparativo planejado vs real</li>
                    </ul>
                    
                    <h3>API Endpoints</h3>
                    <ul>
                        <li><code>POST /api/goals</code> - Criar objetivo</li>
                        <li><code>GET /api/goals/progress</code> - Progresso atual</li>
                        <li><code>PUT /api/goals/{id}</code> - Atualizar meta</li>
                        <li><code>GET /api/goals/suggestions</code> - Sugestões de ajuste</li>
                    </ul>
                    
                    <h3>Integrações</h3>
                    <ul>
                        <li>Sistema bancário para saldos</li>
                        <li>Cartões para gastos</li>
                        <li>Investimentos para aportes</li>
                        <li>Score de crédito para acompanhamento</li>
                    </ul>
                </div>
            `
        },

        'dynamic-products': {
            title: 'Produtos Dinâmicos',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema que cria produtos financeiros personalizados que se adaptam automaticamente aos objetivos específicos do usuário.</p>
                    
                    <h3>Tipos de Adaptação</h3>
                    <ul>
                        <li><strong>Taxa de Juros:</strong> Baseada em risco e relacionamento</li>
                        <li><strong>Prazo:</strong> Alinhado com timeline do objetivo</li>
                        <li><strong>Valor:</strong> Calculado pela necessidade específica</li>
                        <li><strong>Carência:</strong> Adaptada ao fluxo de caixa</li>
                    </ul>
                    
                    <h3>Motor de Configuração</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function createDynamicProduct(user, goal) {
  let riskProfile = assessRisk(user);
  let timeline = goal.targetDate - today;
  let amount = goal.targetAmount;
  
  return {
    rate: calculateRate(riskProfile),
    term: optimizeTerm(timeline, user.cashFlow),
    amount: amount,
    structure: buildPaymentStructure(user)
  };
}</pre>
                    
                    <h3>Exemplos Práticos</h3>
                    <ul>
                        <li><strong>Casa própria:</strong> Financiamento com entrada flexível</li>
                        <li><strong>Carro:</strong> CDC com parcelas adaptadas à renda</li>
                        <li><strong>Educação:</strong> Crédito com carência durante estudos</li>
                        <li><strong>Emergência:</strong> Linha pré-aprovada para imprevistos</li>
                    </ul>
                    
                    <h3>Compliance e Risco</h3>
                    <ul>
                        <li>Validação automática de políticas</li>
                        <li>Limites de exposição por perfil</li>
                        <li>Aprovação escalonada por valor</li>
                        <li>Auditoria de todas as configurações</li>
                    </ul>
                    
                    <h3>Tecnologias Necessárias</h3>
                    <ul>
                        <li><strong>Rules Engine:</strong> Para configurações dinâmicas</li>
                        <li><strong>Pricing Engine:</strong> Cálculo de taxas em tempo real</li>
                        <li><strong>Risk Engine:</strong> Avaliação contínua</li>
                        <li><strong>Product Catalog:</strong> Templates de produtos</li>
                    </ul>
                    
                    <h3>Benefícios Esperados</h3>
                    <ul>
                        <li>+50% taxa de conversão</li>
                        <li>+30% satisfação do cliente</li>
                        <li>-20% inadimplência</li>
                        <li>+40% ticket médio</li>
                    </ul>
                </div>
            `
        },

        // Conceito 4: Match Score
        'compatibility-algorithm': {
            title: 'Algoritmo de Compatibilidade',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de IA que calcula score de compatibilidade entre usuários e produtos financeiros, similar ao matching de apps de relacionamento.</p>
                    
                    <h3>Fatores de Compatibilidade</h3>
                    <ul>
                        <li><strong>Perfil Financeiro (30%):</strong> Renda, gastos, score</li>
                        <li><strong>Objetivos (25%):</strong> Alinhamento com metas</li>
                        <li><strong>Comportamento (20%):</strong> Histórico de uso</li>
                        <li><strong>Timing (15%):</strong> Momento ideal</li>
                        <li><strong>Preferências (10%):</strong> Declaradas pelo usuário</li>
                    </ul>
                    
                    <h3>Algoritmo de Matching</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function calculateMatch(user, product) {
  let scores = {
    financial: scoreFinancialFit(user, product),
    goals: scoreGoalAlignment(user, product),
    behavior: scoreBehaviorMatch(user, product),
    timing: scoreTimingRelevance(user, product),
    preferences: scorePreferences(user, product)
  };
  
  return weightedAverage(scores, WEIGHTS);
}</pre>
                    
                    <h3>Categorias de Match</h3>
                    <ul>
                        <li><strong>Perfect Match (90-100%):</strong> Produto ideal</li>
                        <li><strong>High Match (75-89%):</strong> Muito compatível</li>
                        <li><strong>Good Match (60-74%):</strong> Boa opção</li>
                        <li><strong>Fair Match (40-59%):</strong> Pode ser útil</li>
                        <li><strong>Low Match (<40%):</strong> Não recomendado</li>
                    </ul>
                    
                    <h3>Machine Learning</h3>
                    <ul>
                        <li><strong>Training Data:</strong> Histórico de contratações</li>
                        <li><strong>Features:</strong> 200+ variáveis do usuário</li>
                        <li><strong>Model:</strong> Gradient Boosting + Neural Networks</li>
                        <li><strong>Feedback Loop:</strong> Aprende com aceites/rejeições</li>
                    </ul>
                    
                    <h3>Otimização Contínua</h3>
                    <ul>
                        <li>A/B testing de pesos</li>
                        <li>Análise de conversão por score</li>
                        <li>Retraining semanal do modelo</li>
                        <li>Ajuste de threshold dinâmico</li>
                    </ul>
                    
                    <h3>Resultados Esperados</h3>
                    <ul>
                        <li>85% precisão na recomendação</li>
                        <li>60% taxa de conversão em matches altos</li>
                        <li>40% redução em produtos não utilizados</li>
                    </ul>
                </div>
            `
        },

        'swipe-interface': {
            title: 'Interface Swipe',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Interface tipo Tinder para explorar e decidir sobre ofertas de crédito de forma intuitiva e divertida.</p>
                    
                    <h3>Gestos de Interação</h3>
                    <ul>
                        <li><strong>Swipe Right:</strong> "Gostei" - Produto interessante</li>
                        <li><strong>Swipe Left:</strong> "Não gostei" - Produto rejeitado</li>
                        <li><strong>Swipe Up:</strong> "Super Like" - Produto muito interessante</li>
                        <li><strong>Tap:</strong> Ver detalhes do produto</li>
                    </ul>
                    
                    <h3>Card Design</h3>
                    <ul>
                        <li><strong>Título:</strong> Nome do produto em destaque</li>
                        <li><strong>Match Score:</strong> Porcentagem de compatibilidade</li>
                        <li><strong>Benefícios Key:</strong> 2-3 principais vantagens</li>
                        <li><strong>Call to Action:</strong> Botão principal visível</li>
                        <li><strong>Detalhes:</strong> Informações expandíveis</li>
                    </ul>
                    
                    <h3>Implementação Técnica</h3>
                    <ul>
                        <li><strong>React Native:</strong> Para gestos nativos</li>
                        <li><strong>PanGestureHandler:</strong> Detecção de swipe</li>
                        <li><strong>Reanimated:</strong> Animações fluidas</li>
                        <li><strong>Card Stack:</strong> Pilha de produtos</li>
                    </ul>
                    
                    <h3>Lógica de Exibição</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function getNextCards(user, previousSwipes) {
  let products = getEligibleProducts(user);
  let filtered = filterByPreferences(products, previousSwipes);
  let ranked = rankByMatchScore(filtered);
  
  return ranked.slice(0, 5); // Stack de 5 cards
}</pre>
                    
                    <h3>Feedback System</h3>
                    <ul>
                        <li>Vibração háptica em swipes</li>
                        <li>Animações de like/dislike</li>
                        <li>Som de "match" quando há interesse mútuo</li>
                        <li>Celebração visual para "Super Likes"</li>
                    </ul>
                    
                    <h3>Analytics</h3>
                    <ul>
                        <li>Taxa de swipe por produto</li>
                        <li>Tempo gasto em cada card</li>
                        <li>Correlação entre match score e aceitação</li>
                        <li>Padrões de uso por horário/dia</li>
                    </ul>
                    
                    <h3>Gamificação</h3>
                    <ul>
                        <li>Badge "Explorer" por quantidade de swipes</li>
                        <li>Streak de "decisões inteligentes"</li>
                        <li>Ranking semanal de usuários ativos</li>
                    </ul>
                </div>
            `
        },

        'match-explanation': {
            title: 'Explicador de Match',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema que gera explicações claras e personalizadas sobre por que um produto é compatível com o usuário.</p>
                    
                    <h3>Tipos de Explicação</h3>
                    <ul>
                        <li><strong>Financeira:</strong> "Caberia no seu orçamento mensal"</li>
                        <li><strong>Objetivo:</strong> "Alinhado com sua meta de casa própria"</li>
                        <li><strong>Perfil:</strong> "Popular entre pessoas do seu perfil"</li>
                        <li><strong>Timing:</strong> "Momento ideal para esta contratação"</li>
                    </ul>
                    
                    <h3>Template Engine</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function generateExplanation(user, product, matchScore) {
  let reasons = analyzeMatchFactors(user, product);
  let template = selectTemplate(matchScore, reasons);
  let personalized = personalize(template, user);
  
  return personalized;
}</pre>
                    
                    <h3>Exemplos de Explicações</h3>
                    <ul>
                        <li><strong>95% Match:</strong> "Perfeito para você! Taxa baixa, prazo ideal e valor compatível com sua renda."</li>
                        <li><strong>78% Match:</strong> "Boa opção! Alinhado com seu objetivo de carro novo, mas considere o prazo mais longo."</li>
                        <li><strong>45% Match:</strong> "Pode funcionar, mas há opções mais adequadas ao seu perfil atual."</li>
                    </ul>
                    
                    <h3>Fatores Explicados</h3>
                    <ul>
                        <li><strong>Capacidade de Pagamento:</strong> % da renda comprometida</li>
                        <li><strong>Alinhamento de Objetivos:</strong> Relevância para metas</li>
                        <li><strong>Condições:</strong> Taxa, prazo, valor em contexto</li>
                        <li><strong>Experiência:</strong> Adequação ao nível de experiência</li>
                    </ul>
                    
                    <h3>Visualização</h3>
                    <ul>
                        <li>Gráfico radar com dimensões de match</li>
                        <li>Barras de progresso para cada fator</li>
                        <li>Ícones visuais para facilitar compreensão</li>
                        <li>Comparação com produtos similares</li>
                    </ul>
                    
                    <h3>Transparência Algorítmica</h3>
                    <ul>
                        <li>Explicação dos principais fatores</li>
                        <li>Links para mais informações</li>
                        <li>Opção de "Por que não 100%?"</li>
                        <li>Sugestões de melhoria do match</li>
                    </ul>
                    
                    <h3>Compliance</h3>
                    <ul>
                        <li>Auditabilidade das explicações</li>
                        <li>Versionamento de templates</li>
                        <li>Logs de explicações geradas</li>
                        <li>Conformidade com regulamentações</li>
                    </ul>
                </div>
            `
        },

        'learning-feedback': {
            title: 'Feedback de Aprendizado',
            content: `
                <div style="line-height: 1.6;">
                    <h3>Descrição Técnica</h3>
                    <p>Sistema de aprendizado contínuo que melhora as recomendações baseado no feedback implícito e explícito dos usuários.</p>
                    
                    <h3>Tipos de Feedback</h3>
                    <ul>
                        <li><strong>Explícito:</strong> Avaliações, comentários, ratings</li>
                        <li><strong>Implícito:</strong> Swipes, cliques, tempo de visualização</li>
                        <li><strong>Comportamental:</strong> Contratações, cancelamentos</li>
                        <li><strong>Contextual:</strong> Quando e onde interage</li>
                    </ul>
                    
                    <h3>Coleta de Dados</h3>
                    <ul>
                        <li>Event tracking de todas as interações</li>
                        <li>Formulários de feedback opcionais</li>
                        <li>NPS scores pós-contratação</li>
                        <li>Análise de suporte ao cliente</li>
                    </ul>
                    
                    <h3>Processamento de Feedback</h3>
                    <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
function processFeedback(userId, productId, action, context) {
  let weight = calculateFeedbackWeight(action, context);
  let signal = extractLearningSignal(action, weight);
  
  updateUserProfile(userId, signal);
  updateProductScoring(productId, signal);
  triggerModelRetraining();
}</pre>
                    
                    <h3>Aprendizado em Tempo Real</h3>
                    <ul>
                        <li><strong>Online Learning:</strong> Ajustes imediatos no modelo</li>
                        <li><strong>Bandit Algorithms:</strong> Exploração vs exploitação</li>
                        <li><strong>Reinforcement Learning:</strong> Otimização de longo prazo</li>
                        <li><strong>Transfer Learning:</strong> Aprendizado entre usuários similares</li>
                    </ul>
                    
                    <h3>Personalização Dinâmica</h3>
                    <ul>
                        <li>Pesos adaptativos por usuário</li>
                        <li>Preferências evolutivas</li>
                        <li>Contexto temporal considerado</li>
                        <li>Fatores sazonais aprendidos</li>
                    </ul>
                    
                    <h3>Validação de Aprendizado</h3>
                    <ul>
                        <li>A/B testing contínuo</li>
                        <li>Métricas de precisão online</li>
                        <li>Análise de drift conceitual</li>
                        <li>Validação de mudanças significativas</li>
                    </ul>
                    
                    <h3>Feedback Loop Metrics</h3>
                    <ul>
                        <li>Precisão de recomendação: >80%</li>
                        <li>Taxa de engajamento: +35%</li>
                        <li>Conversão de matches: +45%</li>
                        <li>Satisfação do usuário: +25%</li>
                    </ul>
                    
                    <h3>Proteções de Qualidade</h3>
                    <ul>
                        <li>Detecção de feedback fraudulento</li>
                        <li>Filtros de qualidade de dados</li>
                        <li>Rollback automático se métricas degradam</li>
                        <li>Validação manual para mudanças grandes</li>
                    </ul>
                </div>
            `
        }
    };
    
    return features[featureId] || {
        title: 'Feature não encontrada',
        content: '<p>Informações desta feature ainda não estão disponíveis.</p>'
    };
} 