/**
 * 🎨 WIREFRAME GENERATOR V2 - MODULAR SYSTEM
 * Sistema modular de generación de wireframes conceptuales
 * Usa componentes externos y CSS separado
 */

const fs = require('fs').promises;
const path = require('path');

// Importar componentes modulares
const WireframeComponents = require('./components/wireframe-components.js');

// 🧠 Cognitive Principles Framework
const COGNITIVE_PRINCIPLES = {
  'cognitive-load': {
    name: 'Cognitive Load Reduction',
    description: 'Reduce mental effort required to process information',
    approach: 'Simplify choices and present single recommended option',
    target_users: ['overwhelmed users', 'decision-fatigued users']
  },
  'progressive-disclosure': {
    name: 'Progressive Disclosure',
    description: 'Present information in digestible chunks',
    approach: 'Break complex processes into guided steps',
    target_users: ['novice users', 'process-oriented users']
  },
  'social-proof': {
    name: 'Social Proof & Trust',
    description: 'Leverage social validation to build confidence',
    approach: 'Display testimonials, usage stats, and peer endorsements',
    target_users: ['skeptical users', 'trust-seeking users']
  },
  'personalization': {
    name: 'Adaptive Personalization',
    description: 'Tailor experience based on individual context',
    approach: 'Customize content and recommendations using user data',
    target_users: ['returning users', 'context-specific users']
  }
};

// 🏗️ Content Generation Helpers
const ContentGenerators = {
  generateDomainContent: (domain, type) => {
    const domainContent = {
      'Fintech': {
        singleOption: { title: 'Recommended Credit Product', price: 'Best Rate Available', features: 'Tailored for your profile' },
        multipleOptions: [
          { title: 'Personal Loan', price: '12% APR', features: 'Quick approval\nUp to $50,000', recommended: true },
          { title: 'Credit Line', price: '8% APR', features: 'Flexible use\nRevolving credit' },
          { title: 'Buy Now Pay Later', price: '0% APR', features: 'Short term\nNo interest' }
        ],
        stats: [
          { number: '50,000+', label: 'Satisfied Customers' },
          { number: '99.8%', label: 'Approval Rate' },
          { number: '2 min', label: 'Average Process Time' }
        ],
        testimonials: [
          { quote: 'Got approved in 5 minutes and the rate was exactly what I needed!', author: 'Maria S.' },
          { quote: 'Best rates in the market and super transparent process.', author: 'Carlos M.' }
        ],
        userProfile: { name: 'Maria', context: 'Based on your credit score (740) and income' },
        recommendations: [
          { title: 'Recommended for You', reason: 'Perfect for your profile', content: 'Personal Loan - 12% APR', highlighted: true },
          { title: 'Alternative Option', reason: 'Flexible payment', content: 'Credit Line - 8% APR', highlighted: false }
        ]
      },
      'E-commerce': {
        singleOption: { title: 'Express Checkout', price: 'FREE', features: 'One-click purchase' },
        multipleOptions: [
          { title: 'Standard Shipping', price: 'FREE', features: '5-7 business days', recommended: true },
          { title: 'Express Shipping', price: '$9.99', features: '2-3 business days' },
          { title: 'Next Day', price: '$19.99', features: '1 business day' }
        ],
        stats: [
          { number: '1M+', label: 'Products Sold' },
          { number: '4.9/5', label: 'Customer Rating' },
          { number: '24hrs', label: 'Average Shipping' }
        ],
        testimonials: [
          { quote: 'Super fast delivery and great quality products!', author: 'Ana R.' },
          { quote: 'Best online shopping experience I\'ve had.', author: 'Jose L.' }
        ],
        userProfile: { name: 'Ana', context: 'Based on your previous purchases' },
        recommendations: [
          { title: 'Recommended for You', reason: 'Similar to your last order', content: 'Express Shipping - $9.99', highlighted: true },
          { title: 'Save Money', reason: 'Standard option', content: 'Free Shipping - 5-7 days', highlighted: false }
        ]
      },
      'SaaS': {
        singleOption: { title: 'Professional Plan', price: '$99/month', features: 'Everything you need to grow' },
        multipleOptions: [
          { title: 'Starter', price: '$29/month', features: 'Basic features\nUp to 10 users' },
          { title: 'Professional', price: '$99/month', features: 'Advanced tools\nUp to 50 users', recommended: true },
          { title: 'Enterprise', price: '$299/month', features: 'Full suite\nUnlimited users' }
        ],
        stats: [
          { number: '10,000+', label: 'Active Users' },
          { number: '99.9%', label: 'Uptime' },
          { number: '24/7', label: 'Support' }
        ],
        testimonials: [
          { quote: 'Increased our team productivity by 300%!', author: 'Tech CEO' },
          { quote: 'Intuitive interface and powerful features.', author: 'Marketing Director' }
        ],
        userProfile: { name: 'John', context: 'Based on your team size (25 people)' },
        recommendations: [
          { title: 'Recommended for You', reason: 'Perfect for your team size', content: 'Professional Plan - $99/month', highlighted: true },
          { title: 'Room to Grow', reason: 'Scale as you expand', content: 'Enterprise Plan - $299/month', highlighted: false }
        ]
      },
      'Healthcare': {
        singleOption: { title: 'Book Appointment', price: 'Covered by Insurance', features: 'Video consultation available' },
        multipleOptions: [
          { title: 'Video Consultation', price: 'Covered', features: 'From home\nSame-day available', recommended: true },
          { title: 'Phone Consultation', price: 'Covered', features: 'Quick check\nImmediate' },
          { title: 'In-Person Visit', price: 'Covered', features: 'Full examination\nNext week' }
        ],
        stats: [
          { number: '5,000+', label: 'Doctors Available' },
          { number: '24/7', label: 'Support' },
          { number: '15min', label: 'Average Wait Time' }
        ],
        testimonials: [
          { quote: 'Very easy to use system and quick response.', author: 'Patient' },
          { quote: 'Got the help I needed immediately.', author: 'Family Member' }
        ],
        userProfile: { name: 'Sarah', context: 'Based on your medical history' },
        recommendations: [
          { title: 'Recommended for You', reason: 'Convenient for your schedule', content: 'Video Consultation - Today', highlighted: true },
          { title: 'Alternative', reason: 'If you need immediate help', content: 'Phone Call - Now', highlighted: false }
        ]
      }
    };
    return domainContent[domain]?.[type] || domainContent['SaaS'][type];
  }
};

