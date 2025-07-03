# 🚀 Como Instalar e Executar o Dashboard

## 📋 Pré-requisitos
- **macOS** (que você já tem ✅)
- **Node.js** (vamos instalar agora)

## 📱 Passo 1: Instalar Node.js

### 🎯 Opção Mais FÁCIL:
1. Abra seu navegador
2. Vá para: **https://nodejs.org**
3. Clique em **"Download Node.js (LTS)"**
4. Execute o arquivo `.pkg` baixado
5. Siga o instalador (next → next → install)

### ⚡ Alternativa com Homebrew:
```bash
# Se você tem Homebrew instalado:
brew install node

# Se não tem Homebrew, instale primeiro:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 🎯 Passo 2: Executar o Dashboard

### Opção AUTOMÁTICA:
```bash
./install-and-run.sh
```

### Opção MANUAL:
```bash
# 1. Instalar dependências
npm install

# 2. Executar projeto
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## 🔍 Verificar se deu certo:

Após instalar Node.js, execute:
```bash
node --version     # Deve mostrar algo como: v20.x.x
npm --version      # Deve mostrar algo como: 10.x.x
```

## 🎯 O que você verá:

✅ **Dashboard Principal** rodando em `http://localhost:3000`  
✅ **Navegação Mercado Pago** integrada  
✅ **Recomendação Personalizada** funcionando  
✅ **Widget Proativo** aparecendo após 3 segundos  
✅ **Todas as interações** funcionais  

## 🆘 Problemas?

### "command not found: node"
➜ Node.js não foi instalado corretamente  
➜ Reinicie o terminal e tente novamente  

### "npm ERR! network"
➜ Problema de internet  
➜ Tente novamente ou use outro wifi  

### Porta 3000 ocupada
➜ Use: `npm run dev -- --port 3001`  

## 🚀 Próximos Passos

Depois que estiver rodando:
1. 🎮 **Teste todas as funcionalidades**
2. 🎯 **Experimente o quiz** (quando implementado)
3. 📊 **Use o comparador** LC vs PL
4. 🤖 **Interaja com o widget** proativo

---
**Criado por:** Equipe Fintech App  
**Tecnologias:** Next.js 14 + TypeScript + Tailwind CSS  
**Objetivo:** Eliminar confusão entre produtos de crédito (35% → <5%)
