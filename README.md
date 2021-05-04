Projeto Next Level Week 5

O Projeto desta semana é o *World Listern*


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