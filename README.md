# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # stream-chess

  Descrição curta
  ---------------

  `stream-chess` é uma aplicação minimalista em React + TypeScript (Vite) para visualizar e buscar informações de partidas de xadrez, com componentes prontos e integração com uma API de xadrez.

  Principais recursos
  -------------------
  - Interface em React com componentes reutilizáveis (`header`, `footer`, `card`, `search`).
  - Integração com API de xadrez (`src/services/chessApi.ts`).
  - Estrutura preparada para desenvolvimento rápido com Vite.

  Tecnologias
  ----------
  - React
  - TypeScript
  - Vite
  - ESLint (configuração básica)

  Como rodar (desenvolvimento)
  -----------------------------
  Pré-requisitos: `node` (v16+) e `npm` ou `pnpm`.

  1. Instalar dependências:

  ```
  npm install
  ```

  2. Rodar em modo desenvolvimento (HMR):

  ```
  npm run dev
  ```

  Build e preview
  ----------------

  Gerar build de produção:

  ```
  npm run build
  ```

  Servir build localmente para testar:

  ```
  npm run preview
  ```

  Estrutura rápida do projeto
  --------------------------
  - `src/` — código fonte
    - `components/` — componentes React
    - `services/chessApi.ts` — integração com API
  - `public/` — assets públicos

  Contribuição
  ------------
  - Abra uma issue descrevendo o problema ou a melhoria.
  - Envie um Pull Request com mudanças pequenas e testes quando aplicável.

  Licença
  -------
  Escolha a licença desejada ou mantenha conforme o repositório original (ex: MIT).

  Mais informações
  ----------------
  Veja a interface do projeto e os componentes em `src/` para entender como estender ou integrar novas funcionalidades.
