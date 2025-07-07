# 🎨 Sistema Modular de Wireframes

## Descripción General

El sistema modular permite crear wireframes conceptuales de forma escalable y mantenible. Separa la lógica de generación, los estilos CSS y los componentes reutilizables.

## Estructura del Sistema

```
wireframe-generator/
├── generator-v2.js              # Generador principal modular
├── components/
│   └── wireframe-components.js  # Biblioteca de componentes
├── styles/
│   └── wireframe-components.css # Estilos CSS separados
├── generated-wireframes/        # Salida generada
└── SISTEMA_MODULAR.md          # Esta documentación
```

## Uso Básico

### Generar Wireframes

```bash
# Usando valores por defecto
node generator-v2.js

# Especificando dominio y problema
node generator-v2.js --domain "E-commerce" --problem "Users abandon checkout process"

# Con métricas específicas
node generator-v2.js --domain "Healthcare" --metrics "appointment_bookings,user_satisfaction"
```

### Parámetros Disponibles

- `--problem`: Descripción del problema a resolver
- `--domain`: Dominio de la aplicación (Fintech, E-commerce, SaaS, Healthcare)
- `--metrics`: Métricas clave separadas por comas

## Componentes Disponibles

### Layout Components
- `container()`: Contenedor principal
- `section()`: Sección con márgenes
- `grid()`: Sistema de grillas
- `flex()`: Contenedor flexible

### Header Components
- `minimal()`: Header minimalista
- `full()`: Header completo con navegación
- `branded()`: Header con marca

### Hero Components
- `simple()`: Hero básico
- `detailed()`: Hero con beneficios
- `withImage()`: Hero con imagen

### Content Components
- `singleOption()`: Opción única recomendada
- `multipleOptions()`: Múltiples opciones
- `textContent()`: Contenido de texto

### Specialized Components
- `Table.comparison()`: Tablas comparativas
- `Wizard.steps()`: Pasos de wizard
- `SocialProof.stats()`: Estadísticas
- `Personalization.userProfile()`: Perfil de usuario
- `Form.simple()`: Formularios
- `Alert.success()`: Alertas

### Industry Components
- `Industry.fintech.creditCalculator()`: Calculadora de crédito
- `Industry.fintech.riskIndicator()`: Indicador de riesgo
- `Industry.ecommerce.productCard()`: Tarjeta de producto
- `Industry.healthcare.appointmentSlots()`: Citas médicas

## Extensión del Sistema

### Agregar Nuevos Componentes

1. **Editar `components/wireframe-components.js`**:

```javascript
// Agregar nuevo grupo de componentes
const NewComponents = {
  customComponent: (param1, param2) => `
    <div class="wf-custom-component">
      <h3>${param1}</h3>
      <p>${param2}</p>
    </div>
  `
};

// Exportar en el objeto principal
const WireframeComponents = {
  // ... componentes existentes
  New: NewComponents
};
```

2. **Agregar estilos en `styles/wireframe-components.css`**:

```css
/* ===== NEW COMPONENTS ===== */
.wf-custom-component {
  border: var(--wf-border-width) solid var(--wf-border-primary);
  padding: var(--wf-spacing-lg);
  background: var(--wf-bg-secondary);
}
```

3. **Usar en el generador**:

```javascript
// En generator-v2.js
WireframeComponents.New.customComponent('Title', 'Description')
```

### Agregar Nuevos Dominios

1. **Editar `ContentGenerators.generateDomainContent()`**:

```javascript
const domainContent = {
  // ... dominios existentes
  'NewDomain': {
    singleOption: { title: 'New Option', price: '$X', features: 'Features' },
    multipleOptions: [
      { title: 'Option 1', price: '$X', features: 'Features 1', recommended: true },
      { title: 'Option 2', price: '$Y', features: 'Features 2' }
    ],
    stats: [
      { number: '1000+', label: 'Users' },
      { number: '99%', label: 'Success Rate' }
    ],
    testimonials: [
      { quote: 'Great experience!', author: 'User A' }
    ]
  }
};
```

2. **Crear componentes específicos del dominio**:

```javascript
// En wireframe-components.js
const IndustryComponents = {
  // ... industrias existentes
  newdomain: {
    specialComponent: (data) => `
      <div class="wf-newdomain-component">
        ${data.content}
      </div>
    `
  }
};
```

### Personalizar Estilos

1. **Modificar variables CSS**:

```css
:root {
  /* Cambiar colores */
  --wf-border-primary: #your-color;
  --wf-bg-primary: #your-background;
  
  /* Cambiar tipografía */
  --wf-font-family: 'Your Font', sans-serif;
  
  /* Cambiar espaciado */
  --wf-spacing-lg: 25px;
}
```

2. **Agregar nuevos modificadores**:

```css
/* Nuevos modificadores */
.wf-card--highlighted {
  border: 3px solid var(--wf-border-accent);
  background: var(--wf-bg-highlight);
}

.wf-text--large {
  font-size: var(--wf-font-size-xl);
}
```

## Principios Cognitivos

### 1. Cognitive Load Reduction
- Presenta una sola opción recomendada
- Elimina decisiones complejas
- Usa header minimalista

### 2. Progressive Disclosure
- Muestra información en pasos
- Usa wizard components
- Header completo para navegación

### 3. Social Proof
- Incluye estadísticas y testimonios
- Usa componentes de social proof
- Header con credibilidad

### 4. Personalization
- Adapta contenido al usuario
- Usa componentes de personalización
- Header con marca personal

## Mejores Prácticas

### Consistencia Visual
- Usa el sistema de variables CSS
- Mantén el prefijo `wf-` en todas las clases
- Sigue la estructura de componentes

### Extensibilidad
- Agrupa componentes por funcionalidad
- Usa parámetros para personalización
- Documenta nuevos componentes

### Rendimiento
- Reutiliza componentes existentes
- Evita duplicar estilos
- Usa CSS externo para cacheo

### Accesibilidad
- Incluye etiquetas semánticas
- Usa contrastes adecuados
- Proporciona texto alternativo

## Flujo de Trabajo

1. **Definir Problema**: Especificar dominio y métricas
2. **Generar Wireframes**: Ejecutar el generador
3. **Revisar Salida**: Verificar HTML generado
4. **Personalizar**: Modificar componentes si es necesario
5. **Iterar**: Refinar basado en feedback

## Archivos de Salida

- `concept-cognitive-load.html`: Wireframe de carga cognitiva
- `concept-progressive-disclosure.html`: Wireframe de revelación progresiva
- `concept-social-proof.html`: Wireframe de prueba social
- `concept-personalization.html`: Wireframe de personalización
- `analysis-summary.md`: Resumen del análisis

## Próximos Pasos

1. **Integración con Prototipos**: Conectar con herramientas de prototipado
2. **Testing A/B**: Implementar framework de pruebas
3. **Métricas Avanzadas**: Agregar tracking específico
4. **Componentes Interactivos**: Incluir JavaScript para interactividad
5. **Temas Visuales**: Crear diferentes estilos visuales

## Soporte y Contribuciones

Para agregar nuevos componentes o mejorar existentes:

1. Crear componente en `wireframe-components.js`
2. Agregar estilos en `wireframe-components.css`
3. Actualizar documentación
4. Probar con diferentes dominios
5. Crear ejemplo de uso

El sistema está diseñado para ser extensible y mantenible, permitiendo que el equipo agregue nuevos componentes según las necesidades del proyecto. 