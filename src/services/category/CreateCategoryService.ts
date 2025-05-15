import { ICreateCategoryRepository } from 'src/repository/category/CreateCategoryRepository'

class CreateCategoryService {
    constructor(private createCategoryRepository: ICreateCategoryRepository) {}
    async execute(name: string) {
        const category = await this.createCategoryRepository.create(name)

        return category
    }
}

export { CreateCategoryService }
