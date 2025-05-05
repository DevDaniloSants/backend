import { Router } from 'express'

import { makeCreateUserController } from 'src/factories/controllers/user'

const userRoutes: Router = Router()

userRoutes.post('/', async (req, res, next) => {
    const createUserController = makeCreateUserController()

    return await createUserController.handle(req, res, next)
})
export default userRoutes
