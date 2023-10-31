// const a = 5;
// const b = 7;

// console.log(a + b)
// OUTPUT node src/server.js
// OUTPUT 12

// CommonJS => require
// const http = require('http')

// ESModules => import/export
import http from 'node:http'

// Rotas / Metodos HTTP e URL
// - Criar
// - Listar 
// - Editar
// - Deletar

// GET, POST, PUT, PATCH, DELETE
// GET = Buscar um recurso do backend (ex: lista de usuarios)
// POST = Criar um recurso no backend (ex: usuario)
// PUT = Atualizar um recurso por completo no backend
// PATCH = Atualizar um recurso especifico de uma entidade no backend (ex: nome de usuario)
// DELETE = Deletar um recurso do backend

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisicao/Respostas) => Metadados

// HTTP Status Code
const users = []

const server = http.createServer((request, response) => {
    const { method, url } = request
    
    // console.log(method, url)
    // GET /
    if (method == 'GET' && url == '/users') {
        return response
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: 'Gabriel Gontijo',
            email: 'gontijogabr@gmail.com',
        })
        return response.writeHead(201).end()
    }

    return response.writeHead(404).end('Not Fount')
})

// localhost:3333
server.listen(3333)

