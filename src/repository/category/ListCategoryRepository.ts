import { prisma } from 'prisma/prisma'

export interface IListCategoryDTO {
    id: string
    name: string
}

export interface IListCategoryRepository {
    getAll(): Promise<IListCategoryDTO[]>
}

class ListCategoryRepository implements IListCategoryRepository {
    async getAll() {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true,
            },
        })

        return categories
    }
}

export { ListCategoryRepository }
