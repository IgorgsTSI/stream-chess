# Plano de implementação incremental

Baseado no PRD em [plan/prd.md](../plan/prd.md).

Este arquivo organiza a implementação em tarefas pequenas, sequenciais e verificáveis. Cada tarefa deve ser entregue e aprovada antes de iniciar a próxima, para que agentes de IA possam evoluir a solução de forma progressiva sem perder contexto.

## Sequência recomendada

- [x] 1. Configurar a base do projeto e validar a estrutura inicial
  - Contexto: conforme descrito em [plan/prd.md](../plan/prd.md), a aplicação deve usar React + TypeScript + Vite.
  - Critério de aprovação:
    - o projeto está rodando localmente com npm install + npm run dev (ou equivalente);
    - a estrutura base do Vite está presente;
    - os arquivos principais do app já existem e estão funcionando sem erros de compilação.

- [x] 2. Definir a estrutura de componentes e arquivos de estilo
  - Contexto: o PRD exige organização por componentes: header, footer, search e card.
  - Critério de aprovação:
    - existem as pastas [src/components](../src/components) com os componentes esperados;
    - cada componente possui um arquivo principal e um arquivo de estilo correspondente;
    - a aplicação renderiza esses componentes dentro de App sem quebrar o layout inicial.

- [x] 3. Implementar a busca de dados da API pública do chess.com
  - Contexto: RF01, RF02 e CA01 do PRD.
  - Critério de aprovação:
    - a aplicação faz a requisição para a API pública de streamers do chess.com;
    - os dados são convertidos para o formato esperado da UI;
    - os campos mínimos username, avatar, twitch_url e is_live são lidos corretamente;
    - erros de rede ou resposta vazia são tratados de forma segura.

- [x] 4. Criar o componente de card do streamer
  - Contexto: RF03, RF04, RF05 e CA03/CA04 do PRD.
  - Critério de aprovação:
    - cada streamer é exibido em um card individual;
    - o avatar aparece corretamente;
    - o nome do streamer é exibido;
    - o status online/offline é representado por um indicador visual com verde para online e vermelho para offline;
    - o link para a Twitch abre a URL correta em nova aba.

- [x] 5. Implementar a barra de busca em tempo real
  - Contexto: RF06, RF07 e CA02 do PRD.
  - Critério de aprovação:
    - existe um campo de busca acima da lista;
    - a filtragem acontece conforme o usuário digita, sem botão de submit;
    - a comparação do texto da busca é case-insensitive;
    - a lista de cards atualiza imediatamente com base no termo digitado.

- [ ] 6. Implementar o estado vazio para resultados sem correspondência
  - Contexto: RF08 e CA06 do PRD.
  - Critério de aprovação:
    - quando a busca não encontrar nenhum streamer, a interface exibe uma mensagem clara;
    - a mensagem comunica que não há resultados;
    - o layout continua consistente e legível.

- [ ] 7. Montar a estrutura principal da página com header, lista e footer
  - Contexto: RF09, RNF01, RNF03 e sessões de interface do PRD.
  - Critério de aprovação:
    - a página principal organiza header, busca, grid/lista de cards e footer;
    - os componentes são renderizados em conjunto sem espaçamento quebrado;
    - o layout fica funcional em desktop e mantém boa legibilidade em telas menores.

- [ ] 8. Aplicar o visual inspirado em chess.com e garantir responsividade
  - Contexto: RNF04, RNF05 e requisitos de design do PRD.
  - Critério de aprovação:
    - a paleta, espaçamento e tipografia seguem a estética proposta;
    - os cards possuem visual limpo e consistente;
    - o layout responde bem a diferentes larguras de tela;
    - não há elementos sobrepostos ou quebrados em mobile.

- [ ] 9. Revisão final, validação de requisitos e preparação para entrega
  - Contexto: todos os critérios de aceite do PRD devem ser verificados.
  - Critério de aprovação:
    - a aplicação carrega corretamente a lista da API;
    - a busca funciona em tempo real;
    - os cards exibem avatar, nome, status e link da Twitch;
    - o estado vazio está funcionando;
    - a estrutura de componentes e a organização do projeto estão alinhadas com o PRD;
    - o build final não apresenta erros relevantes.

## Observações

- Esta lista foi desenhada para permitir avanço incremental e rastreável.
- Sempre que uma tarefa for concluída, o responsável deve marcar a caixa correspondente e validar o critério de aprovação antes de seguir para a próxima.
- O PRD é a fonte de verdade para regras de negócio, requisitos e critérios de aceite; este arquivo serve apenas como plano operacional de execução.
