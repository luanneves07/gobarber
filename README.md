# gobarber

### Ferramentas necessárias para funcionamento
1. yarn;
2. node;
3. npm;
4. nodemon -> Para realizar monitoramento de alterações no código e reiniciar o servidor automaticamente;
5. sucrase -> Para utilização da sintaxe de import/export;
6. eslint -> Para contemplar regras de código padronizadas dentro do proejto;
7. sequelizerc -> Para migrations e comunicação entre models com o banco de dados;
8. Docker -> Para manter o banco de dados PostGre;
9. Prettier -> Para formatação automática do código como no eclipse;
10. bcryptjs -> Para encriptar a senha de maneira segura;
11. JWT -> Para gerenciar os tokens de usuários logados na aplicação;
12. pg e pg-hstore -> Para comunicação com o dialeto do PostGre
13. YUP -> Para validação de body das requisições de maneira menos verborrágica

### Ambiente de banco de dados
O banco de dados foi configurado utilizando docker com base na imagem do postgres:

```docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11```

A interface gráfica de análise do banco utilizada é a [PostBird](https://electronjs.org/apps/postbird).
