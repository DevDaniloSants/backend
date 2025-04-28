import express, { Express } from 'express'
import routes from './routes/routes'
import cors from 'cors'

class App {
    server: Express

    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    routes() {
        this.server.use('/api', routes)
    }
}

export default new App().server
