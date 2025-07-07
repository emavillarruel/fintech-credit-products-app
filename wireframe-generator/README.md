# 🎨 Wireframe Generator - Sistema Modular

Un sistema escalable y modular para generar wireframes conceptuales basados en principios cognitivos.

## ✨ Características Principales

- **🧠 4 Principios Cognitivos**: Carga cognitiva, revelación progresiva, prueba social, personalización
- **🏗️ Componentes Modulares**: Sistema de componentes reutilizables y extensibles
- **🎨 CSS Separado**: Estilos mantenibles con variables CSS
- **🌍 Multi-dominio**: Soporte para Fintech, E-commerce, SaaS, Healthcare
- **📱 Responsive**: Diseño adaptable a diferentes dispositivos
- **⚡ Extensible**: Fácil agregar nuevos componentes y dominios

## 🚀 Inicio Rápido

### Instalación
```bash
cd wireframe-generator
npm install
```

### Uso Básico
```bash
# Generar wireframes con valores por defecto
node generator-v2.js

# Especificar dominio y problema
node generator-v2.js --domain "Fintech" --problem "Users struggle with credit options"

# Con métricas específicas
node generator-v2.js --domain "E-commerce" --metrics "conversion,satisfaction,completion"
```

### Generar Ejemplos
```bash
# Ejecutar script de ejemplos para múltiples dominios
./generate-example.sh
```

## 📁 Estructura del Sistema

```
wireframe-generator/
├── generator-v2.js                 # 🔧 Generador principal modular
├── components/
│   └── wireframe-components.js     # 🧩 Biblioteca de componentes
├── styles/
│   └── wireframe-components.css    # 🎨 Estilos CSS modulares
├── generated-wireframes/           # 📄 Salida de wireframes
├── examples/                       # 📋 Ejemplos por dominio
├── generate-example.sh             # 🚀 Script de ejemplos
├── SISTEMA_MODULAR.md             # 📖 Documentación técnica
└── README.md                      # 📚 Esta documentación
```

## 🧩 Componentes Disponibles

### Layout
- `container()` - Contenedor principal
- `grid()` - Sistema de grillas responsivo
- `flex()` - Contenedores flexibles

### Headers
- `minimal()` - Header minimalista
- `full()` - Header completo con navegación
- `branded()` - Header con marca

### Heroes
- `simple()` - Hero básico
- `detailed()` - Hero con beneficios
- `withImage()` - Hero con imagen

### Content
- `singleOption()` - Opción única recomendada
- `multipleOptions()` - Múltiples opciones
- `textContent()` - Contenido de texto

### Especializados
- `Table.comparison()` - Tablas comparativas
- `Wizard.steps()` - Wizards paso a paso
- `SocialProof.stats()` - Estadísticas sociales
- `Personalization.userProfile()` - Perfiles de usuario
- `Form.simple()` - Formularios
- `Alert.*()` - Alertas y notificaciones

### Industria-Específicos
- `Industry.fintech.*` - Componentes fintech
- `Industry.ecommerce.*` - Componentes e-commerce
- `Industry.healthcare.*` - Componentes salud

## 🧠 Principios Cognitivos

### 1. Cognitive Load Reduction
**Objetivo**: Simplificar decisiones eliminando opciones innecesarias
- Presenta una sola opción recomendada
- Interface minimalista
- Mensajes claros y directos

### 2. Progressive Disclosure
**Objetivo**: Revelar información gradualmente
- Procesos divididos en pasos
- Información contextual
- Navegación guiada

### 3. Social Proof
**Objetivo**: Generar confianza a través de validación social
- Testimonios de usuarios
- Estadísticas de uso
- Ratings y reviews

### 4. Personalization
**Objetivo**: Adaptar experiencia al contexto individual
- Recomendaciones personalizadas
- Contenido relevante
- Historial de usuario

## 🎯 Dominios Soportados

### 🏦 Fintech
- Productos de crédito
- Calculadoras financieras
- Indicadores de riesgo
- Procesos de aplicación

### 🛒 E-commerce
- Proceso de checkout
- Tarjetas de producto
- Opciones de envío
- Carrito de compras

### 💼 SaaS
- Planes de suscripción
- Comparadores de features
- Onboarding de usuarios
- Dashboards

### 🏥 Healthcare
- Reserva de citas
- Herramientas de accesibilidad
- Perfiles médicos
- Teleconsultas

## 🛠️ Extensión del Sistema

### Agregar Nuevos Componentes

1. **Crear componente en `components/wireframe-components.js`**:
```javascript
const NewComponents = {
  customCard: (title, content) => `
    <div class="wf-custom-card">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
  `
};
```

2. **Agregar estilos en `styles/wireframe-components.css`**:
```css
.wf-custom-card {
  border: var(--wf-border-width) solid var(--wf-border-primary);
  padding: var(--wf-spacing-lg);
}
```

3. **Usar en generador**:
```javascript
WireframeComponents.New.customCard('Title', 'Content')
```

### Agregar Nuevos Dominios

Editar `ContentGenerators.generateDomainContent()` en `generator-v2.js`:
```javascript
'NewDomain': {
  singleOption: { title: 'Option', price: '$X', features: 'Features' },
  stats: [{ number: '1000+', label: 'Users' }],
  testimonials: [{ quote: 'Great!', author: 'User' }]
}
```

## 📊 Archivos de Salida

Cada ejecución genera:
- `concept-cognitive-load.html` - Wireframe de carga cognitiva
- `concept-progressive-disclosure.html` - Wireframe de revelación progresiva
- `concept-social-proof.html` - Wireframe de prueba social
- `concept-personalization.html` - Wireframe de personalización
- `analysis-summary.md` - Resumen con hipótesis y métricas

## 🎨 Personalización de Estilos

Modificar variables en `styles/wireframe-components.css`:
```css
:root {
  --wf-border-primary: #your-color;
  --wf-bg-primary: #your-background;
  --wf-font-family: 'Your Font', sans-serif;
}
```

## 📖 Documentación Adicional

- **[SISTEMA_MODULAR.md](SISTEMA_MODULAR.md)** - Documentación técnica completa
- **[QUICK_START.md](QUICK_START.md)** - Guía de inicio rápido
- **Archivos de ejemplo en `examples/`** - Casos de uso por dominio

## 🤝 Contribuciones

Para contribuir:
1. Agregar componentes siguiendo la estructura existente
2. Documentar nuevos componentes
3. Probar con diferentes dominios
4. Actualizar documentación

## 📈 Próximos Pasos

- [ ] Integración con herramientas de prototipado
- [ ] Framework de testing A/B
- [ ] Componentes interactivos con JavaScript
- [ ] Temas visuales alternativos
- [ ] Métricas avanzadas de usabilidad

## 🔧 Troubleshooting

### Error: "principleKey is not defined"
- Verificar que todas las funciones reciban `principleKey` como parámetro

### CSS no se carga
- Verificar que `styles/wireframe-components.css` existe
- Comprobar la ruta relativa en el HTML generado

### Componentes no aparecen
- Verificar import de `wireframe-components.js`
- Comprobar que el componente esté exportado correctamente

---

**Versión**: 2.0 - Sistema Modular  
**Mantenido por**: Equipo de UX Research  
**Licencia**: MIT 