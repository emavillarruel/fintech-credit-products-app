#!/bin/bash

# 🎨 WIREFRAME GENERATOR V2 - SCRIPT DE EJEMPLO
# Demuestra las capacidades del sistema modular

echo "🎨 Wireframe Generator V2 - Sistema Modular"
echo "============================================="
echo ""

# Crear directorio de ejemplos
mkdir -p examples

echo "📋 Generando wireframes para diferentes dominios..."
echo ""

# Fintech - Productos de crédito
echo "🏦 Fintech: Productos de crédito"
node generator-v2.js \
  --domain "Fintech" \
  --problem "Users struggle to understand credit product options and terms" \
  --metrics "conversion_rate,user_confidence,application_completion"

# Mover archivos a carpeta de ejemplos
mkdir -p examples/fintech-credit
mv generated-wireframes/* examples/fintech-credit/
echo "   ✅ Wireframes guardados en examples/fintech-credit/"
echo ""

# E-commerce - Proceso de checkout
echo "🛒 E-commerce: Proceso de checkout"
node generator-v2.js \
  --domain "E-commerce" \
  --problem "Users abandon cart during checkout process" \
  --metrics "checkout_completion,cart_abandonment,user_satisfaction"

mkdir -p examples/ecommerce-checkout
mv generated-wireframes/* examples/ecommerce-checkout/
echo "   ✅ Wireframes guardados en examples/ecommerce-checkout/"
echo ""

# SaaS - Selección de plan
echo "💼 SaaS: Selección de plan"
node generator-v2.js \
  --domain "SaaS" \
  --problem "Users find it difficult to choose the right subscription plan" \
  --metrics "plan_selection,trial_conversion,feature_understanding"

mkdir -p examples/saas-pricing
mv generated-wireframes/* examples/saas-pricing/
echo "   ✅ Wireframes guardados en examples/saas-pricing/"
echo ""

# Healthcare - Reserva de citas
echo "🏥 Healthcare: Reserva de citas"
node generator-v2.js \
  --domain "Healthcare" \
  --problem "Patients struggle to book appropriate appointments online" \
  --metrics "appointment_bookings,user_satisfaction,time_to_book"

mkdir -p examples/healthcare-appointments
mv generated-wireframes/* examples/healthcare-appointments/
echo "   ✅ Wireframes guardados en examples/healthcare-appointments/"
echo ""

echo "📊 Resumen de ejemplos generados:"
echo ""
echo "🏦 Fintech (Productos de crédito):"
echo "   - Cognitive Load: Opción única recomendada"
echo "   - Progressive Disclosure: Wizard de aplicación"
echo "   - Social Proof: Testimonios de clientes"
echo "   - Personalization: Recomendaciones basadas en perfil"
echo ""

echo "🛒 E-commerce (Checkout):"
echo "   - Cognitive Load: Checkout simplificado"
echo "   - Progressive Disclosure: Pasos del proceso"
echo "   - Social Proof: Reviews y garantías"
echo "   - Personalization: Opciones de envío personalizadas"
echo ""

echo "💼 SaaS (Pricing):"
echo "   - Cognitive Load: Plan recomendado"
echo "   - Progressive Disclosure: Comparador interactivo"
echo "   - Social Proof: Casos de éxito"
echo "   - Personalization: Planes según tamaño de equipo"
echo ""

echo "🏥 Healthcare (Citas):"
echo "   - Cognitive Load: Próxima cita disponible"
echo "   - Progressive Disclosure: Selección por especialidad"
echo "   - Social Proof: Ratings de doctores"
echo "   - Personalization: Horarios convenientes"
echo ""

echo "🔧 Para ver los wireframes:"
echo "   1. Abrir cualquier archivo .html en tu navegador"
echo "   2. Los estilos están en styles/wireframe-components.css"
echo "   3. Revisar analysis-summary.md para hipótesis y métricas"
echo ""

echo "📖 Para agregar nuevos componentes:"
echo "   1. Editar components/wireframe-components.js"
echo "   2. Agregar estilos en styles/wireframe-components.css"
echo "   3. Ver SISTEMA_MODULAR.md para documentación completa"
echo ""

echo "✅ ¡Ejemplos generados exitosamente!"
echo "📁 Revisa la carpeta 'examples/' para ver todos los wireframes" 