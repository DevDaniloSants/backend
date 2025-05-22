import { Product } from '@prisma/client'
import { prisma } from 'prisma/prisma'

export interface IProductRequest {
    name: string
    price: string
    description: string
    category_id: string
    imageUrl: string
}

export interface ICreateProductRepository {
    create(product: IProductRequest): Promise<Product>
}

class CreateProductRepository implements ICreateProductRepository {
    async create(product: IProductRequest): Promise<Product> {
        return prisma.product.create({
            data: product,
        })
    }
}
export { CreateProductRepository }
