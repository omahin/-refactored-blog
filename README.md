
# Text API - Post Management

Este código é um conjunto de controladores para gerenciar posts de texto em uma aplicação web. Ele lida com operações CRUD (Create, Read, Update, Delete) de textos usando o serviço `TextService`.

## Funcionalidades

### 1. **Criar Post**
Cria um novo post de texto com os dados fornecidos no corpo da requisição.

- **Rota**: `POST /posts`
- **Requisição**:
  ```json
  {
    "title": "Título do post",
    "content": "Conteúdo do post",
    "status": "publicado|rascunho",
    "author": "Autor do post"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Texto {title} criado com sucesso"
  }
  ```
  - Status HTTP: 201 (Criado)

### 2. **Listar Todos os Posts**
Retorna uma lista com todos os posts.

- **Rota**: `GET /posts`
- **Resposta**:
  ```json
  [
    {
      "id": "123",
      "title": "Título do post",
      "content": "Conteúdo do post",
      "status": "publicado",
      "author": "Autor"
    }
  ]
  ```

### 3. **Listar Um Post**
Retorna um post específico com base no ID fornecido na query string.

- **Rota**: `GET /post`
- **Parâmetro de query**: `id`
  ```json
  {
    "id": "123"
  }
  ```
- **Resposta**:
  - Sucesso:
    ```json
    {
      "id": "123",
      "title": "Título do post",
      "content": "Conteúdo do post",
      "status": "publicado",
      "author": "Autor"
    }
    ```
  - Erro (caso o post não seja encontrado):
    ```json
    {
      "message": "Texto com ID {id} não encontrado"
    }
    ```
  - Status HTTP: 404 (Não encontrado)

### 4. **Atualizar Post**
Atualiza as informações de um post com base no ID fornecido na query string e os novos dados fornecidos no corpo da requisição.

- **Rota**: `PUT /post`
- **Parâmetro de query**: `id`
- **Requisição**:
  ```json
  {
    "title": "Novo título",
    "content": "Novo conteúdo",
    "status": "publicado|rascunho",
    "author": "Novo autor"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Texto com ID {id} atualizado com sucesso",
    "updatedText": {
      "id": "123",
      "title": "Novo título",
      "content": "Novo conteúdo",
      "status": "publicado",
      "author": "Novo autor"
    }
  }
  ```
  - Status HTTP: 200 (Sucesso)

### 5. **Deletar Post**
Remove um post com base no ID fornecido na query string.

- **Rota**: `DELETE /post`
- **Parâmetro de query**: `id`
- **Resposta**:
  ```json
  {
    "message": "Texto com ID {id} deletado com sucesso"
  }
  ```
  - Status HTTP: 200 (Sucesso)

## Estrutura do Projeto

- **Controlador**: Define as funções de criação, listagem, atualização e exclusão dos posts.
- **TextService**: Serviço responsável pela lógica de manipulação dos dados de texto, como criação, recuperação, atualização e exclusão.

## Dependências

Este código depende de um módulo `TextService`, que gerencia a lógica de negócios dos textos.

## Como usar

1. Clone o repositório.
2. Instale as dependências necessárias.
3. Configure o servidor e o serviço `TextService`.
4. Inicie o servidor para interagir com as rotas de gerenciamento de textos.
