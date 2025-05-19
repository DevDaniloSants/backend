import { IListCategoryRepository } from 'src/repository/category/ListCategoryRepository'

class ListCategoryService {
    constructor(private getCategoryRepository: IListCategoryRepository) {}

    async execute() {
        const categories = await this.getCategoryRepository.getAll()

        return categories
    }
}

export { ListCategoryService }
