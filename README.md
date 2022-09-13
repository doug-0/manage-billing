
# Manage Billing

Neste projeto foi desenvolvido uma aplicação para gerenciar o faturamento de uma dentista chamada Erica.

- Érica é uma dentista e atende seus pacientes apenas com atendimento particular.
- Como alguns tratamentos dentários são caros e demorados de serem concluídos, o
pagamento do tratamento do paciente pode ser parcelado.
- A cada tratamento, ela anota num caderninho quanto e quando cada paciente deve pagar.
- Para Érica saber quanto vai receber num determinado período, ela precisa somar cada valor
na calculadora para conseguir esta informação.

Utilizando ReactJs para o Front-end e NodeJs para o Back-end, seguindo a arquitetura de camadas Models, Controllers e Services.

Podendo visualizar todos o seu faturamento, filtrar por um período especifico, adicionar novos registros, atualizar e excluir.


## Stack utilizada

**Front-end:** Vite, React, Typescript, CSS3, React Hooks, Axios, react-router-dom.

**Back-end:** Node, Typescript, Express, Mongoose, MongoDB, Moment.


## Preview da aplicação

<details title="Tela Login" align="left">
    <br />
    <summary align="left"><strong><i>Tela de Login</i></strong></summary>
      <img src="https://user-images.githubusercontent.com/83235564/189977189-8cc0562d-ae98-4102-9722-c66e6a34a74d.png" />
</details>

<details title="Tela Registros" align="left">
    <br />
    <summary align="left"><strong><i>Tela com a lista de todos os registros</i></strong></summary>
      <img src="https://user-images.githubusercontent.com/83235564/189977470-7798aee3-82ef-45af-b5b4-298811e243f3.png" />
</details>
<details title="Filtro e Formulário" align="left">
    <br />
    <summary align="left"><strong><i>Filtro e Campos para adicionar regsitro</i></strong></summary>
      <img src="https://user-images.githubusercontent.com/83235564/189977605-1190d1ec-e5da-4b3f-81f9-695587467d60.png" />
</details>

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
