# 📘 API - Documentação Simplificada

Esta API contém módulos de **Autenticação**, **Usuários**, **Carteiras**, **Compras**, **Extratos de Carteira** e **Pacotes**.

Rotas protegidas utilizam **Bearer Token** gerado no login.

---

# Autenticação (`/auth`)

## **POST /auth/register**
Registra um usuário.

### Payload
```json
{
  "nome": "Carlos",
  "email": "email@email.com",
  "senha": "1234",
  "tipo": "usuario" 
}
```

### cURL
```sh
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"nome":"Carlos","email":"carlos@mail.com","senha":"1234","tipo":"usuario"}'
```

---

## **POST /auth/login**
Retorna o token JWT.

### Payload
```json
{
  "email": "carlos@mail.com",
  "senha": "1234"
}
```

### cURL
```sh
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"email":"carlos@mail.com","senha":"1234"}'
```

---

# Usuários (`/users`)

## **GET /users** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/users
```

## **GET /users/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/users/1
```

## **POST /users**
```sh
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"nome":"Carlos","email":"c@mail.com","senha":"1234","tipo":"admin"}'
```

## **PUT /users/:id** _(auth)_
```sh
curl -X PUT http://localhost:3000/users/1 -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"nome":"Novo Nome"}'
```

## **DELETE /users/:id** _(auth)_
```sh
curl -X DELETE http://localhost:3000/users/1 -H "Authorization: Bearer TOKEN"
```

---

# Carteiras (`/carteiras`)

## **GET /carteiras** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/carteiras
```

## **GET /carteiras/user/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/carteiras/user/1
```

## **GET /carteiras/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/carteiras/1
```

## **POST /carteiras**
```sh
curl -X POST http://localhost:3000/carteiras -H "Content-Type: application/json" -d '{"saldoDinheiro":100,"saldoMilhas":2000,"fk_userId":1}'
```

## **PUT /carteiras/:id** _(auth)_
```sh
curl -X PUT http://localhost:3000/carteiras/1 -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"valorMoeda":500,"valorMilhas":1000,"fk_idPacote":2}'
```

## **DELETE /carteiras/:id** _(auth)_
```sh
curl -X DELETE http://localhost:3000/carteiras/1 -H "Authorization: Bearer TOKEN"
```

---

# Compras (`/compras`)

## **GET /compras** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/compras
```

## **GET /compras/user/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/compras/user/1
```

## **GET /compras/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/compras/1
```

## **POST /compras**
```sh
curl -X POST http://localhost:3000/compras -H "Content-Type: application/json" -d '{"fk_userId":1,"fk_carteiraId":2,"fk_pacoteId":3,"valor":500}'
```

## **PUT /compras/:id** _(auth)_
```sh
curl -X PUT http://localhost:3000/compras/1 -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"data":{"valor":700}}'
```

## **DELETE /compras/:id** _(auth)_
```sh
curl -X DELETE http://localhost:3000/compras/1 -H "Authorization: Bearer TOKEN"
```

---

# Extratos de Carteira (`/extratos-carteira`)

## **GET /extratos-carteira** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/extratos-carteira
```

## **GET /extratos-carteira/carteira/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/extratos-carteira/carteira/1
```

## **GET /extratos-carteira/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/extratos-carteira/1
```

## **POST /extratos-carteira**
```sh
curl -X POST http://localhost:3000/extratos-carteira -H "Content-Type: application/json" -d '{"fk_carteiraId":1,"tipo":"entrada","valor":200}'
```

## **PUT /extratos-carteira/:id** _(auth)_
```sh
curl -X PUT http://localhost:3000/extratos-carteira/1 -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"data":{"valor":300}}'
```

## **DELETE /extratos-carteira/:id** _(auth)_
```sh
curl -X DELETE http://localhost:3000/extratos-carteira/1 -H "Authorization: Bearer TOKEN"
```

---

# Pacotes (`/pacotes`)

## **GET /pacotes** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/pacotes
```

## **GET /pacotes/:id** _(auth)_
```sh
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/pacotes/1
```

## **POST /pacotes**
```sh
curl -X POST http://localhost:3000/pacotes -H "Content-Type: application/json" -d '{"titulo":"Pacote Caribe","destino":"Cancún","dataIda":"2025-06-01","dataVolta":"2025-06-10","hotel":"5 estrelas","translado":"sim","descricao":"Pacote completo","precoBaseMoeda":3500,"precoBaseMilhas":200000}'
```

## **PUT /pacotes/:id** _(auth)_
```sh
curl -X PUT http://localhost:3000/pacotes/1 -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"data":{"precoBaseMoeda":4000}}'
```

## **DELETE /pacotes/:id** _(auth)_
```sh
curl -X DELETE http://localhost:3000/pacotes/1 -H "Authorization: Bearer TOKEN"
```
