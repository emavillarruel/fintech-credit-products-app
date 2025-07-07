#!/bin/bash

# 🔄 Regenerate Wireframes Script
# Este script permite regenerar wireframes con diferentes parámetros

echo "🎨 Wireframe Generator - Regenerar Conceptos"
echo "============================================"

# Función para mostrar ayuda
show_help() {
    echo ""
    echo "Uso: ./regenerate-wireframes.sh [opciones]"
    echo ""
    echo "Opciones:"
    echo "  -d, --domain DOMAIN        Dominio (Fintech, E-commerce, SaaS, Healthcare)"
    echo "  -p, --problem PROBLEM      Descripción del problema"
    echo "  -m, --metrics METRICS      Métricas separadas por comas"
    echo "  -i, --interactive          Modo interactivo"
    echo "  -h, --help                 Mostrar esta ayuda"
    echo ""
    echo "Ejemplos:"
    echo "  ./regenerate-wireframes.sh --domain Fintech --problem 'Credit confusion'"
    echo "  ./regenerate-wireframes.sh --interactive"
    echo "  ./regenerate-wireframes.sh --domain E-commerce --metrics 'conversion,satisfaction'"
    echo ""
}

# Valores por defecto
DOMAIN="Fintech"
PROBLEM="Users need help understanding credit options"
METRICS="conversion_rate,user_satisfaction,task_completion"
INTERACTIVE=false

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        -d|--domain)
            DOMAIN="$2"
            shift 2
            ;;
        -p|--problem)
            PROBLEM="$2"
            shift 2
            ;;
        -m|--metrics)
            METRICS="$2"
            shift 2
            ;;
        -i|--interactive)
            INTERACTIVE=true
            shift
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            echo "❌ Opción desconocida: $1"
            show_help
            exit 1
            ;;
    esac
done

# Modo interactivo
if [ "$INTERACTIVE" = true ]; then
    echo ""
    echo "🤖 Modo Interactivo - Configurar Generación"
    echo "==========================================="
    
    echo ""
    echo "Dominios disponibles:"
    echo "1. Fintech"
    echo "2. E-commerce"
    echo "3. SaaS"
    echo "4. Healthcare"
    echo ""
    read -p "Selecciona dominio (1-4) [1]: " domain_choice
    
    case $domain_choice in
        1|"") DOMAIN="Fintech" ;;
        2) DOMAIN="E-commerce" ;;
        3) DOMAIN="SaaS" ;;
        4) DOMAIN="Healthcare" ;;
        *) echo "⚠️ Opción inválida, usando Fintech"; DOMAIN="Fintech" ;;
    esac
    
    echo ""
    read -p "Describe el problema [${PROBLEM}]: " custom_problem
    if [ ! -z "$custom_problem" ]; then
        PROBLEM="$custom_problem"
    fi
    
    echo ""
    echo "Métricas disponibles:"
    echo "- conversion_rate, user_satisfaction, task_completion"
    echo "- engagement_time, bounce_rate, feature_adoption"
    echo "- trust_score, completion_rate, error_rate"
    echo ""
    read -p "Métricas (separadas por comas) [${METRICS}]: " custom_metrics
    if [ ! -z "$custom_metrics" ]; then
        METRICS="$custom_metrics"
    fi
fi

# Mostrar configuración
echo ""
echo "📋 Configuración de Generación"
echo "==============================="
echo "🎯 Dominio: $DOMAIN"
echo "🔍 Problema: $PROBLEM"
echo "📊 Métricas: $METRICS"
echo ""

# Confirmar generación
if [ "$INTERACTIVE" = true ]; then
    read -p "¿Proceder con la generación? (y/N): " confirm
    if [[ ! $confirm =~ ^[Yy]$ ]]; then
        echo "❌ Generación cancelada"
        exit 0
    fi
fi

# Backup de wireframes existentes
echo "💾 Creando backup de wireframes existentes..."
BACKUP_DIR="generated-wireframes/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp generated-wireframes/*.html "$BACKUP_DIR/" 2>/dev/null || echo "ℹ️ No hay wireframes existentes para backup"

# Generar wireframes
echo ""
echo "🚀 Generando wireframes..."
echo "=========================="

# Ejecutar generador
if node generator-v2.js --domain "$DOMAIN" --problem "$PROBLEM" --metrics "$METRICS"; then
    echo ""
    echo "✅ ¡Wireframes generados exitosamente!"
    echo ""
    echo "📁 Archivos generados:"
    echo "   - concept-cognitive-load.html"
    echo "   - concept-progressive-disclosure.html"
    echo "   - concept-social-proof.html"
    echo "   - concept-personalization.html"
    echo "   - analysis-summary.md"
    echo ""
    echo "💾 Backup guardado en: $BACKUP_DIR"
    echo ""
    echo "🌐 Para ver los resultados:"
    echo "   - Abrir: concept-hub.html"
    echo "   - O usar: open concept-hub.html"
    echo ""
else
    echo ""
    echo "❌ Error al generar wireframes"
    echo "📋 Revisa los parámetros y vuelve a intentar"
    echo ""
    echo "💡 Ayuda: ./regenerate-wireframes.sh --help"
    exit 1
fi

# Actualizar timestamp en el hub
if [ -f "concept-hub.html" ]; then
    echo "🔄 Actualizando timestamp en el hub..."
    CURRENT_DATE=$(date +%Y-%m-%d)
    sed -i '' "s/Última actualización: [0-9-]*/Última actualización: $CURRENT_DATE/" concept-hub.html
fi

echo "🎉 ¡Proceso completado!"
echo ""
echo "🚀 Siguientes pasos:"
echo "   1. Abrir concept-hub.html para revisar"
echo "   2. Comparar con backup anterior"
echo "   3. Iterar con diferentes parámetros"
echo "" 