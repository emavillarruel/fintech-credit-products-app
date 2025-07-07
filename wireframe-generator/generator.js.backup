#!/usr/bin/env node

/**
 * 🎨 WIREFRAME CONCEPT GENERATOR
 * Generates 4 conceptual wireframes based on cognitive principles
 * 
 * Usage: node generator.js --problem "problem description" --domain "domain"
 */

const fs = require('fs').promises;
const path = require('path');

// Importar componentes modulares
const WireframeComponents = require('./components/wireframe-components.js');

// 🧠 Cognitive Principles Framework
const COGNITIVE_PRINCIPLES = {
  'cognitive-load': {
    name: 'Cognitive Load Reduction',
    description: 'Minimize mental effort required to process information',
    approach: 'Simplify, reduce options, clear hierarchy',
    target_users: ['impulsive', 'novice', 'overwhelmed'],
    design_patterns: ['single-choice', 'minimal-text', 'clear-cta', 'progressive-reduction']
  },
  'progressive-disclosure': {
    name: 'Progressive Disclosure',
    description: 'Reveal information gradually based on user needs',
    approach: 'Step-by-step revelation, contextual information',
    target_users: ['planners', 'detail-oriented', 'cautious'],
    design_patterns: ['wizard-flow', 'expandable-sections', 'layered-info', 'conditional-reveal']
  },
  'social-proof': {
    name: 'Social Proof & Trust',
    description: 'Use social validation to reduce uncertainty',
    approach: 'Peer comparisons, testimonials, usage stats',
    target_users: ['social', 'risk-averse', 'validation-seeking'],
    design_patterns: ['peer-usage', 'testimonials', 'popularity-indicators', 'social-recommendations']
  },
  'personalization': {
    name: 'Adaptive Personalization',
    description: 'Customize experience based on user context',
    approach: 'Dynamic content, behavior-based adaptation',
    target_users: ['experts', 'efficiency-focused', 'unique-needs'],
    design_patterns: ['dynamic-content', 'adaptive-ui', 'contextual-recommendations', 'personalized-flow']
  }
};

// 🏗️ Content Generation Helpers
const ContentGenerators = {
  generateDomainContent: (domain, type) => {
    const domainContent = {
      'Fintech': {
        singleOption: { title: 'Recommended Credit Product', price: 'Best Rate', features: 'Tailored for your profile' },
        multipleOptions: [
          { title: 'Personal Loan', price: '12% APR', features: 'Quick approval', recommended: true },
          { title: 'Credit Line', price: '8% APR', features: 'Flexible use' },
          { title: 'BNPL', price: '0% APR', features: 'Short term' }
        ],
        stats: [
          { number: '50,000+', label: 'Satisfied Customers' },
          { number: '99.8%', label: 'Approval Rate' }
        ],
        testimonials: [
          { quote: 'Got approved in 5 minutes!', author: 'Maria S.' },
          { quote: 'Best rates in the market.', author: 'Carlos M.' }
        ]
      },
      'E-commerce': {
        singleOption: { title: 'Express Checkout', price: 'FREE', features: 'One-click purchase' },
        multipleOptions: [
          { title: 'Standard Shipping', price: 'FREE', features: '5-7 days', recommended: true },
          { title: 'Express Shipping', price: '$9.99', features: '2-3 days' },
          { title: 'Next Day', price: '$19.99', features: '1 day' }
        ],
        stats: [
          { number: '1M+', label: 'Products Sold' },
          { number: '4.9/5', label: 'Customer Rating' }
        ],
        testimonials: [
          { quote: 'Super fast delivery!', author: 'Ana R.' },
          { quote: 'Great product quality.', author: 'Jose L.' }
        ]
      },
      'SaaS': {
        singleOption: { title: 'Professional Plan', price: '$99/mo', features: 'Everything you need' },
        multipleOptions: [
          { title: 'Starter', price: '$29/mo', features: 'Basic features' },
          { title: 'Professional', price: '$99/mo', features: 'Advanced tools', recommended: true },
          { title: 'Enterprise', price: '$299/mo', features: 'Full suite' }
        ],
        stats: [
          { number: '10,000+', label: 'Active Users' },
          { number: '99.9%', label: 'Uptime' }
        ],
        testimonials: [
          { quote: 'Increased our productivity 10x', author: 'Tech CEO' },
          { quote: 'Intuitive and powerful', author: 'Marketing Dir.' }
        ]
      },
      'Healthcare': {
        singleOption: { title: 'Book Appointment', price: 'Covered', features: 'Video consultation available' },
        multipleOptions: [
          { title: 'Video Call', price: 'Covered', features: 'From home', recommended: true },
          { title: 'Phone Call', price: 'Covered', features: 'Quick check' },
          { title: 'In-Person', price: 'Covered', features: 'Full exam' }
        ],
        stats: [
          { number: '5,000+', label: 'Doctors Available' },
          { number: '24/7', label: 'Support' }
        ],
        testimonials: [
          { quote: 'Very easy to use system', author: 'Patient' },
          { quote: 'Got help immediately', author: 'Family Member' }
        ]
      }
    };
    return domainContent[domain]?.[type] || domainContent['SaaS'][type];
  }
};

