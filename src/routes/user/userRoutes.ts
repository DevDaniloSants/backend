import { NextFunction, Request, Response, Router } from 'express'

import {
    makeCreateUserController,
    makeDetailsUserController,
} from 'src/factories/controllers/user'
import { isAuthenticated } from 'src/middleware/isAuthenticated'

const userRoutes: Router = Router()

userRoutes.get(
    '/me',
    isAuthenticated,
    async (req: Request, res: Response, next: NextFunction) => {
        const detailsUserController = makeDetailsUserController()

        return await detailsUserController.handle(req, res, next)
    }
)

userRoutes.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        const createUserController = makeCreateUserController()

        return await createUserController.handle(req, res, next)
    }
)

export default userRoutes
