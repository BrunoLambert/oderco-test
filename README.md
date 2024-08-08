# Nuxt default Setup

Usando os comandos padrões, o projeto é iniciado com sucesso.

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Arquitetura

Para uma boa organização do código, o padrão de arquivos e pastas adotado é o recomendado pela documentação do framework, sendo:

- Arquivos dentro da pasta "pages" geram as rotas automaticamente de acordo com os nomes dos arquivos.
- Componentes usados na aplicação foram separados pelo nome de onde são usadas.
- Componentes foram nomeados com padrão: "Nome da Pasta" + "Função" para que eles sejam achados facilmente pela busca de arquivos nas IDEs de desenvolvimento e para que eles sejam importados de forma automática no Nuxt e, assim, usados por todo o sistema sem a necessidade de script de import.
- Layout padrão nomeado "default" é importado em todas as páginas automaticamente.
- Server/api ficam as rotas geradas para o frontend consultar.
- Server/handlers ficam as funções usadas apenas no Server e não são montadas como uma rota de API.

# Design

Foi usado um framework de UI chamado [Vuetify](https://vuetifyjs.com/) pelos motivos:

- Documentação fácil (instalação e configuração).
- Design novo e leve.
- Muitos tipos de componentes que atendem a qualquer demanda.
- Algumas partes estão diferentes do apresentado no Figma, pois foi adaptado ao Vuetify.