// 🎨 Wireframe CSS Styles
const WIREFRAME_CSS = `
/* 🎨 WIREFRAME STYLES - LOW FIDELITY */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Courier New', monospace;
  background: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

/* Layout */
.wf-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Headers */
.wf-header {
  background: #fff;
  border: 2px solid #333;
  padding: 15px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wf-logo {
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #333;
  padding: 5px 10px;
}

.wf-nav-simple {
  border: 1px solid #333;
  padding: 5px 10px;
}

.wf-nav-full {
  display: flex;
  gap: 20px;
}

.wf-nav-full span {
  border: 1px solid #333;
  padding: 5px 10px;
  cursor: pointer;
}

/* Hero sections */
.wf-hero {
  background: #fff;
  border: 2px solid #333;
  padding: 40px 20px;
  margin-bottom: 30px;
  text-align: center;
}

.wf-title {
  font-size: 2.5em;
  margin-bottom: 15px;
  border: 2px dashed #666;
  padding: 10px;
  background: #f9f9f9;
}

.wf-subtitle {
  font-size: 1.2em;
  margin-bottom: 25px;
  padding: 10px;
  border: 1px solid #999;
}

.wf-benefits {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
}

.wf-benefit {
  border: 1px solid #333;
  padding: 10px 15px;
  background: #f0f0f0;
}

/* Content sections */
.wf-content {
  background: #fff;
  border: 2px solid #333;
  padding: 30px 20px;
  margin-bottom: 20px;
}

/* Single option */
.wf-single-option {
  display: flex;
  justify-content: center;
}

.wf-option-card {
  border: 2px solid #333;
  padding: 30px;
  max-width: 400px;
  text-align: center;
}

.wf-option-card.wf-recommended {
  background: #ffffcc;
  border-color: #ff6600;
}

.wf-price {
  font-size: 2em;
  font-weight: bold;
  margin: 15px 0;
  border: 2px dashed #333;
  padding: 10px;
}

.wf-features {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #666;
  background: #f9f9f9;
}

/* Comparison table */
.wf-comparison {
  overflow-x: auto;
}

.wf-table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #333;
}

.wf-table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #e0e0e0;
  font-weight: bold;
}

.wf-table-header > div,
.wf-table-row > div {
  border: 1px solid #333;
  padding: 12px;
  text-align: center;
}

.wf-table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.wf-table-row:nth-child(even) {
  background: #f9f9f9;
}

/* Wizard */
.wf-wizard {
  text-align: center;
}

.wf-steps {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.wf-step {
  border: 2px solid #333;
  padding: 10px 20px;
  background: #f0f0f0;
}

.wf-step.wf-active {
  background: #ffcc00;
  font-weight: bold;
}

.wf-wizard-content {
  border: 2px solid #333;
  padding: 30px;
  background: #fff;
}

.wf-wizard-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

/* Social proof */
.wf-social-proof {
  text-align: center;
}

.wf-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

.wf-stat {
  border: 2px solid #333;
  padding: 20px;
  background: #f0f0f0;
}

.wf-stat-number {
  font-size: 2.5em;
  font-weight: bold;
  color: #ff6600;
}

.wf-stat-label {
  font-size: 0.9em;
  margin-top: 5px;
}

.wf-testimonials {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.wf-testimonial {
  border: 1px solid #333;
  padding: 20px;
  max-width: 250px;
  background: #f9f9f9;
}

.wf-author {
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
}

/* Personalized */
.wf-personalized {
  text-align: left;
}

.wf-user-profile {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid #333;
  background: #f0f0f0;
}

.wf-avatar {
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  background: #ccc;
  border-radius: 50%;
}

.wf-recommendations {
  display: flex;
  gap: 20px;
}

.wf-recommendation {
  border: 2px solid #333;
  padding: 20px;
  flex: 1;
  background: #fff;
}

.wf-recommendation.wf-highlighted {
  background: #ffffcc;
  border-color: #ff6600;
}

.wf-rec-reason {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 10px;
}

.wf-rec-content {
  font-size: 1.2em;
  font-weight: bold;
}

/* Buttons */
.wf-cta-primary {
  background: #333;
  color: #fff;
  border: 2px solid #333;
  padding: 12px 25px;
  font-size: 1.1em;
  cursor: pointer;
  font-family: inherit;
}

.wf-cta-primary:hover {
  background: #555;
}

.wf-cta-secondary {
  background: #fff;
  color: #333;
  border: 2px solid #333;
  padding: 12px 25px;
  font-size: 1.1em;
  cursor: pointer;
  font-family: inherit;
}

.wf-cta-secondary:hover {
  background: #f0f0f0;
}

/* Responsive */
@media (max-width: 768px) {
  .wf-benefits {
    flex-direction: column;
    align-items: center;
  }
  
  .wf-stats {
    flex-direction: column;
    align-items: center;
  }
  
  .wf-testimonials {
    flex-direction: column;
    align-items: center;
  }
  
  .wf-recommendations {
    flex-direction: column;
  }
}
`;

