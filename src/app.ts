import express, { Express, Response, Request, NextFunction } from 'express'
import routes from './routes/routes'
import cors from 'cors'

class App {
    server: Express

    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
        this.errorHandler()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    routes() {
        this.server.use('/api', routes)
    }

    errorHandler() {
        this.server.use(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (err: Error, req: Request, res: Response, next: NextFunction) => {
                if (err instanceof Error) {
                    res.status(400).json({
                        message: err.message,
                    })
                }

                res.status(500).json({
                    message: 'Ocorreu um erro no servidor',
                    error: 'Internal Server Error',
                })
            }
        )
    }
}

export default new App().server
