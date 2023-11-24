# Projeto ODS

## Projeto para manipulação de endpoints.

Criar banco de dados 'ods' no MySql que será utilizado.

## Docker e MySql:

docker-compose -f app-docker-compose.yml up

docker exec -it src-database_mysql-1 bash

mysql -uroot -p123

Criar tabelas no banco de dados com o arquivo ods_db.sql

## Endpoints

[GET] /indicador/{id}

Retorna os detalhes de um indicador específico com base no id fornecido.

Código 200 de resposta para valores válidos
Código 204 para valores inválidos

[GET] /objetivos

Retorna uma lista de todos os Objetivos.

Código 200 de resposta.


![modelo](https://github.com/DMont3/GS2-MICRO/assets/99260355/1ace0cef-f4e9-4b70-821e-2dc9f4234958)

