import { Router } from 'express'
import { makeCreateCategoryController } from 'src/factories/controllers/category'
import { isAuthenticated } from 'src/middleware/isAuthenticated'

const categoryRoutes = Router()

categoryRoutes.post('/', isAuthenticated, (req, res, next) => {
    const createCategoryController = makeCreateCategoryController()

    return createCategoryController.handle(req, res, next)
})

export { categoryRoutes }
