# ⚡ QUICK START - Wireframe Concept Generator

Genera 4 wireframes conceptuales en **menos de 2 minutos** para validar rápidamente ideas de UX.

## 🚀 **Uso Inmediato (30 segundos)**

```bash
# 1. Navegar al directorio
cd wireframe-generator

# 2. Ejecutar con tu problema
node generator.js \
  --problem "Your UX problem description" \
  --domain "Your industry" \
  --users "user-type1,user-type2" \
  --metrics "metric1,metric2"
```

## 💡 **Ejemplos Listos para Copiar**

### **Fintech - Productos de Crédito**
```bash
node generator.js \
  --problem "Users confused between credit products" \
  --domain "Fintech" \
  --users "novice,expert,impulsive" \
  --metrics "comprehension,confidence,speed"
```

### **E-commerce - Checkout**
```bash
node generator.js \
  --problem "High checkout abandonment rate" \
  --domain "E-commerce" \
  --users "mobile,desktop,guest" \
  --metrics "completion,trust,conversion"
```

### **SaaS - Pricing**
```bash
node generator.js \
  --problem "Users don't understand pricing tiers" \
  --domain "SaaS" \
  --users "small-business,enterprise" \
  --metrics "conversion,comprehension"
```

### **Healthcare - Telemedicine**
```bash
node generator.js \
  --problem "Patients struggle with appointment booking" \
  --domain "Healthcare" \
  --users "elderly,tech-savvy,first-time" \
  --metrics "booking,satisfaction,completion"
```

### **Education - Course Selection**
```bash
node generator.js \
  --problem "Students overwhelmed by course catalog" \
  --domain "Education" \
  --users "undergraduate,graduate,adult-learner" \
  --metrics "findability,enrollment,satisfaction"
```

## 📂 **Output Generado**

Después de ejecutar el comando, obtienes:

```
generated-wireframes/
├── concept-cognitive-load.html        ← Simplicidad extrema
├── concept-progressive-disclosure.html ← Revelación gradual  
├── concept-social-proof.html          ← Validación social
├── concept-personalization.html       ← Personalización
└── analysis-summary.md                ← Análisis comparativo
```

## 🔍 **Proceso de Validación (5 minutos)**

### **1. Preview Rápido**
```bash
# Abrir wireframes en navegador
open generated-wireframes/*.html
```

### **2. Análisis Inicial**
- Revisar `analysis-summary.md`
- Identificar hipótesis más prometedoras
- Comparar enfoque por tipo de usuario

### **3. Priorización**
- ¿Cuál resuelve mejor el problema core?
- ¿Cuál es más fácil de implementar?
- ¿Cuál tiene métricas más claras?

## 🎯 **Casos de Uso Prácticos**

### **Design Sprint - Día 2**
```bash
# Problema identificado en research
node generator.js \
  --problem "Problem from user interviews" \
  --domain "Your domain" \
  --users "personas-identified" \
  --metrics "kpis-defined"

# Output: 4 wireframes para votar
```

### **Stakeholder Alignment**
```bash
# Múltiples enfoques para discusión
node generator.js \
  --problem "Business problem statement" \
  --domain "Industry" \
  --users "target-segments" \
  --metrics "business-kpis"

# Output: Opciones objetivas basadas en ciencia
```

### **Quick Ideation**
```bash
# Exploración rápida de alternativas
node generator.js \
  --problem "Current pain point" \
  --domain "Product area" \
  --users "user-types" \
  --metrics "success-metrics"

# Output: Puntos de partida para iteración
```

## 🔄 **Iteración Rápida**

### **Refinar Problema**
```bash
# Versión 1: Problema general
node generator.js \
  --problem "Users don't understand the product" \
  
# Versión 2: Problema específico  
node generator.js \
  --problem "First-time users can't find the main CTA"
```

### **Segmentar Usuarios**
```bash
# Versión 1: Usuarios generales
--users "general,new,experienced"

# Versión 2: Usuarios específicos
--users "mobile-only,desktop-power,accessibility"
```

### **Ajustar Métricas**
```bash
# Versión 1: Métricas genéricas
--metrics "satisfaction,usability"

# Versión 2: Métricas específicas
--metrics "task-completion,time-to-value,error-recovery"
```

## 📊 **Interpretación de Resultados**

### **Cognitive Load Reduction**
- **Cuándo usar**: Usuarios abrumados, decisiones complejas
- **Fortaleza**: Simplicidad, velocidad
- **Weakness**: Puede perder funcionalidad

### **Progressive Disclosure**
- **Cuándo usar**: Procesos largos, mucha información
- **Fortaleza**: Proceso guiado, no abruma
- **Weakness**: Puede ser lento

### **Social Proof**
- **Cuándo usar**: Decisiones de riesgo, nuevos usuarios
- **Fortaleza**: Reduce incertidumbre
- **Weakness**: Necesita data social real

### **Personalization**
- **Cuándo usar**: Usuarios expertos, contexto variable
- **Fortaleza**: Máxima relevancia
- **Weakness**: Complejidad técnica alta

## 🛠️ **Personalización Rápida**

### **Cambiar Componentes**
Edita `generator.js` línea ~48:
```javascript
'custom-component': '<div class="custom">Tu HTML</div>'
```

### **Agregar Industria**
Crea templates específicos para tu dominio:
```javascript
if (problemDefinition.domain === 'Healthcare') {
  // Componentes específicos de healthcare
}
```

### **Métricas Customizadas**
Ajusta métricas por dominio:
```javascript
const domainMetrics = {
  'Fintech': ['trust', 'comprehension', 'conversion'],
  'Healthcare': ['accessibility', 'privacy', 'completion']
};
```

## 🚨 **Troubleshooting**

### **"Command not found"**
```bash
# Verificar Node.js
node --version  # Debe ser 14+

# Verificar ubicación
pwd  # Debe estar en wireframe-generator/
```

### **"No arguments provided"**
```bash
# Usar ejemplo base
node generator.js \
  --problem "Test problem" \
  --domain "Test" \
  --users "user1" \
  --metrics "metric1"
```

### **Wireframes no abren**
```bash
# Verificar archivos generados
ls generated-wireframes/

# Abrir manualmente
open generated-wireframes/concept-cognitive-load.html
```

## 💡 **Pro Tips**

### **Problema Específico > General**
```bash
# ❌ Malo
--problem "Users are confused"

# ✅ Bueno  
--problem "First-time users can't distinguish between 3 pricing tiers"
```

### **Usuarios Concretos > Abstractos**
```bash
# ❌ Malo
--users "beginners,advanced"

# ✅ Bueno
--users "first-time-buyer,returning-customer,enterprise-admin"
```

### **Métricas Medibles > Vagas**
```bash
# ❌ Malo
--metrics "usability,satisfaction"

# ✅ Bueno
--metrics "task-completion-rate,time-to-decision,error-rate"
```

---

**⚡ Total time: 2 minutos para generar → 5 minutos para evaluar → Decisión informada**  
**🎯 Goal: De problema a wireframes validables en <10 minutos**  
**🔄 Outcome: Conceptos científicamente fundamentados listos para testing** 