// 🧠 Wireframe Generation Class
class WireframeGenerator {
  constructor() {
    this.outputDir = 'generated-wireframes';
    this.cssPath = './styles/wireframe-components.css';
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
      hypothesis: this.generateHypothesis(principleKey, principle, problemDefinition),
      wireframe: await this.generateWireframeHTML(principleKey, principle, problemDefinition),
      metrics: this.generateMetrics(principleKey, principle, problemDefinition),
      targetUsers: principle.target_users
    };

    return concept;
  }

  generateHypothesis(principleKey, principle, problemDefinition) {
    const hypotheses = {
      'cognitive-load': `Reducing cognitive load by simplifying ${problemDefinition.domain} interface will improve user ${problemDefinition.key_metrics[0]} by eliminating decision paralysis and information overload.`,
      'progressive-disclosure': `Gradually revealing ${problemDefinition.domain} information through guided steps will increase user confidence and completion rates by allowing them to process complexity in manageable chunks.`,
      'social-proof': `Showing social validation and peer usage patterns will reduce uncertainty in ${problemDefinition.domain} decisions by leveraging social proof and building trust through testimonials.`,
      'personalization': `Adapting ${problemDefinition.domain} experience to individual user context will optimize ${problemDefinition.key_metrics.join(' and ')} through relevant customization and targeted recommendations.`
    };

    return hypotheses[principleKey] || `Applying ${principle.name} to ${problemDefinition.domain} will improve user experience and ${problemDefinition.key_metrics.join(', ')}.`;
  }

  generateMetrics(principleKey, principle, problemDefinition) {
    const baseMetrics = problemDefinition.key_metrics;
    const specificMetrics = {
      'cognitive-load': ['decision_time', 'completion_rate', 'error_rate', 'user_satisfaction'],
      'progressive-disclosure': ['step_completion', 'information_retention', 'user_confidence', 'abandonment_rate'],
      'social-proof': ['trust_score', 'social_engagement', 'conversion_rate', 'referral_rate'],
      'personalization': ['relevance_score', 'engagement_time', 'feature_adoption', 'return_rate']
    };

    return {
      primary: baseMetrics,
      secondary: specificMetrics[principleKey] || []
    };
  }

  async generateWireframeHTML(principleKey, principle, problemDefinition) {
    const wireframeContent = this.generateWireframeContent(principleKey, problemDefinition);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${principle.name} - ${problemDefinition.problem}</title>
    <link rel="stylesheet" href="${this.cssPath}">
</head>
<body>
    ${WireframeComponents.Layout.container(`
        <div class="wf-concept-header">
            <h1>🧠 ${principle.name}</h1>
            <p><strong>Problem:</strong> ${problemDefinition.problem}</p>
            <p><strong>Domain:</strong> ${problemDefinition.domain}</p>
            <p><strong>Approach:</strong> ${principle.approach}</p>
        </div>
        ${wireframeContent}
    `)}
</body>
</html>`;
  }

  generateWireframeContent(principleKey, problemDefinition) {
    const content = ContentGenerators.generateDomainContent(problemDefinition.domain, 'all');
    
    switch (principleKey) {
      case 'cognitive-load':
        return this.generateCognitiveLoadWireframe(problemDefinition, content);
      case 'progressive-disclosure':
        return this.generateProgressiveDisclosureWireframe(problemDefinition, content);
      case 'social-proof':
        return this.generateSocialProofWireframe(problemDefinition, content);
      case 'personalization':
        return this.generatePersonalizationWireframe(problemDefinition, content);
      default:
        return this.generateCognitiveLoadWireframe(problemDefinition, content);
    }
  }

  generateCognitiveLoadWireframe(problemDefinition, content) {
    const domainContent = ContentGenerators.generateDomainContent(problemDefinition.domain, 'singleOption');
    
    return `
        ${WireframeComponents.Header.minimal(`${problemDefinition.domain} App`, 'Menu')}
        ${WireframeComponents.Hero.simple(
          'Simple Solution',
          'We recommend the perfect option for you - no overwhelming choices',
          'Get Started'
        )}
        ${WireframeComponents.Content.singleOption(
          domainContent.title,
          domainContent.price,
          domainContent.features,
          'Choose This Option'
        )}
        ${WireframeComponents.Content.textContent(
          'Why This Works',
          'By removing choice paralysis and presenting a single optimized recommendation, users can make decisions faster and with more confidence.',
          'center'
        )}
    `;
  }

  generateProgressiveDisclosureWireframe(problemDefinition, content) {
    const steps = ['Your Needs', 'Options', 'Recommendation'];
    
    return `
        ${WireframeComponents.Header.full(`${problemDefinition.domain} Wizard`, ['Home', 'Help', 'Support'])}
        ${WireframeComponents.Hero.detailed(
          'Find Your Perfect Solution',
          'Answer a few questions to get personalized recommendations',
          ['Step by step', 'Personalized', 'No pressure'],
          'Start Process'
        )}
        ${WireframeComponents.Wizard.steps(steps, 0)}
        ${WireframeComponents.Wizard.stepContent(
          'Step 1: Tell us about your needs',
          'This helps us understand what solution would work best for you. Your information is private and secure.',
          'Back to Home',
          'Next Step'
        )}
        ${WireframeComponents.Content.textContent(
          'Progressive Approach',
          'By breaking down complex decisions into manageable steps, users feel more in control and make better-informed choices.',
          'center'
        )}
    `;
  }

  generateSocialProofWireframe(problemDefinition, content) {
    const domainContent = ContentGenerators.generateDomainContent(problemDefinition.domain, 'stats');
    const testimonials = ContentGenerators.generateDomainContent(problemDefinition.domain, 'testimonials');
    
    return `
        ${WireframeComponents.Header.full(`${problemDefinition.domain} Platform`, ['Home', 'Features', 'Reviews', 'Contact'])}
        ${WireframeComponents.Hero.detailed(
          'Join Thousands of Satisfied Users',
          'See why people trust us with their financial decisions',
          ['Trusted by thousands', 'Verified reviews', 'Proven results'],
          'Join Now'
        )}
        ${WireframeComponents.SocialProof.stats(domainContent)}
        ${WireframeComponents.SocialProof.testimonials(testimonials)}
        ${WireframeComponents.Content.textContent(
          'Building Trust Through Social Proof',
          'When users see that others have successfully used our platform, they feel more confident about their own decisions.',
          'center'
        )}
    `;
  }

  generatePersonalizationWireframe(problemDefinition, content) {
    const domainProfile = ContentGenerators.generateDomainContent(problemDefinition.domain, 'userProfile');
    const domainRecs = ContentGenerators.generateDomainContent(problemDefinition.domain, 'recommendations');
    
    return `
        ${WireframeComponents.Header.branded(`${problemDefinition.domain} Personal`, ['Dashboard', 'Profile', 'Settings'])}
        ${WireframeComponents.Hero.simple(
          `Welcome back, ${domainProfile.name}!`,
          'Your personalized recommendations are ready',
          'View Recommendations'
        )}
        ${WireframeComponents.Personalization.fullPersonalized(
          WireframeComponents.Personalization.userProfile(domainProfile.name, domainProfile.context),
          domainRecs
        )}
        ${WireframeComponents.Content.textContent(
          'Personalized Experience',
          'By adapting to individual user contexts and preferences, we can provide more relevant and effective solutions.',
          'center'
        )}
    `;
  }

  async saveWireframes(concepts, problemDefinition) {
    // Create output directory
    await fs.mkdir(this.outputDir, { recursive: true });
    
    const savedFiles = [];
    
    for (const concept of concepts) {
      const filename = `concept-${concept.id}.html`;
      const filepath = path.join(this.outputDir, filename);
      
      await fs.writeFile(filepath, concept.wireframe);
      savedFiles.push(filename);
    }
    
    // Generate summary
    const summary = this.generateAnalysisSummary(concepts, problemDefinition);
    await fs.writeFile(path.join(this.outputDir, 'analysis-summary.md'), summary);
    
    return savedFiles;
  }

  generateAnalysisSummary(concepts, problemDefinition) {
    return `# 🧠 Wireframe Analysis Summary

## Problem Definition
**Problem:** ${problemDefinition.problem}
**Domain:** ${problemDefinition.domain}
**Key Metrics:** ${problemDefinition.key_metrics.join(', ')}

## Generated Concepts

${concepts.map(concept => `### ${concept.name}
**Hypothesis:** ${concept.hypothesis}

**Target Users:** ${concept.targetUsers.join(', ')}

**Primary Metrics:** ${concept.metrics.primary.join(', ')}
**Secondary Metrics:** ${concept.metrics.secondary.join(', ')}

**Wireframe:** \`concept-${concept.id}.html\`

---`).join('\n')}

## Implementation Recommendations

1. **Test All Concepts:** A/B test each wireframe with real users to validate hypotheses
2. **Measure Key Metrics:** Track both primary and secondary metrics for each concept
3. **Iterate Based on Data:** Use results to inform design decisions and optimizations
4. **Consider Hybrid Approaches:** Combine successful elements from different concepts

## Next Steps

1. Create interactive prototypes based on these wireframes
2. Set up measurement framework for key metrics
3. Recruit test users from target segments
4. Plan A/B testing strategy
5. Define success criteria for each concept

Generated on: ${new Date().toISOString()}
`;
  }
}

// 🚀 Main Function
async function main() {
  const args = process.argv.slice(2);
  
  // Default problem definition
  const problemDefinition = {
    problem: getArgValue(args, '--problem') || 'Users struggle to understand and choose the right financial product',
    domain: getArgValue(args, '--domain') || 'Fintech',
    key_metrics: getArgValue(args, '--metrics')?.split(',') || ['conversion_rate', 'user_satisfaction', 'task_completion']
  };

  console.log('🎨 Wireframe Generator V2 - Modular System');
  console.log('==========================================\n');
  
  console.log('📋 Problem Definition:');
  console.log(`Problem: ${problemDefinition.problem}`);
  console.log(`Domain: ${problemDefinition.domain}`);
  console.log(`Key Metrics: ${problemDefinition.key_metrics.join(', ')}\n`);

  const generator = new WireframeGenerator();
  
  try {
    console.log('🧠 Generating concepts...');
    const concepts = await generator.generateConcepts(problemDefinition);
    
    console.log('💾 Saving wireframes...');
    const savedFiles = await generator.saveWireframes(concepts, problemDefinition);
    
    console.log('✅ Generation complete!');
    console.log(`📁 Output directory: ${generator.outputDir}`);
    console.log(`📄 Files generated: ${savedFiles.length + 1}`);
    console.log('   - analysis-summary.md');
    savedFiles.forEach(file => console.log(`   - ${file}`));
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// 🔧 Utility Functions
function getArgValue(args, flag) {
  const index = args.indexOf(flag);
  return index !== -1 && index + 1 < args.length ? args[index + 1] : null;
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = WireframeGenerator; 