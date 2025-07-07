/**
 * 🎨 WIREFRAME COMPONENTS LIBRARY - MODULAR SYSTEM
 * Sistema modular de componentes para wireframes conceptuales
 * Fácil de extender y personalizar por industria/necesidad
 */

// ===== LAYOUT COMPONENTS =====
const LayoutComponents = {
  container: (content) => `
    <div class="wf-container">
      ${content}
    </div>
  `,

  section: (content, className = '') => `
    <div class="wf-section ${className}">
      ${content}
    </div>
  `,

  grid: (content, columns = 2) => `
    <div class="wf-grid wf-grid-${columns}">
      ${content}
    </div>
  `,

  flex: (content, direction = 'row', justify = 'center') => `
    <div class="wf-flex ${direction === 'column' ? 'wf-flex-column' : ''} ${justify === 'between' ? 'wf-flex-between' : 'wf-flex-center'}">
      ${content}
    </div>
  `
};

// ===== HEADER COMPONENTS =====
const HeaderComponents = {
  minimal: (logo = 'Logo', nav = 'Menu') => `
    <header class="wf-header wf-header--minimal">
      <div class="wf-logo">${logo}</div>
      <div class="wf-nav--simple">${nav}</div>
    </header>
  `,

  full: (logo = 'Logo', navItems = ['Home', 'Features', 'Pricing', 'Contact']) => `
    <header class="wf-header wf-header--full">
      <div class="wf-logo">${logo}</div>
      <nav class="wf-nav">
        ${navItems.map(item => `<span class="wf-nav-item">${item}</span>`).join('')}
      </nav>
    </header>
  `,

  branded: (brandName, navItems = []) => `
    <header class="wf-header">
      <div class="wf-logo">${brandName}</div>
      ${navItems.length > 0 ? `
        <nav class="wf-nav">
          ${navItems.map(item => `<span class="wf-nav-item">${item}</span>`).join('')}
        </nav>
      ` : '<div class="wf-nav--simple">Menu</div>'}
    </header>
  `
};

// ===== HERO COMPONENTS =====
const HeroComponents = {
  simple: (title, subtitle, cta = 'Get Started') => `
    <section class="wf-hero wf-hero--simple">
      <h1 class="wf-title">${title}</h1>
      <p class="wf-subtitle">${subtitle}</p>
      <button class="wf-button wf-button--primary wf-button--large">${cta}</button>
    </section>
  `,

  detailed: (title, subtitle, benefits = [], cta = 'Get Started') => `
    <section class="wf-hero wf-hero--detailed">
      <h1 class="wf-title">${title}</h1>
      <p class="wf-subtitle">${subtitle}</p>
      ${benefits.length > 0 ? `
        <div class="wf-benefits">
          ${benefits.map(benefit => `<div class="wf-benefit">${benefit}</div>`).join('')}
        </div>
      ` : ''}
      <button class="wf-button wf-button--primary wf-button--large">${cta}</button>
    </section>
  `,

  withImage: (title, subtitle, imagePlaceholder = '[Image Placeholder]', cta = 'Get Started') => `
    <section class="wf-hero">
      <div class="wf-grid wf-grid-2">
        <div>
          <h1 class="wf-title">${title}</h1>
          <p class="wf-subtitle">${subtitle}</p>
          <button class="wf-button wf-button--primary wf-button--large">${cta}</button>
        </div>
        <div class="wf-card wf-bg-gray">
          ${imagePlaceholder}
        </div>
      </div>
    </section>
  `
};

