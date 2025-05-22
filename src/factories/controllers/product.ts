import { CreateProductController } from 'src/controllers/product/CreateProductController'
import { CreateProductRepository } from 'src/repository/product/CreateProductRepository'
import { CreateProductService } from 'src/services/product/CreateProductService'

export const makeCreateProductController = () => {
    const createProductRepository = new CreateProductRepository()
    const createProductService = new CreateProductService(
        createProductRepository
    )
    const createProductController = new CreateProductController(
        createProductService
    )

    return createProductController
}
