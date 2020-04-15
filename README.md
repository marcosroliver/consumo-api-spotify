# Consumo de API do Spotify

Este repositório contém um teste de consumo da API do Spotify. 

É possível encontrar uma estrutura front onde temos uma pesquisa de musicas, artista e album, uma lista de últimos visitados e últimos buscados, uma página de resultado da busca e a página de detalhe do album.

## Requisitos

* Ambiente: NodeJS
* FrameWork utiliazdo: ReactJS
* Instalação do pacote https://github.com/marcosroliver/web-login-api-spotify
* Instalar o NPM e o YARN
* Windows / MacOS
* Rodar a aplicação no ambiente local na porta 3000.

## Instalação

Esta aplicação deve rodar no Node.js e utilizar o gerenciador de pacotes NPM.  [Aqui](http://www.nodejs.org/download/) você consegue encontrar o pacote de instalação e [aqui](https://gist.github.com/isaacs/579814) um exmplo de como intala-los.

Para rodar a aplicação em seu ambiente é necessário fazer o download do repósitório que será o conector ao spotify  que pode ser encontrado neste endereço https://github.com/marcosroliver/web-login-api-spotify.

Em seguida efetuar o clone deste repositório e no seu terminal/cmd rodar o comando yarn install na pasta que foi clonada.

Após rodar o yarn start.  

Para se conectar ao Spotifi basta clicar no botão esquerdo abaixo do logo.

Vc será redirecionado para o site do spotify e após preencher os dados retornará para a página da aplicação.

## Pontos importantes

Está aplicação encontra-se em desenvolvimento, para acessar as áreas e ver os templates criados acesse os botões abaixo do logo.

![](https://github.com/marcosroliver/consumo-api-spotify/blob/master/src/assets/imgs/img-login.png)

Clicando no botão Login Spotify a aplicação irá logar por meio do conector que está rodando na porta 8888 (configurado na instalação) e retornará mudando a url com o parametro do <b>access_token</b>. 

![](https://github.com/marcosroliver/consumo-api-spotify/blob/master/src/assets/imgs/access_token.png)

No console do navegador é possivel verificar o consumo de alguns endpoints da api

![](https://github.com/marcosroliver/web-login-api-spotify/blob/master/console.png)



