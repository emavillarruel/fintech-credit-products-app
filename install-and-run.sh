#!/bin/bash

echo "🎯 Verificando instalación de Node.js..."

# Verificar si Node.js está instalado
if command -v node &> /dev/null; then
    echo "✅ Node.js encontrado: $(node --version)"
    echo "✅ npm encontrado: $(npm --version)"
    echo ""
    echo "🚀 Instalando dependências del proyecto..."
    npm install
    echo ""
    echo "🎯 Iniciando Dashboard de Crédito Ideal..."
    echo "📱 Abrirá en: http://localhost:3000"
    echo ""
    npm run dev
else
    echo "❌ Node.js não encontrado!"
    echo ""
    echo "📥 Instale Node.js primeiro:"
    echo "1. Vá para: https://nodejs.org"
    echo "2. Baixe a versão LTS"
    echo "3. Execute o instalador .pkg"
    echo "4. Execute este script novamente"
    echo ""
    echo "⚡ Ou use Homebrew:"
    echo "brew install node"
fi
