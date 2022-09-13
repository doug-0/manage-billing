
# Manage Billing

Neste projeto foi desenvolvido uma aplicação para gerenciar o faturamento de uma dentista chamada Erica.

Utilizando ReactJs para o Front-end e NodeJs para o Back-end, seguindo a arquitetura de camadas Models, Controllers e Services.

Podendo visualizar todos o seu faturamento, filtrar por um período especifico, adicionar novos registros, atualizar e excluir.


## Stack utilizada

**Front-end:** Vite, React, Typescript, CSS3, React Hooks, Axios, react-router-dom, Docker.

**Back-end:** Node, Typescript, Express, Mongoose, MongoDB, Moment, Docker.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu arquivo .env

#### No Front-End
`REACT_APP_API_LINK`

#### No Back-End
`MONGO_USERNAME`
`MONGO_PASSWORD`
`DB_NAME`
`SERVER_PORT`


## Rodando localmente

#### Clone o projeto

```bash
  git clone git@github.com:doug-0/manage-billing.git
```

#### Entre no diretório front-end do projeto

```bash
  cd manage-billing/src/frontend
```

#### Instale as dependências
- Ceritfique-se de ter o [Node](https://nodejs.org/pt-br/) instalado e rodando na sua máquina.


```bash
  npm install
```

### Entre no diretório back-end do projeto

```bash
  cd manage-billing/src/backend
```

#### Instale as dependências

```bash
  npm install
```

#### Inicie o servidor frontend

```bash
  cd manage-billing/src/backend && npm run dev
```

#### Inicie o servidor frontend

```bash
  cd manage-billing/src/frontend && npm run dev
```

## Rodando com Docker 

Ceritfique-se de ter o [Docker](https://www.docker.com/) instalado e rodando na sua máquina.

Clone o projeto

```bash
  git clone git@github.com:doug-0/manage-billing.git
```

Entre no diretório raiz do projeto

```bash
  cd manage-billing
```

Inicie o Docker Compose 

```bash
  docker-compose up
```

Para finalizar o Docker Compose 

```bash
  docker-compose down
```


