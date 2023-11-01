import { buildRoutPath } from "../utils/build-route-path.js"
import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutPath('/users'),
        handler: (request, response) => {
            const users = database.select('users')

            return response.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: buildRoutPath('/users'),
        handler: (request, response) => {
            const { name, email } = request.body

            const user = {
                id: randomUUID(),
                name,
                email,
            }
    
            database.insert('users', user)
    
            return response.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path: buildRoutPath('/users/:id'),
        handler: (request, response) => {
            const { id } = request.params
            const { name, email } = request.body

            database.update('users', id, {
                name,
                email,
            })

            return response.writeHead(204).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutPath('/users/:id'),
        handler: (request, response) => {
            const { id } = request.params

            database.delete('users', id)

            return response.writeHead(204).end()
        }
    }
]