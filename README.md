# Projeto Next Level Week 5

O Projeto desta semana é o **World Listerner**.
<p>
<img width="100%" src="./world-listener/public/logo.svg">
</p>

<p align="center">
   <a href="#Comandos-utilizados">Comandos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="/LICENSE">Licença</a>
</p>


**World Listerner** é um aplicativo de podcast onde você pode ouvir os ultimos podcasts lançados que estão em uma base de dados externa de nossa aplicação, nesse aplicativo você consegue ver os participantes, ver descrição usar o player e ter total controle do audio do podcast.

## Fotos Da Aplicação:

<a href="https://github.com/DinowSauron/Projeto-Next-Level-Week-5" target="_blank">
    <p style="display: flex; margin-top: 20px">
        <img src="https://user-images.githubusercontent.com/68889180/117478123-23949680-af35-11eb-8cb1-aec7eec5e1b1.png" width="49%">
        <img src="https://user-images.githubusercontent.com/68889180/117478326-62c2e780-af35-11eb-903a-b1918ef62094.png" width="49%">
    </p>
    <p style="display: flex; margin-top: 20px">
        <img src="https://user-images.githubusercontent.com/68889180/117478424-7ff7b600-af35-11eb-98f0-9f7fb7a0b3f5.png" width="49%">
        <img src="https://user-images.githubusercontent.com/68889180/117478474-9271ef80-af35-11eb-8403-25d30f79b598.png" width="49%">
    </p>  
</a>



## Tecnologias Utilizadas:

* React
* Typescript
* HTML
* SASS
* SSG: Server Side Generation

## Como inicializar:
* Primeiramente, utilize seu CMD.
* Utilize o comando ``yarn server`` para abrir o servidor contendo os conteudos do podcast.
* Em seguida utilize o comando ``yarn dev`` em outro CMD, para iniciar o projeto.
* Os dois servidor necessitam estar ativos ao mesmo tempo 



---

## Notas Pessoais:

<p>Neste NLW tentei inovar em diversas partes, porem meu foco foi no mais nos codigos, pois achei diversas falhas durante o evento que eu não queria deixar de lado, principalmente nas partes das funções dos botoes do Player de audio, como a de embaralhar e a de passar para o episodio anterior e o proximo, além de alguns ajustes para otrnar o codigo mais amigavel e menos embaraçado, mesmo com meus ajustes, creio que eu ainda conseguiria deixar isso tudo mais legivel.</p>
<p>Sinceramente a pior parte de todo o evento na minha opinião foi a parte de procurar o proximo episodio e o episodio anterior, no qual fiquei algum tempinho tentando deixar de uma forma bem mais simples, inteligente e mais funcional.</p>

### NOTES:
* Gatsby, next.js
* SSR > server-side rendering
* SPA > Single Page Application
* SSG > Staatic site generation
<br>
<br>

---

## Comandos utilizados:

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

---
