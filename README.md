# E-commerce Application

## Descrição

Este projeto é uma aplicação de e-commerce desenvolvida como parte do estágio na UOL. A aplicação utiliza React com TypeScript e Vite no front-end, e NestJS com Prisma e PostgreSQL no back-end. O projeto inclui recursos como listagem de produtos, detalhes de produtos, categorias e funcionalidades de filtragem.

## Tecnologias Usadas

### Front-end

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção rápida para projetos modernos em JavaScript.

### Back-end

- **NestJS**: Framework para construir aplicações server-side eficientes e escaláveis.
- **Prisma**: ORM para facilitar a interação com o banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado como banco de dados da aplicação.

## Configuração do Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- PostgreSQL

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Bruno-Meireles/uol-fullstack-furniro
   cd uol-fullstack-furniro

cd frontend
npm install
# ou
yarn install

cd backend
npm install
# ou
yarn install

npx prisma migrate dev
cd backend
npm run start:dev
# ou
yarn start:dev

cd frontend
npm run dev
# ou
yarn dev

# Testes com Postman
Listar produtos :GET http://localhost:3000/products

Obter detalhes de um produto :GET http://localhost:3000/products/:id

Crie um novo produto :POST http://localhost:3000/products

Atualizar um produto :PUT http://localhost:3000/products/:id

Excluir um produto :DELETE http://localhost:3000/products/:id

# API de Produtos

## Listar Produtos com Paginação e Filtragem
Você pode listar produtos usando a seguinte rota, que suportam parâmetros de paginação e filtragem:

GET http://localhost:3000/products?limit={n}&offset={m}&categoryId={id}&orderBy={campo}

# Parâmetros
limit : (opcional) Número máximo de produtos a serem devolvidos. Exemplo: limit=10.
offset : (opcional) Número de produtos a serem ignorados antes de retornar os resultados. Exemplo: offset=0.
CategoryId : (opcional) ID da categoria para filtrar os produtos. Exemplo: `categoryId=categoryId=2.
orderBy : (opcional) Campo pelo qual os produtos devem ser planejados. Exemplo: orderBy=price.

# Exemplo de Requisição
GET http://localhost:3000/products?limit=10&offset=0&categoryId=2&orderBy=price

# Resposta

## A resposta será um JSON com a lista de produtos filtrados e paginados, semelhante ao seguinte:

![image](https://github.com/user-attachments/assets/5311e2ec-cb29-4a39-8fe7-07103c45fd6b)




# Estrutura do Projeto
## A estrutura do projeto é organizada da seguinte forma:
![image](https://github.com/user-attachments/assets/8bba8589-b387-4417-8739-ee0ba06e590e)