// 🧠 Concept Generator Functions
class WireframeGenerator {
  constructor() {
    this.outputDir = 'generated-wireframes';
  }

  async generateConcepts(problemDefinition) {
    const concepts = [];
    
    for (const [key, principle] of Object.entries(COGNITIVE_PRINCIPLES)) {
      const concept = await this.generateConcept(key, principle, problemDefinition);
      concepts.push(concept);
    }
    
    return concepts;
  }

  async generateConcept(principleKey, principle, problemDefinition) {
    const concept = {
      id: principleKey,
      name: principle.name,
      description: principle.description,
      hypothesis: this.generateHypothesis(principle, problemDefinition),
      wireframe: await this.generateWireframeHTML(principleKey, principle, problemDefinition),
      metrics: this.generateMetrics(principle, problemDefinition),
      targetUsers: principle.target_users
    };

    return concept;
  }

  generateHypothesis(principle, problemDefinition) {
    const hypotheses = {
      'cognitive-load-reduction': `Reducing cognitive load by simplifying ${problemDefinition.domain} interface will improve user ${problemDefinition.key_metrics[0]} by eliminating decision paralysis.`,
      'progressive-disclosure': `Gradually revealing ${problemDefinition.domain} information will increase user confidence by allowing them to process complexity in manageable chunks.`,
      'social-proof-trust': `Showing social validation and peer usage will reduce uncertainty in ${problemDefinition.domain} decisions by leveraging herd behavior.`,
      'adaptive-personalization': `Adapting ${problemDefinition.domain} experience to individual user context will optimize ${problemDefinition.key_metrics.join(' and ')} through relevant customization.`
    };

    const key = principle.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '');
    return hypotheses[key] || `Applying ${principle.name} to ${problemDefinition.domain} will improve user experience and ${problemDefinition.key_metrics.join(', ')}.`;
  }

  generateMetrics(principle, problemDefinition) {
    const baseMetrics = problemDefinition.key_metrics;
    const specificMetrics = {
      'cognitive-load-reduction': ['decision_time', 'completion_rate', 'error_rate'],
      'progressive-disclosure': ['step_completion', 'information_retention', 'user_confidence'],
      'social-proof-trust': ['trust_score', 'social_engagement', 'conversion_rate'],
      'adaptive-personalization': ['relevance_score', 'engagement_time', 'feature_adoption']
    };

    const key = principle.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '');
    return {
      primary: baseMetrics,
      secondary: specificMetrics[key] || []
    };
  }

  async generateWireframeHTML(principleKey, principle, problemDefinition) {
    const templates = {
      'cognitive-load': this.generateCognitiveLoadWireframe(problemDefinition),
      'progressive-disclosure': this.generateProgressiveDisclosureWireframe(problemDefinition),
      'social-proof': this.generateSocialProofWireframe(problemDefinition),
      'personalization': this.generatePersonalizationWireframe(problemDefinition)
    };

    const content = templates[principleKey] || templates['cognitive-load'];

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${principle.name} - ${problemDefinition.problem}</title>
    <style>${WIREFRAME_CSS}</style>
</head>
<body>
    <div class="wf-container">
        <div class="wf-concept-header">
            <h1>🧠 ${principle.name}</h1>
            <p><strong>Problem:</strong> ${problemDefinition.problem}</p>
            <p><strong>Approach:</strong> ${principle.approach}</p>
        </div>
        ${content}
    </div>
</body>
</html>`;
  }

  generateCognitiveLoadWireframe(problemDefinition) {
    return `
        ${WIREFRAME_COMPONENTS['minimal-header']}
        ${WIREFRAME_COMPONENTS['simple-hero']
          .replace('{{title}}', 'Simple Solution')
          .replace('{{subtitle}}', 'We recommend the perfect option for you')
          .replace('{{cta}}', 'Get Started')}
        ${WIREFRAME_COMPONENTS['single-option']
          .replace('{{option_name}}', 'Recommended Plan')
          .replace('{{price}}', '$99/month')
          .replace('{{features}}', 'Everything you need')
          .replace('{{cta}}', 'Choose This Plan')}
    `;
  }

  generateProgressiveDisclosureWireframe(problemDefinition) {
    return `
        ${WIREFRAME_COMPONENTS['full-header']}
        ${WIREFRAME_COMPONENTS['detailed-hero']
          .replace('{{title}}', 'Find Your Perfect Plan')
          .replace('{{subtitle}}', 'Answer a few questions to get personalized recommendations')
          .replace('{{cta}}', 'Start Quiz')}
        ${WIREFRAME_COMPONENTS['wizard-steps']
          .replace('{{step_title}}', 'Step 1: Tell us about your needs')
          .replace('{{step_description}}', 'This helps us recommend the right solution')}
    `;
  }

  generateSocialProofWireframe(problemDefinition) {
    return `
        ${WIREFRAME_COMPONENTS['full-header']}
        ${WIREFRAME_COMPONENTS['simple-hero']
          .replace('{{title}}', 'Join 10,000+ Happy Customers')
          .replace('{{subtitle}}', 'See why teams choose us for their needs')
          .replace('{{cta}}', 'View Plans')}
        ${WIREFRAME_COMPONENTS['social-proof-section']}
        ${WIREFRAME_COMPONENTS['comparison-table']}
    `;
  }

  generatePersonalizationWireframe(problemDefinition) {
    return `
        ${WIREFRAME_COMPONENTS['minimal-header']}
        ${WIREFRAME_COMPONENTS['simple-hero']
          .replace('{{title}}', 'Personalized for You')
          .replace('{{subtitle}}', 'Based on your profile and usage patterns')
          .replace('{{cta}}', 'See Recommendations')}
        ${WIREFRAME_COMPONENTS['personalized-recommendations']}
    `;
  }

  async saveWireframes(concepts, problemDefinition) {
    // Create output directory
    await fs.mkdir(this.outputDir, { recursive: true });

    // Save individual wireframes
    for (const concept of concepts) {
      const filename = `concept-${concept.id}.html`;
      const filepath = path.join(this.outputDir, filename);
      await fs.writeFile(filepath, concept.wireframe);
      console.log(`✅ Generated: ${filename}`);
    }

    // Save analysis summary
    const analysis = this.generateAnalysisSummary(concepts, problemDefinition);
    await fs.writeFile(path.join(this.outputDir, 'analysis-summary.md'), analysis);
    console.log(`✅ Generated: analysis-summary.md`);

    return this.outputDir;
  }

  generateAnalysisSummary(concepts, problemDefinition) {
    return `# 🧠 Wireframe Concept Analysis

## Problem Definition
**Problem**: ${problemDefinition.problem}
**Domain**: ${problemDefinition.domain}
**Target Users**: ${problemDefinition.target_users.join(', ')}
**Key Metrics**: ${problemDefinition.key_metrics.join(', ')}

## Generated Concepts

${concepts.map(concept => `
### ${concept.name}
- **File**: concept-${concept.id}.html
- **Hypothesis**: ${concept.hypothesis}
- **Target Users**: ${concept.targetUsers.join(', ')}
- **Primary Metrics**: ${concept.metrics.primary.join(', ')}
- **Secondary Metrics**: ${concept.metrics.secondary.join(', ')}
`).join('\n')}

## Next Steps
1. **Prototype Testing**: Test each concept with 5-10 users from target groups
2. **Metric Collection**: Measure key metrics for each concept
3. **Comparative Analysis**: Determine which approach performs best
4. **Hybrid Development**: Combine best elements from winning concepts

## Validation Framework
- **A/B Testing**: Compare concepts head-to-head
- **User Interviews**: Understand qualitative preferences
- **Analytics**: Track behavioral metrics
- **Statistical Analysis**: Ensure significance of results

---
*Generated by Wireframe Concept Generator*
*Based on Cognitive Design Principles Framework*
`;
  }
}

// 🚀 CLI Interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🎨 WIREFRAME CONCEPT GENERATOR

Usage: node generator.js [options]

Options:
  --problem "description"    Problem description
  --domain "domain"          Domain/industry
  --users "user1,user2"      Target user types
  --metrics "metric1,metric2" Key metrics to optimize

Example:
  node generator.js \\
    --problem "Users don't understand subscription pricing tiers" \\
    --domain "SaaS" \\
    --users "price-sensitive,feature-focused" \\
    --metrics "conversion,comprehension"
    `);
    return;
  }

  // Parse arguments
  const problemDefinition = {
    problem: getArgValue(args, '--problem') || 'Users have difficulty with decision making',
    domain: getArgValue(args, '--domain') || 'General',
    target_users: getArgValue(args, '--users')?.split(',') || ['general'],
    key_metrics: getArgValue(args, '--metrics')?.split(',') || ['conversion', 'satisfaction'],
    context: getArgValue(args, '--context') || 'Standard web application'
  };

  console.log('🚀 Generating wireframe concepts...');
  console.log('📋 Problem:', problemDefinition.problem);
  console.log('🏢 Domain:', problemDefinition.domain);
  console.log('👥 Users:', problemDefinition.target_users.join(', '));
  console.log('📊 Metrics:', problemDefinition.key_metrics.join(', '));
  
  const generator = new WireframeGenerator();
  const concepts = await generator.generateConcepts(problemDefinition);
  const outputDir = await generator.saveWireframes(concepts, problemDefinition);
  
  console.log(`\n✅ Generated ${concepts.length} wireframe concepts in: ${outputDir}/`);
  console.log('🔍 Open the HTML files in your browser to preview');
  console.log('📊 Check analysis-summary.md for detailed analysis');
}

function getArgValue(args, flag) {
  const index = args.indexOf(flag);
  return index !== -1 && index + 1 < args.length ? args[index + 1] : null;
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { WireframeGenerator, COGNITIVE_PRINCIPLES, WIREFRAME_COMPONENTS }; 