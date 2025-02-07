# Poke TCG Status  

## 📖 Descrição  

O **Poke TCG Status** é um aplicativo desenvolvido com **Electron** para auxiliar nas batalhas de Pokémon TCG. Ele permite adicionar Pokémons e gerenciar seus status de forma interativa, proporcionando uma experiência mais organizada e eficiente durante as partidas.

---

## ✨ Funcionalidades  

- Adicionar Pokémons à lista.
- Editar e gerenciar o status dos Pokémons.
- Interface intuitiva com suporte à estilização personalizada.
- Utiliza **SweetAlert2** para interações mais elegantes.

---

## 🛠️ Tecnologias Utilizadas  

- **Node.js:** Ambiente de execução para JavaScript.  
- **Electron:** Plataforma para criação de aplicações desktop com tecnologias web.  
- **React + Vite:** Desenvolvimento frontend moderno e performático.  
- **TypeScript:** Linguagem para escrita de código seguro e escalável.  
- **SweetAlert2:** Biblioteca de modais elegantes para interações com o usuário.  
- **Electron-Builder:** Ferramenta para empacotamento e distribuição do aplicativo.  
- **Prettier, Editorconfig e ESLint:** Ferramentas para padronização e linting do código.  
- **SASS:** Processador CSS para estilos mais organizados e reutilizáveis.  

---

## ✅ Requisitos  

- Node.js (v14 ou superior)  
- NPM  

---

## 🚀 Como Executar o Projeto  

```bash
# Clone o repositório
$ git clone https://github.com/d4nkali/Poke_TCG_Status.git

# Navegue até o diretório do projeto
$ cd Poke_TCG_Status

# Instale as dependências
$ npm install

# Inicie o aplicativo no modo de desenvolvimento
$ npm start
```  

---

## 📦 Build para Produção  

```bash
$ npm run build
```  

Os arquivos de distribuição serão gerados na pasta **dist**.

---

## 📂 Estrutura do Projeto  

```plaintext
Poke_TCG_Status/
├─ .editorconfig
├─ .gitattributes
├─ .github/
│  ├─ ISSUE_TEMPLATE.md
│  ├─ PULL_REQUEST_TEMPLATE.md
│  └─ RELEASE_TEMPLATE.md
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ .vscode/
│  └─ settings.json
├─ CHANGELOG.md
├─ LICENSE
├─ README.md
├─ electron/
│  ├─ main.js
│  └─ preload.js
├─ frontend/
│  ├─ .eslintrc.json
│  ├─ .prettierrc
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public/
│  │  └─ favicon_pokemon_TCG_APP.png
│  ├─ src/
│  │  ├─ App.scss
│  │  ├─ App.tsx
│  │  ├─ assets/
│  │  ├─ editarPokemon.scss
│  │  ├─ main.tsx
│  │  ├─ script.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ package-lock.json
└─ package.json
```

---

## 🤝 Contribuição  

Fique à vontade para contribuir com melhorias para este projeto. Basta seguir os passos:  

1. Realize um **fork** do repositório.  
2. Crie uma **branch** para sua feature:  
   ```bash
   git checkout -b minha-feature
   ```  
3. Comite suas alterações:  
   ```bash
   git commit -m 'Adiciona minha feature'
   ```  
4. Envie para a branch principal:  
   ```bash
   git push origin minha-feature
   ```  
5. Abra um **Pull Request**.  

---

## 📜 Licença  

Este projeto está licenciado sob a [MIT License](LICENSE).
