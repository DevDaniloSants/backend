import { Router } from 'express'
import { createUserController } from '../../controllers/user/CreateUserController'

const userRoutes: Router = Router()

userRoutes.post('/', createUserController.handle)
export default userRoutes
