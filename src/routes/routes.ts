import { Router } from 'express'
import userRoutes from './user/userRoutes'
import authRoutes from './auth/authRoutes'

const routes: Router = Router()

routes.use('/user', userRoutes)
routes.use('/session', authRoutes)

export default routes
