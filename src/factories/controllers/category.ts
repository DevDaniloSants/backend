import { CreateCategoryController } from 'src/controllers/category/CreateCategoryController'
import { CreateCategoryRepository } from 'src/repository/category/CreateCategoryRepository'
import { CreateCategoryService } from 'src/services/category/CreateCategoryService'

export const makeCreateCategoryController = () => {
    const createCategoryRepository = new CreateCategoryRepository()
    const createCategoryService = new CreateCategoryService(
        createCategoryRepository
    )

    const createCategoryController = new CreateCategoryController(
        createCategoryService
    )

    return createCategoryController
}
