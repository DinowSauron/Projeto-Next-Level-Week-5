Projeto Next Level Week 5

O Projeto desta semana é o *World Listern*
<p>
<img width="100%" src="./world-listener/public/logo.svg">
</p>

World Listern é um aplicativo de podcast onde você pode ouvir os ultimos podcasts lançados que estão em uma base de dados externa de nossa aplicação, nesse aplicativo você consegue ver os participantes, ver descrição usar o player e ter total controle do audio do podcast.



## Tecnologias Utilizadas:

* React
* Typescript
* HTML
* SASS
* SSG: Server Side Generation



Gatsby, next.js
SSR > server-side rendering
SPA > Single Page Application
SSG > Staatic site generation

---

Neste NLW tentei inovar mais nos codigos, pois achei diversas falhas durante o evento que eu não queria deixar de lado, principalmente nas partes das funções dos botoes do Player de audio, como a de embaralhar e a de passar para o episodio anterior e o proximo, além de alguns ajustes para otrnar o codigo mais amigavel e menos embaraçado, mesmo com meus ajustes, creio que eu ainda conseguiria deixar isso tudo mais legivel.
Sinceramente a pior parte de todo o evento na minha opinião foi a parte de procurar o proximo episodio e o episodio anterior, no qual fiquei algum tempinho tentando deixar de uma forma bem mais simples, inteligente e mais funcional.

## Comandos utilizados

### React Project
* ``npx create-react-app world-listener`` Cria um template do react
* ``cd world-listener`` Entra no diretorio
* ``yarn start`` Inicia a aplicação.

### Node Project
* ``npx create-next-app world-listener`` Cria o template next.js
* ``cd world-listener`` Entra no diretorio
* ``yarn dev`` Entra no ambiente de desenvolvimento (abre o servidor)
* ``yarn add typescript @types/react @types/node -D`` Adiciona Typescript
* ``yarn add date-fns`` Blibioteca de datas
* Simulando o Servidor
    * ``yarn add json-server -D`` Adiciona o servidor fake 
    * ``"server": "json-server server.json -w -d 750 -p 3333"`` adiciona isso nos Scripts do package.json
    * Necessita executar o back-end ``yarn server`` e o react ``yarn dev`` para receber os dados
* Build do projeto
    * ``yarn build`` Gera uma build de produção do projeto 
    * ``yarn start`` Inicia a build do projeto
* ``yarn add axios`` Adiciona o axios para requisições a API
* ``yarn add rc-slider`` Slider Para react