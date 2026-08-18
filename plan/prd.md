# PRD - Stream Chess

## 1. Visão geral

Este projeto tem como objetivo criar uma interface web para exibir cards de streamers do chess.com com informações de perfil, status de presença online/offline e acesso direto para a página da Twitch do streamer.

A solução será desenvolvida em React + TypeScript, com foco em uma interface visual inspirada no estilo da plataforma chess.com, utilizando cards responsivos e uma barra de pesquisa com atualização em tempo real.

## 2. Objetivo do produto

Permitir que os usuários consultem rapidamente uma lista de streamers e identifiquem facilmente:

- quem está online;
- quem está offline;
- o nome do usuário;
- a foto de perfil;
- o link de acesso à Twitch.

Além disso, a busca deve permitir filtrar streamers dinamicamente conforme o usuário digita, sem necessidade de recarregar a página.

## 3. Contexto e motivação

O projeto simula uma experiência de listagem de criadores de conteúdo do chess.com, semelhante a uma vitrine de streamers, com foco em usabilidade e apresentação visual elegante. A ideia é permitir uma navegação rápida e visualmente clara, comparável ao padrão visual de sites de alto nível e com foco em conteúdo esportivo e comunitário.

## 4. Público-alvo

- Usuários que acompanham jogadores de xadrez e streamers;
- Visitantes do site que desejam encontrar rapidamente streamers online;
- Usuários de desktop e dispositivos móveis com navegação web básica.

## 5. Problema a ser resolvido

Atualmente, a consulta a streamers do chess.com exige análise manual da presença online e acesso à plataforma de transmissão. O produto busca centralizar essa informação em uma página visualmente organizada, reduzindo tempo e melhorando a descoberta de streamers relevantes.

## 6. Escopo

### 6.1. Funcionalidades principais

1. Carregamento dos dados via API pública do chess.com:
   - endpoint: https://api.chess.com/pub/streamers

2. Exibição em cards de streamer, contendo:
   - nome do player;
   - foto de perfil;
   - link para a Twitch;
   - indicador visual de status online/offline.

3. Pesquisa em tempo real por nome do streamer.

4. Feedback visual de status:
   - verde para online;
   - vermelho para offline.

5. Layout estilizado com inspiração no design de chess.com.

### 6.2. Funcionalidades fora do escopo

- autenticação de usuários;
- cadastro de streamers;
- backend próprio;
- manipulação de dados em banco de dados;
- suporte a múltiplos idiomas;
- integração com outras plataformas além da Twitch.

## 7. Requisitos funcionais

### RF01 - Consulta de streamers
O sistema deve consumir os dados da API de streamers do chess.com.

### RF02 - Estrutura de dados
Cada item retornado pela API deve conter as informações mínimas:

- username: string
- avatar: URL
- twitch_url: URL
- is_live: boolean

### RF03 - Renderização em cards
O sistema deve renderizar um card por streamer com os campos relevantes e um avatar associado.

### RF04 - Indicador de status
O sistema deve indicar visualmente se o streamer está online ou offline:

- online: bolinha verde
- offline: bolinha vermelha

### RF05 - Link para Twitch
Cada card deve conter um link clicável que direciona para a página da Twitch do streamer.

### RF06 - Barra de busca
O sistema deve disponibilizar uma barra de busca acima dos cards, com atualização em tempo real conforme a digitação do usuário.

### RF07 - Filtro por texto
Ao inserir caracteres na busca, o sistema deve renderizar apenas os resultados que correspondam ao nome do streamer.

### RF08 - Estado vazio
Quando não houver resultados para a busca, o sistema deve exibir uma mensagem clara indicando ausência de resultados.

### RF09 - Organização de componentes
Os elementos da interface devem ser estruturados em componentes React separados:

- header
- footer
- search
- card

### RF10 - Estrutura de pastas
O projeto deve manter a organização sugerida:

- src/components
  - header
  - footer
  - search
  - card

Cada pasta deve conter:

- index.tsx
- arquivo de estilo correspondente

## 8. Requisitos não funcionais

### RNF01 - Interface responsiva
A interface deve funcionar adequadamente em diferentes tamanhos de tela, com foco principal em desktop e adaptação para mobile.

### RNF02 - Performance
A renderização deve responder rapidamente à digitação do usuário e ao carregamento inicial dos dados.

### RNF03 - Manutenibilidade
A arquitetura deve separar responsabilidades por componentes, facilitando manutenção e evolução.

### RNF04 - Estilo visual
A UI deve seguir a estética visual da marca chess.com, com uso de cores, espaçamento e tipografia adequados.

### RNF05 - Reusabilidade
Os componentes devem ser reutilizáveis e organizados logicamente para facilitar extensões futuras.

