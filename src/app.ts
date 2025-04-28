import express, { Express } from 'express'
import routes from './routes/routes'

class App {
    server: Express

    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use('/api', routes)
    }
}

export default new App().server