// ===== CONTENT COMPONENTS =====
const ContentComponents = {
  singleOption: (title, price, features, cta = 'Choose This Plan') => `
    <section class="wf-content wf-content--center">
      <div class="wf-flex-center">
        <div class="wf-card wf-card--recommended">
          <div class="wf-card__header">
            <h3 class="wf-heading">${title}</h3>
          </div>
          <div class="wf-card__body">
            <div class="wf-price">${price}</div>
            <div class="wf-features">${features}</div>
          </div>
          <div class="wf-card__footer">
            <button class="wf-button wf-button--primary wf-button--full">${cta}</button>
          </div>
        </div>
      </div>
    </section>
  `,

  multipleOptions: (options) => `
    <section class="wf-content">
      <div class="wf-grid wf-grid-${Math.min(options.length, 3)}">
        ${options.map((option, index) => `
          <div class="wf-card ${option.recommended ? 'wf-card--recommended' : ''}">
            <div class="wf-card__header">
              <h3 class="wf-heading">${option.title}</h3>
            </div>
            <div class="wf-card__body">
              <div class="wf-price">${option.price}</div>
              <div class="wf-features">${option.features}</div>
            </div>
            <div class="wf-card__footer">
              <button class="wf-button ${option.recommended ? 'wf-button--primary' : 'wf-button--secondary'} wf-button--full">
                ${option.cta || 'Choose Plan'}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `,

  textContent: (heading, content, align = 'left') => `
    <section class="wf-content wf-content--${align}">
      <h2 class="wf-heading">${heading}</h2>
      <div class="wf-text">${content}</div>
    </section>
  `
};

// ===== TABLE COMPONENTS =====
const TableComponents = {
  comparison: (headers, rows) => `
    <section class="wf-content">
      <div class="wf-table-wrapper">
        <table class="wf-table">
          <thead class="wf-table__header">
            <tr>
              ${headers.map(header => `<th class="wf-table__cell">${header}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows.map((row, index) => `
              <tr class="wf-table__row">
                ${row.map(cell => `<td class="wf-table__cell">${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `,

  simple: (data) => `
    <section class="wf-content">
      <div class="wf-table-wrapper">
        <table class="wf-table">
          <tbody>
            ${Object.entries(data).map(([key, value]) => `
              <tr class="wf-table__row">
                <td class="wf-table__cell" style="text-align: left; font-weight: bold;">${key}</td>
                <td class="wf-table__cell">${value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `
};

// ===== WIZARD COMPONENTS =====
const WizardComponents = {
  steps: (steps, activeStep = 0) => `
    <section class="wf-content">
      <div class="wf-wizard">
        <div class="wf-steps">
          ${steps.map((step, index) => `
            <div class="wf-step ${index === activeStep ? 'wf-step--active' : ''} ${index < activeStep ? 'wf-step--completed' : ''}">
              ${step}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `,

  stepContent: (title, description, prevLabel = 'Back', nextLabel = 'Next') => `
    <div class="wf-wizard-content">
      <h3 class="wf-heading">${title}</h3>
      <p class="wf-text">${description}</p>
      <div class="wf-wizard-actions">
        <button class="wf-button wf-button--secondary">${prevLabel}</button>
        <button class="wf-button wf-button--primary">${nextLabel}</button>
      </div>
    </div>
  `,

  fullWizard: (steps, activeStep, stepContent) => `
    <section class="wf-content">
      <div class="wf-wizard">
        ${WizardComponents.steps(steps, activeStep)}
        ${stepContent}
      </div>
    </section>
  `
};

// ===== SOCIAL PROOF COMPONENTS =====
const SocialProofComponents = {
  stats: (stats) => `
    <section class="wf-content">
      <div class="wf-social-proof">
        <div class="wf-stats">
          ${stats.map(stat => `
            <div class="wf-stat">
              <span class="wf-stat__number">${stat.number}</span>
              <div class="wf-stat__label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `,

  testimonials: (testimonials) => `
    <section class="wf-content">
      <div class="wf-social-proof">
        <div class="wf-testimonials">
          ${testimonials.map(testimonial => `
            <div class="wf-testimonial">
              <p class="wf-testimonial__quote">"${testimonial.quote}"</p>
              <div class="wf-testimonial__author">- ${testimonial.author}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `,

  combined: (stats, testimonials) => `
    <section class="wf-content">
      <div class="wf-social-proof">
        <div class="wf-stats">
          ${stats.map(stat => `
            <div class="wf-stat">
              <span class="wf-stat__number">${stat.number}</span>
              <div class="wf-stat__label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
        <div class="wf-testimonials">
          ${testimonials.map(testimonial => `
            <div class="wf-testimonial">
              <p class="wf-testimonial__quote">"${testimonial.quote}"</p>
              <div class="wf-testimonial__author">- ${testimonial.author}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
};

// ===== PERSONALIZATION COMPONENTS =====
const PersonalizationComponents = {
  userProfile: (name, context, avatarPlaceholder = '') => `
    <div class="wf-user-profile">
      <div class="wf-avatar">${avatarPlaceholder}</div>
      <div class="wf-user-info">
        <h4>Hi ${name}!</h4>
        <p>${context}</p>
      </div>
    </div>
  `,

  recommendations: (recommendations) => `
    <section class="wf-content wf-personalized">
      <div class="wf-recommendations">
        ${recommendations.map(rec => `
          <div class="wf-recommendation ${rec.highlighted ? 'wf-recommendation--highlighted' : ''}">
            <h3 class="wf-recommendation__title">${rec.title}</h3>
            <div class="wf-recommendation__reason">${rec.reason}</div>
            <div class="wf-recommendation__content">${rec.content}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `,

  fullPersonalized: (userProfile, recommendations) => `
    <section class="wf-content wf-personalized">
      ${userProfile}
      <div class="wf-recommendations">
        ${recommendations.map(rec => `
          <div class="wf-recommendation ${rec.highlighted ? 'wf-recommendation--highlighted' : ''}">
            <h3 class="wf-recommendation__title">${rec.title}</h3>
            <div class="wf-recommendation__reason">${rec.reason}</div>
            <div class="wf-recommendation__content">${rec.content}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `
};

// ===== FORM COMPONENTS =====
const FormComponents = {
  simple: (fields, submitLabel = 'Submit') => `
    <section class="wf-content">
      <form class="wf-form">
        ${fields.map(field => `
          <div class="wf-form-group">
            <label class="wf-label">${field.label}</label>
            ${field.type === 'textarea' 
              ? `<textarea class="wf-input wf-textarea" placeholder="${field.placeholder || ''}"></textarea>`
              : field.type === 'select'
              ? `<select class="wf-select">
                   ${field.options.map(option => `<option value="${option.value}">${option.text}</option>`).join('')}
                 </select>`
              : `<input type="${field.type || 'text'}" class="wf-input" placeholder="${field.placeholder || ''}">`
            }
          </div>
        `).join('')}
        <button type="submit" class="wf-button wf-button--primary wf-button--large">${submitLabel}</button>
      </form>
    </section>
  `,

  wizard: (currentStep, totalSteps, fields, prevLabel = 'Back', nextLabel = 'Next') => `
    <section class="wf-content">
      <div class="wf-wizard">
        <div class="wf-steps">
          ${Array.from({length: totalSteps}, (_, i) => `
            <div class="wf-step ${i === currentStep ? 'wf-step--active' : ''} ${i < currentStep ? 'wf-step--completed' : ''}">
              Step ${i + 1}
            </div>
          `).join('')}
        </div>
        <div class="wf-wizard-content">
          <form class="wf-form">
            ${fields.map(field => `
              <div class="wf-form-group">
                <label class="wf-label">${field.label}</label>
                <input type="${field.type || 'text'}" class="wf-input" placeholder="${field.placeholder || ''}">
              </div>
            `).join('')}
            <div class="wf-wizard-actions">
              ${currentStep > 0 ? `<button type="button" class="wf-button wf-button--secondary">${prevLabel}</button>` : ''}
              <button type="submit" class="wf-button wf-button--primary">${nextLabel}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
};

// ===== ALERT COMPONENTS =====
const AlertComponents = {
  success: (message) => `
    <div class="wf-alert wf-alert--success">
      <strong>Success!</strong> ${message}
    </div>
  `,

  warning: (message) => `
    <div class="wf-alert wf-alert--warning">
      <strong>Warning!</strong> ${message}
    </div>
  `,

  error: (message) => `
    <div class="wf-alert wf-alert--error">
      <strong>Error!</strong> ${message}
    </div>
  `,

  info: (message) => `
    <div class="wf-alert wf-alert--info">
      <strong>Info:</strong> ${message}
    </div>
  `
};

// ===== INDUSTRY-SPECIFIC COMPONENTS =====
const IndustryComponents = {
  fintech: {
    creditCalculator: (fields = ['Amount', 'Term', 'Rate']) => `
      <section class="wf-content">
        <div class="wf-card">
          <h3 class="wf-heading">Credit Calculator</h3>
          <form class="wf-form">
            ${fields.map(field => `
              <div class="wf-form-group">
                <label class="wf-label">${field}</label>
                <input type="number" class="wf-input" placeholder="Enter ${field.toLowerCase()}">
              </div>
            `).join('')}
            <button class="wf-button wf-button--primary wf-button--full">Calculate</button>
          </form>
        </div>
      </section>
    `,

    riskIndicator: (level = 'Medium', description = 'Moderate risk investment') => `
      <div class="wf-alert wf-alert--warning">
        <strong>Risk Level: ${level}</strong><br>
        ${description}
      </div>
    `,

    securityBadges: (badges = ['SSL Secured', 'Bank-grade Security', 'FDIC Insured']) => `
      <div class="wf-flex wf-flex-center">
        ${badges.map(badge => `<div class="wf-benefit">${badge}</div>`).join('')}
      </div>
    `
  },

  ecommerce: {
    productCard: (product) => `
      <div class="wf-card">
        <div class="wf-card__header">
          <div class="wf-bg-gray" style="height: 150px; display: flex; align-items: center; justify-content: center;">
            [Product Image]
          </div>
        </div>
        <div class="wf-card__body">
          <h3 class="wf-heading">${product.name}</h3>
          <div class="wf-price">${product.price}</div>
          <p class="wf-text-sm">${product.description}</p>
        </div>
        <div class="wf-card__footer">
          <button class="wf-button wf-button--primary wf-button--full">Add to Cart</button>
        </div>
      </div>
    `,

    cartSummary: (items, total) => `
      <section class="wf-content">
        <h3 class="wf-heading">Cart Summary</h3>
        <div class="wf-table-wrapper">
          <table class="wf-table">
            <tbody>
              ${items.map(item => `
                <tr class="wf-table__row">
                  <td class="wf-table__cell" style="text-align: left;">${item.name}</td>
                  <td class="wf-table__cell">${item.quantity}</td>
                  <td class="wf-table__cell">${item.price}</td>
                </tr>
              `).join('')}
              <tr class="wf-table__row" style="border-top: 2px solid #333;">
                <td class="wf-table__cell" style="text-align: left; font-weight: bold;">Total</td>
                <td class="wf-table__cell"></td>
                <td class="wf-table__cell" style="font-weight: bold;">${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  },

  healthcare: {
    accessibilityToolbar: () => `
      <div class="wf-alert wf-alert--info">
        <strong>Accessibility Tools:</strong>
        <div class="wf-flex" style="margin-top: 10px;">
          <button class="wf-button wf-button--small">Large Text</button>
          <button class="wf-button wf-button--small">High Contrast</button>
          <button class="wf-button wf-button--small">Audio Help</button>
        </div>
      </div>
    `,

    appointmentSlots: (slots) => `
      <section class="wf-content">
        <h3 class="wf-heading">Available Appointments</h3>
        <div class="wf-grid wf-grid-3">
          ${slots.map(slot => `
            <button class="wf-button wf-button--secondary" style="padding: 15px;">
              <div style="font-weight: bold;">${slot.date}</div>
              <div style="font-size: 0.9em;">${slot.time}</div>
            </button>
          `).join('')}
        </div>
      </section>
    `
  }
};

// ===== EXPORT ALL COMPONENTS =====
const WireframeComponents = {
  Layout: LayoutComponents,
  Header: HeaderComponents,
  Hero: HeroComponents,
  Content: ContentComponents,
  Table: TableComponents,
  Wizard: WizardComponents,
  SocialProof: SocialProofComponents,
  Personalization: PersonalizationComponents,
  Form: FormComponents,
  Alert: AlertComponents,
  Industry: IndustryComponents
};

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WireframeComponents;
}

// Para uso en browser
if (typeof window !== 'undefined') {
  window.WireframeComponents = WireframeComponents;
} 