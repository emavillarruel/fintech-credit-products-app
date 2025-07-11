#!/bin/bash

# Script para generar conceptos de Fintech para Emprendedores
# Autor: Sistema de Wireframes Modulares
# Fecha: $(date +%Y-%m-%d)

echo "🚀 Generador de Conceptos - Fintech para Emprendedores"
echo "=============================================="
echo ""

# Función para mostrar ayuda
show_help() {
    echo "Uso: $0 [OPCIÓN]"
    echo ""
    echo "Opciones:"
    echo "  -h, --help           Mostrar esta ayuda"
    echo "  -g, --generate       Generar todos los conceptos"
    echo "  -v, --view           Abrir hub de emprendedores"
    echo "  -i, --individual     Abrir conceptos individuales"
    echo "  -d, --docs           Abrir documentación"
    echo "  -c, --compare        Comparar con conceptos originales"
    echo "  -l, --list           Listar archivos generados"
    echo ""
    echo "Ejemplos:"
    echo "  $0 -g                Generar todos los conceptos"
    echo "  $0 -v                Abrir hub de emprendedores"
    echo "  $0 -i                Abrir conceptos uno por uno"
    echo ""
}

# Función para listar archivos
list_files() {
    echo "📁 Archivos de Conceptos para Emprendedores:"
    echo "-------------------------------------------"
    echo ""
    echo "🏠 Hub Principal:"
    echo "  - concept-hub-emprendedores.html"
    echo "  - hub-config-emprendedores.json"
    echo ""
    echo "🧠 Conceptos Individuales:"
    echo "  - concept-personalizacion-contextual.html"
    echo "  - concept-banca-proactiva.html"
    echo "  - concept-relevancia-temporal.html"
    echo "  - concept-acompanamiento-empatico.html"
    echo "  - concept-contratacion-express.html"
    echo "  - concept-mentor-digital.html"
    echo ""
    echo "📚 Documentación:"
    echo "  - README_EMPRENDEDORES.md"
    echo "  - generate-emprendedores.sh"
    echo ""
}

# Función para generar conceptos
generate_concepts() {
    echo "🔨 Generando conceptos para emprendedores..."
    echo ""
    
    # Verificar que los archivos existen
    concepts=(
        "concept-personalizacion-contextual.html"
        "concept-banca-proactiva.html"
        "concept-relevancia-temporal.html"
        "concept-acompanamiento-empatico.html"
        "concept-contratacion-express.html"
        "concept-mentor-digital.html"
    )
    
    echo "✅ Verificando archivos generados:"
    all_exist=true
    
    for concept in "${concepts[@]}"; do
        if [ -f "generated-wireframes/$concept" ]; then
            echo "  ✓ $concept"
        else
            echo "  ❌ $concept (No encontrado)"
            all_exist=false
        fi
    done
    
    if [ -f "concept-hub-emprendedores.html" ]; then
        echo "  ✓ concept-hub-emprendedores.html"
    else
        echo "  ❌ concept-hub-emprendedores.html (No encontrado)"
        all_exist=false
    fi
    
    if [ -f "hub-config-emprendedores.json" ]; then
        echo "  ✓ hub-config-emprendedores.json"
    else
        echo "  ❌ hub-config-emprendedores.json (No encontrado)"
        all_exist=false
    fi
    
    echo ""
    if [ "$all_exist" = true ]; then
        echo "🎉 Todos los conceptos están generados correctamente!"
    else
        echo "⚠️  Algunos archivos no se encontraron. Verifica la generación."
    fi
}

# Función para abrir hub
open_hub() {
    echo "🌐 Abriendo hub de emprendedores..."
    
    if [ -f "concept-hub-emprendedores.html" ]; then
        open concept-hub-emprendedores.html || xdg-open concept-hub-emprendedores.html
        echo "✅ Hub abierto en el navegador"
    else
        echo "❌ No se encontró concept-hub-emprendedores.html"
        echo "   Ejecuta: $0 -g para generar los conceptos"
    fi
}

# Función para abrir conceptos individuales
open_individual() {
    echo "🧠 Abriendo conceptos individuales..."
    echo ""
    
    concepts=(
        "concept-personalizacion-contextual.html:Personalización Contextual"
        "concept-banca-proactiva.html:Banca Proactiva"
        "concept-relevancia-temporal.html:Relevancia Temporal"
        "concept-acompanamiento-empatico.html:Acompañamiento Empático"
        "concept-contratacion-express.html:Contratación Express"
        "concept-mentor-digital.html:Mentor Digital Inteligente"
    )
    
    for concept_info in "${concepts[@]}"; do
        IFS=':' read -r file title <<< "$concept_info"
        echo "Presiona Enter para abrir: $title"
        read -r
        
        if [ -f "generated-wireframes/$file" ]; then
            open "generated-wireframes/$file" || xdg-open "generated-wireframes/$file"
            echo "✅ $title abierto"
        else
            echo "❌ No se encontró $file"
        fi
        echo ""
    done
}

# Función para abrir documentación
open_docs() {
    echo "📚 Abriendo documentación..."
    
    if [ -f "README_EMPRENDEDORES.md" ]; then
        open README_EMPRENDEDORES.md || xdg-open README_EMPRENDEDORES.md
        echo "✅ Documentación abierta"
    else
        echo "❌ No se encontró README_EMPRENDEDORES.md"
    fi
}

# Función para comparar con conceptos originales
compare_concepts() {
    echo "🔍 Comparando con conceptos originales..."
    echo ""
    
    echo "Abriendo hub original..."
    if [ -f "concept-hub.html" ]; then
        open concept-hub.html || xdg-open concept-hub.html
        echo "✅ Hub original abierto"
    else
        echo "❌ No se encontró concept-hub.html"
    fi
    
    echo ""
    echo "Presiona Enter para abrir hub de emprendedores..."
    read -r
    
    if [ -f "concept-hub-emprendedores.html" ]; then
        open concept-hub-emprendedores.html || xdg-open concept-hub-emprendedores.html
        echo "✅ Hub de emprendedores abierto"
    else
        echo "❌ No se encontró concept-hub-emprendedores.html"
    fi
}

# Función principal
main() {
    case "$1" in
        -h|--help)
            show_help
            ;;
        -g|--generate)
            generate_concepts
            ;;
        -v|--view)
            open_hub
            ;;
        -i|--individual)
            open_individual
            ;;
        -d|--docs)
            open_docs
            ;;
        -c|--compare)
            compare_concepts
            ;;
        -l|--list)
            list_files
            ;;
        *)
            echo "🚀 Generador de Conceptos - Fintech para Emprendedores"
            echo "=============================================="
            echo ""
            echo "Selecciona una opción:"
            echo ""
            echo "1. 📋 Listar archivos generados"
            echo "2. 🔨 Verificar conceptos generados"
            echo "3. 🌐 Abrir hub de emprendedores"
            echo "4. 🧠 Abrir conceptos individuales"
            echo "5. 📚 Abrir documentación"
            echo "6. 🔍 Comparar con conceptos originales"
            echo "7. ❓ Mostrar ayuda"
            echo "8. 🚪 Salir"
            echo ""
            
            read -p "Opción (1-8): " choice
            
            case $choice in
                1) list_files ;;
                2) generate_concepts ;;
                3) open_hub ;;
                4) open_individual ;;
                5) open_docs ;;
                6) compare_concepts ;;
                7) show_help ;;
                8) echo "¡Hasta luego!" ;;
                *) echo "Opción no válida. Usa -h para ayuda." ;;
            esac
            ;;
    esac
}

# Ejecutar función principal
main "$@" 