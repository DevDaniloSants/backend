import { Router } from 'express'
import { makeAuthUserController } from 'src/factories/controllers/auth'

const authRoutes: Router = Router()

authRoutes.post('/', async (req, res, next) => {
    const authUserController = makeAuthUserController()

    return authUserController.handle(req, res, next)
})
export default authRoutes
