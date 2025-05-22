import { Router } from 'express'
import { makeCreateProductController } from 'src/factories/controllers/product'
import { isAuthenticated } from 'src/middleware/isAuthenticated'
import { upload } from 'src/middleware/upload'

const productRoutes = Router()

productRoutes.post(
    '/',
    isAuthenticated,
    upload.single('file'),
    async (req, res, next) => {
        const createProductController = makeCreateProductController()
        return await createProductController.handle(req, res, next)
    }
)

export { productRoutes }
