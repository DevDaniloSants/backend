import { Router } from 'express'
import userRoutes from './user/userRoutes'
import authRoutes from './auth/authRoutes'
import { categoryRoutes } from './category/categoryRoutes'
import { productRoutes } from './product/productRoutes'

const routes: Router = Router()

routes.use('/user', userRoutes)

routes.use('/session', authRoutes)

routes.use('/category', categoryRoutes)

routes.use('/product', productRoutes)

export default routes
