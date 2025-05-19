import { CreateCategoryController } from 'src/controllers/category/CreateCategoryController'
import { ListCategoryController } from 'src/controllers/category/ListCategoryController'
import { CreateCategoryRepository } from 'src/repository/category/CreateCategoryRepository'
import { ListCategoryRepository } from 'src/repository/category/ListCategoryRepository'
import { CreateCategoryService } from 'src/services/category/CreateCategoryService'
import { ListCategoryService } from 'src/services/category/ListCategoryService'

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

export const makeListCategoryController = () => {
    const listCategoryRepository = new ListCategoryRepository()
    const listCategoryService = new ListCategoryService(listCategoryRepository)
    const listCategoryController = new ListCategoryController(
        listCategoryService
    )

    return listCategoryController
}
