# gobarber

### Ferramentas necessárias para funcionamento
1. yarn;
2. node;
3. npm;
4. nodemon -> Para realizar monitoramento de alterações no código e reiniciar o servidor automaticamente;
5. sucrase -> Para utilização da sintaxe de import/export;
6. eslint -> Para contemplar regras de código padronizadas dentro do proejto.

### Ambiente de banco de dados
O banco de dados foi configurado utilizando docker com base na imagem do postgres:

```docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11```

A interface gráfica de análise do banco utilizada é a [PostBird](https://electronjs.org/apps/postbird).