## 9. Experiência do usuário

### Fluxo principal
1. O usuário acessa a página.
2. O sistema carrega a lista de streamers.
3. A página exibe cards com nomes, fotos e status.
4. O usuário digita no campo de busca.
5. A lista é filtrada em tempo real.
6. O usuário clica no link da Twitch para abrir a transmissão.

### Comportamento esperado
- A busca deve ocorrer sem necessidade de clique em botão de submit.
- O layout deve ser limpo, com destaque ao status online/offline.
- O visual deve transmitir confiabilidade e organização.

## 10. Regras de negócio

- Apenas streamers presentes na resposta da API pública devem ser exibidos.
- A foto do perfil deve ser carregada a partir do campo avatar.
- O link de Twitch deve ser aberto em nova aba, se possível, sem quebrar a experiência do usuário.
- A presença online/offline deve ser derivada do campo is_live.
- A busca deve considerar o nome do usuário em caixa alta ou baixa de forma equivalente.

## 11. Estrutura da interface

### 11.1. Header
Deve conter:

- branding ou título relacionado ao projeto;
- zona de navegação visual simples, se necessário.

### 11.2. Search
Deve conter:

- campo de entrada textual;
- atualização em tempo real;
- foco em usabilidade e velocidade.

### 11.3. Card
Cada card deve conter:

- foto do avatar;
- nome do streamer;
- status com círculo indicador;
- botão ou link para Twitch.

### 11.4. Footer
Deve manter uma estrutura final simples, com informações gerais ou crédito ao projeto.

## 12. Arquitetura proposta

### Frontend
- React
- TypeScript
- Vite

### Organização de código
- src/App.tsx: renderização principal da aplicação
- src/components/header
- src/components/footer
- src/components/search
- src/components/card
- arquivos CSS específicos para cada componente

### Padrão de desenvolvimento
- componentes funcionais;
- uso de estados e renderização condicional;
- implementação de interface com HTML e CSS em arquivos separados;
- uso de estilos conforme base visual da chess.com.

## 13. Requisitos de design

- paleta inspirada em tons de verde, cinza, preto e branco;
- linhas limpas e visual moderno;
- cards com bordas discretas e composição leve;
- destaque visual para o status online/offline;
- interface organizada com alinhamento e espaçamento consistentes;
- foco em legibilidade e qualidade visual.

## 14. Critérios de aceite

### CA01 - Carregamento inicial
Ao abrir a página, a aplicação deve buscar os dados da API e listar os streamers corretamente.

### CA02 - Busca em tempo real
Ao digitar um termo na busca, a listagem deve atualizar instantaneamente sem recarga da página.

### CA03 - Visualização correta
Cada streamer deve aparecer em um card com avatar, nome, link e indicador de status.

### CA04 - Status correto
Se is_live for true, o indicador deve ser verde; se false, deve ser vermelho.

### CA05 - Link funcional
Ao clicar no link do perfil da Twitch, o usuário deve ser direcionado para a URL correta.

### CA06 - Estado de vazio
Se a busca não encontrar nenhum item, a interface deve informar de forma clara que não há resultados.

### CA07 - Estrutura do projeto
Os componentes devem estar organizados conforme a estrutura especificada em src/components.

## 15. Riscos e dependências

### Riscos
- API externa pode responder com dados incompletos ou indisponíveis;
- variação na estrutura de dados da API;
- necessidade de adaptar o visual para responsividade em telas menores.

### Dependências
- acesso à internet para consulta da API;
- conexão com a plataforma chess.com;
- ambiente de desenvolvimento com Node.js e Vite.

## 16. Considerações de implementação

- O HTML e parte da lógica devem ser implementados em React TSX.
- O CSS deve ser separado em arquivos próprios por componente.
- A lógica de busca pode ser feita com estado local e filtro em memória.
- O componente de busca deve ser simples e eficiente.
- O projeto deve ser organizado para facilitar futuras melhorias, como paginação, ordenação ou filtros extras.

## 17. Entregáveis esperados

- aplicação React + TypeScript funcionando;
- lista de streamers exibida em cards;
- barra de pesquisa com hot reload;
- indicação visual de online/offline;
- estrutura de componentes com pastas dedicadas;
- estilo visual inspirado em chess.com.

## 18. Resumo Executivo

O produto consiste em uma página de listagem de streamers do chess.com, com interface elegante, busca instantânea e indicação de status online/offline. O objetivo principal é facilitar a descoberta e visualização de streamers de forma clara e atrativa, com a estrutura de desenvolvimento organizada em React + TypeScript e componentes separados para manutenção e evolução do projeto.
