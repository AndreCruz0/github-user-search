# 🚀 Explorando API do GitHub

> Este projeto consome a API do GitHub para exibir informações sobre usuários, repositórios e eventos. Ele permite visualizar estatísticas como número de seguidores, repositórios públicos e últimas atividades.

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## 📂 Estrutura do Projeto
```
/src
│── /css
│   ├── reset.css
│   ├── styles.css
│
│── /scripts
│   │── /objects
│   │   ├── screen.js
│   │   ├── user.js
│   │
│   │── /services
│   │   ├── events.js
│   │   ├── repositories.js
│   │   ├── teste.js
│   │
│   ├── env-options.js  <-- ⚠️ Colocar a API Key do GitHub aqui
│   ├── index.js
│   ├── variables.js
│
├── index.html
├── README.md
```

## 🔑 Configuração da API do GitHub
Para que o projeto funcione corretamente, é necessário gerar um **token de acesso** do GitHub.

### 🏗️ Como Gerar o Token de Acesso
1. Acesse [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. Clique em **"Generate new token (classic)"**
3. Selecione as permissões necessárias, como `public_repo`
4. Copie o token gerado e guarde com segurança ⚠️

### 📝 Onde Colocar o Token?
Abra o arquivo `env-options.js` e adicione seu token assim:

```js
const gitHubToken = "COLOQUE SEU TOKEN AQUI :>";
export { gitHubToken };
```

## 🚀 Como Rodar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

4. Acesse `http://localhost:5500/index.html` no navegador.

## ✨ Desmontração do funcionamento da Pagina!

<img src="./src/image-for-README/Animação.gif">


## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir! 😃

