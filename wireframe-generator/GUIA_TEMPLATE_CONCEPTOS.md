# Guía para Generar Conceptos Consistentes

## 📋 Estructura Estándar

Para asegurar consistencia entre todos los conceptos, **SIEMPRE** usar esta estructura:

### 1. Archivos CSS Requeridos
```html
<link rel="stylesheet" href="../../styles/mobile-simulator.css">
<link rel="stylesheet" href="../styles/concept-pages.css">
<link rel="stylesheet" href="../styles/concept-simulator.css">
```

### 2. Estructura HTML Base
Usar `template-conceito-base.html` como punto de partida para TODOS los conceptos.

## 🎨 Estándares de Diseño

### ✅ SIEMPRE Aplicar:
- **Sin emojis/iconografía**: Diseño limpio y profesional
- **Esquema monocromático**: Blancos, grises y transparencias
- **Botones seleccionados**: Fondo blanco con texto negro
- **Scroll horizontal**: En cards de comparación
- **Glass-morphism**: `backdrop-filter: blur(10px)`

### ❌ NUNCA Usar:
- Emojis en títulos, secciones o contenido
- Colores llamativos (azules, verdes, rojos)
- Gradients en botones (excepto disabled)
- Iconografía decorativa

## 🔧 Reemplazos de Template

Al usar `template-conceito-base.html`, reemplazar estos placeholders:

### Información Básica
- `[LETRA]` → A, B, C, D
- `[TITULO]` → Título corto del concepto
- `[TITULO_NAVEGACION]` → Nombre en navegación
- `[TITULO_HERO]` → Título principal del hero
- `[SUBTITULO_HERO]` → Subtítulo línea 1
- `[SUBTITULO_HERO_LINEA2]` → Subtítulo línea 2

### Comparación (Si aplica)
- `[TITULO_COMPARACION]` → "Compare as opções"
- `[DESCRIPCION_COMPARACION]` → "Deslize para ver as diferenças"
- `[OPCION_1_TITULO]` → Nombre opción 1
- `[OPCION_1_TAG]` → Tag descriptivo
- `[LABEL_1]`, `[VALOR_1]` → Detalles de la opción

### Preguntas y Respuestas
- `[PREGUNTA_1]` → Pregunta específica del concepto
- `[RESPUESTA_1A]` → Primera opción de respuesta
- `[RESPUESTA_1B]` → Segunda opción de respuesta
- `[TEXTO_BOTON_INICIAL]` → "Ver Minha Recomendação"
- `[TEXTO_BOTON_COMPLETO]` → "Ver Minha Recomendação"

### Modal de Información
- `[PRINCIPIO_COGNITIVO]` → Principio UX aplicado
- `[RAZON_1_TITULO]` → Por qué funciona
- `[HIPOTESIS_CONCEPTO]` → Hipótesis específica
- `[METRICA_NEGOCIO_1]` → Métricas de impacto
- `[METRICA_USUARIO_1]` → Métricas de usuario

## 💻 JavaScript Personalizable

### Lógica de Scoring
Personalizar en `generateRecommendation()`:
```javascript
if (question1 === 'opcion1') option1Score += 2;
if (question1 === 'opcion2') option2Score += 2;
```

### Ofertas Dinámicas
Personalizar en `generateOffers()`:
```javascript
let baseAmount = 5000;
if (question1 === 'opcion2') baseAmount = 8000;
```

## 🚀 Proceso de Creación

1. **Copiar** `template-conceito-base.html`
2. **Renombrar** a `conceito-[nombre].html`
3. **Reemplazar** todos los placeholders `[PLACEHOLDER]`
4. **Personalizar** lógica JavaScript
5. **Probar** flujo completo
6. **Verificar** consistencia visual

## ✅ Checklist de Calidad

Antes de completar un concepto, verificar:

### Diseño
- [ ] Sin emojis en todo el concepto
- [ ] Botones con estados selected en blanco
- [ ] Cards con scroll horizontal funcionando
- [ ] Esquema monocromático aplicado
- [ ] Modal con información completa

### Funcionalidad
- [ ] Estados selected en botones
- [ ] Botón CTA habilitado tras 3 respuestas
- [ ] Recomendación reemplaza preguntas
- [ ] Ofertas dinámicas generadas
- [ ] Reset funciona correctamente

### Contenido
- [ ] Todas las preguntas son relevantes
- [ ] Lógica de scoring hace sentido
- [ ] Ofertas realistas y variables
- [ ] Modal con contexto técnico completo

## 📁 Estructura de Archivos

```
wireframe-generator/
├── styles/
│   ├── mobile-simulator.css (base mobile)
│   ├── concept-pages.css (tipografía)
│   └── concept-simulator.css (NUEVO - estilos estándar)
├── generated-wireframes/
│   ├── conceito-linha-ou-emprestimo.html (REFERENCIA)
│   ├── conceito-[siguiente].html
│   └── ...
└── template-conceito-base.html (TEMPLATE MAESTRO)
```

## 🎯 Referencia Visual

**Concepto A** (`conceito-linha-ou-emprestimo.html`) es la REFERENCIA de calidad para:
- Estructura HTML
- Estilos CSS
- Funcionalidad JavaScript
- Esquema de colores
- UX patterns

**SIEMPRE** comparar nuevos conceptos con el Concepto A para mantener consistencia.

---

**⚠️ IMPORTANTE:** NO modificar `concept-simulator.css` sin actualizar TODOS los conceptos existentes. 