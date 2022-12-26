import {router} from '@trpc/server'
import SuperJSON from 'superjson'

export function createRouter () {
// todo.add.context.to.generic
    return router().transformer(SuperJSON)
}