# ChatApp - Sistema de Cadastro, Login e Comunicação em Tempo Real

## Sobre o Projeto

O **ChatApp** é uma API desenvolvida em **Node.js** com **MongoDB** para permitir o cadastro e login de usuários, além da troca de mensagens em tempo real através de um sistema de chat. A API oferece endpoints para gerenciamento de usuários, autenticação segura e envio de mensagens entre usuários.

## Tecnologias Utilizadas

- **Back-end:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose ODM)
  - JSON Web Token (JWT) para autenticação
  - Bcrypt para hash de senhas
  - Dotenv para gerenciamento de variáveis de ambiente
  - Cors para permissões de requisições

## Funcionalidades

- **Cadastro e Login de Usuários** com autenticação JWT
- **CRUD de Usuários**: Criar, listar e buscar usuários
- **Sistema de Chat**: Permite a criação de chats entre usuários
- **Troca de Mensagens** em tempo real
- **Proteção de Rotas**: Apenas usuários autenticados podem acessar determinadas funcionalidades

## Endpoints da API

### **Usuários (`/api/users`)**
- `POST /register` → Cadastro de um novo usuário
- `POST /login` → Login do usuário
- `GET /find/:userId` → Buscar usuário pelo ID
- `GET /` → Listar todos os usuários

### **Chats (`/api/chats`)**
- `POST /` → Criar um novo chat entre usuários
- `GET /:userId` → Buscar todos os chats de um usuário
- `GET /find/:firstId/:secondId` → Encontrar um chat entre dois usuários

### **Mensagens (`/api/messages`)**
- `POST /` → Enviar uma nova mensagem em um chat
- `GET /:chatId` → Buscar todas as mensagens de um chat específico

## Instalação e Execução

### **1. Clone o Repositório**
```sh
git clone https://github.com/HirokiAsano1/ChatApp
cd server
npm install
npm start
```
A API estará rodando em http://localhost:5000.
