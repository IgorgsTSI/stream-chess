Projeto de exibição de streamers do chess.com

- O projeto tem como objetivo fazer a exibição em cards conforme o modelo na imagem ../src/assets/esboco.png onde exibirá o nome do player, um ícone com a sua foto de perfil, um link que direciona para a sua página na twitch e além disso uma bolinha verde se o usuário está online e uma vermelha se ele estiver offline.

- logo acima dos cards aparecerá uma barra de pesquisa com hotreload que renderiza conforme vai digitando as letras para fazer uma busca entre os streamers

- o endpoint de localização das informações necessárias vai ser pelo link https://api.chess.com/pub/streamers

- no endpoint as informações estarão disponibilizadas da seguinte forma:
    - nome do player = "username" (string)
    - ícone com foto = "avatar" (url)
    - link da twitch = "twitch_url" (url)
    - online/offline = "is_live" (boolean)

- O css deve usar como padrão a estilização do site https://chess.com 

- O projeto deve ser todo criado em React com typescript, sendo gerada uma pasta dentro da pasta src com o nome components onde serão incluídas outras pastas cada uma designada para o header, footer, search, card.
- dentro de cada pasta haverá um arquivo index.tsx e outro com o css para ela casa necessário
- e com isso serão renderizados dentro de ../src/app.tsx para exibição final em ../index.html que não será modificado
- todo o html, typescript e afins deve ser gerado dentro dos arquivos react, com excessão do css