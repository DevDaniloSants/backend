import { Router } from 'express'
import {
    makeCreateCategoryController,
    makeListCategoryController,
} from 'src/factories/controllers/category'
import { isAuthenticated } from 'src/middleware/isAuthenticated'

const categoryRoutes = Router()

categoryRoutes.post('/', isAuthenticated, (req, res, next) => {
    const createCategoryController = makeCreateCategoryController()

    return createCategoryController.handle(req, res, next)
})

categoryRoutes.get('/', isAuthenticated, (req, res, next) => {
    const listCategoryController = makeListCategoryController()

    return listCategoryController.handle(req, res, next)
})

export { categoryRoutes }
