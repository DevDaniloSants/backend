import { Category } from '@prisma/client'
import { prisma } from 'prisma/prisma'

export interface ICreateCategoryRepository {
    create(categoryName: string): Promise<Category | null>
}

class CreateCategoryRepository implements ICreateCategoryRepository {
    async create(categoryName: string): Promise<Category | null> {
        const category = await prisma.category.create({
            data: {
                name: categoryName,
            },
        })

        return category
    }
}

export { CreateCategoryRepository }
