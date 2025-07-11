# 🎨 Sistema de Estilos Modularizado

## 📁 Estructura de Estilos

```
styles/
├── hub.css                      # Estilos del Hub de Presentación
├── mobile-simulator.css         # Estilos del Simulador Móvil
├── wireframe-components.css     # Componentes Wireframe Reutilizables
└── README.md                   # Esta documentación
```

## 🎯 Propósito de Cada Archivo

### 1. `hub.css` - Hub de Presentación
**Usado en**: `index.html`

**Contiene**:
- Fuentes Proxima Nova
- Estilos del header principal
- Cards de conceptos con efectos hover
- Badges diferenciados por concepto
- Botones del hub
- Matriz de análisis
- Sistema de estadísticas
- Responsive design

### 2. `mobile-simulator.css` - Simulador Móvil
**Usado en**: Todos los archivos de `concepts/`

**Contiene**:
- Contenedor del simulador móvil
- Dispositivo iPhone 375x812px
- Navegación transparente
- Badges de conceptos en navegación
- Estados de carga
- Responsive del simulador
- Animaciones del dispositivo

### 3. `wireframe-components.css` - Componentes Wireframe
**Usado en**: Todos los archivos de `concepts/`

**Contiene**:
- Fuentes Proxima Nova
- Base wireframe (colores, tipografía)
- Componentes base (panels, cards, títulos)
- Sistema de botones (primary, secondary, small)
- Badges por concepto
- Formularios e inputs
- Lista de elementos
- Tarjetas de producto
- Opciones de necesidad
- Status y alertas
- Componentes de chat
- Animaciones y utilidades
- Classes helper (flex, margin, padding)

## 🔧 Cómo Usar

### Para el Hub de Presentación (`index.html`)
```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="styles/hub.css">
```

### Para Conceptos/Prototipos (`concepts/*.html`)
```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="../styles/mobile-simulator.css">
<link rel="stylesheet" href="../styles/wireframe-components.css">
<style>
    /* Estilos específicos del concepto */
</style>
```

## 🧩 Componentes Disponibles

### Botones
```html
<button class="btn-primary">Botón Primario</button>
<button class="btn-secondary">Botón Secundario</button>
<button class="btn-small">Botón Pequeño</button>
```

### Paneles y Cards
```html
<div class="glass-panel">Panel de vidrio</div>
<div class="concept-card">Tarjeta de concepto</div>
<div class="product-card">Tarjeta de producto</div>
```

### Badges
```html
<span class="badge-concept concept-a">Concepto A</span>
<span class="badge-concept concept-b">Concepto B</span>
<span class="badge-concept concept-c">Concepto C</span>
<span class="badge-concept concept-d">Concepto D</span>
```

### Inputs
```html
<input type="text" class="form-input" placeholder="Texto aquí">
```

### Lista de Items
```html
<div class="list-item">
    <div class="list-item-title">Título</div>
    <div class="list-item-description">Descripción</div>
</div>
```

### Status
```html
<div class="status-card">
    <span class="status-indicator success"></span>
    Estado exitoso
</div>
```

## 🎨 Paleta de Colores Wireframe

- **Fondo Principal**: `#2a2a2a`
- **Elementos**: `#404040`
- **Bordes**: `#666666`
- **Hover**: `#4a4a4a`
- **Texto Principal**: `#e5e5e5`
- **Texto Secundario**: `rgba(255, 255, 255, 0.7)`

## 🔄 Badges por Concepto

- **Concepto A**: Naranja `rgba(255, 131, 53, 0.2)`
- **Concepto B**: Verde `rgba(0, 212, 170, 0.2)`
- **Concepto C**: Morado `rgba(168, 85, 247, 0.2)`
- **Concepto D**: Azul `rgba(59, 130, 246, 0.2)`

## ✨ Animaciones Disponibles

- `fade-in-up`: Aparición suave desde abajo
- `pulse`: Pulsación continua
- Animaciones específicas por concepto (learning-pulse, evolving-ui, etc.)

## 📱 Responsive

- **Mobile First**: Optimizado para móviles
- **Breakpoints**: 375px, 480px, 768px
- **Simulador**: Se adapta a diferentes tamaños de pantalla

## 🚀 Beneficios

1. **Modularidad**: Estilos organizados por función
2. **Reutilización**: Componentes consistentes
3. **Mantenimiento**: Cambios centralizados
4. **Performance**: Carga solo lo necesario
5. **Escalabilidad**: Fácil agregar nuevos componentes
6. **Consistencia**: Diseño unificado entre conceptos

## 🔧 Personalización

Para agregar nuevos componentes:
1. Añadir en `wireframe-components.css`
2. Seguir la convención de nomenclatura
3. Usar la paleta de colores establecida
4. Incluir variantes hover cuando sea apropiado
5. Documentar el nuevo componente aquí

## 📝 Ejemplo de Uso Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Concepto | Wireframe Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../styles/mobile-simulator.css">
    <link rel="stylesheet" href="../styles/wireframe-components.css">
    <style>
        /* Estilos específicos del concepto */
        .mi-componente-especial {
            background: #404040;
            border: 1px solid #666666;
            border-radius: 1rem;
        }
    </style>
</head>
<body>
    <div class="mobile-simulator">
        <div class="mobile-device">
            <div class="mobile-screen">
                <nav class="nav-header">
                    <!-- Navegación -->
                </nav>
                
                <div class="concept-card">
                    <h2 class="concept-title">Mi Concepto</h2>
                    <p class="concept-description">Descripción del concepto</p>
                    <button class="btn-primary">Acción Principal</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

---
*Sistema de Estilos Modularizado - Proyecto Exploraciones Conceptuales IA* 