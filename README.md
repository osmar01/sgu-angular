# Gerenciamento de Usuarios SGU

Este projeto é uma aplicação de gerenciamento de usuários construída com Angular, que inclui operações de CRUD (Create, Read, Update, Delete), autenticação de usuários e sistema de login.

## Funcionalidades

### CRUD de usuários:
- Criar, listar, editar e excluir usuários.
- Atributos dos usuários: ID, Nome, Email, Senha, Data de Cadastro.
### Autenticação e Login:
- Rotas protegidas, acessíveis apenas para usuários autenticados.
- Sistema de login para validação de credenciais de usuário.

## Tecnologias Utilizadas
Frontend:
- Angular (versão 18+)
- HTML, CSS
- Typescript,
- SecureLS,
- Angular Material

## Requisitos de Sistema
- Node.js versão 18 ou superior
- Angular CLI versão 18+
- Npm versão 10+
- Angular Material versão 18+

## Instalação

Instale Sgu-front com npm

1. Clone este repositório:
```bash
  git clone https://github.com/osmar01/user-manager-system.git
```
2. Navegue até o diretório do projeto:
```bash
  cd sgu-front
```
3. Instale as dependências:
```bash
  npm i
```
4. Inicie o servidor de desenvolvimento:
```bash
  ng serve
```
5. Acesse a aplicação em seu navegador:
```bash
  http://localhost:4200
```

## Autenticação
A autenticação é baseada em tokens JWT.
Ao fazer login, o token é armazenado no localStorage e é utilizado para proteger as rotas privadas.

### Usuário administrador
Verificar se a Api esta rodando primeniro.

Utilize o usuário administrador para fazer login:
```bash
  email: admin@jabil.com
  senha admin2024
```

## Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo:
- Faça um fork do projeto.
- Crie uma branch para sua funcionalidade (git checkout -b nova-funcionalidade).
- Faça o commit de suas alterações (git commit -am 'Adiciona nova funcionalidade').
- Envie para o repositório remoto (git push origin nova-funcionalidade).
- Abra um Pull Request.


## Referência

 - [GDS-training-ED](https://github.com/osmar01/GDS-training-ED.git)