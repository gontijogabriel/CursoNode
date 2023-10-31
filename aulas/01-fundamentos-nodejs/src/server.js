// const a = 5;
// const b = 7;

// console.log(a + b)
// OUTPUT node src/server.js
// OUTPUT 12

// CommonJS => require
// const http = require('http')

// ESModules => import/export
import http from 'node:http'

const server = http.createServer((request, response) => {
    return response.end('Hello World')
})

// localhost:3333
server.listen(3333)

