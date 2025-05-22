import {
    ICreateProductRepository,
    IProductRequest,
} from 'src/repository/product/CreateProductRepository'

class CreateProductService {
    constructor(private createProductRepository: ICreateProductRepository) {}

    async execute({
        name,
        price,
        description,
        category_id,
        imageUrl,
    }: IProductRequest): Promise<IProductRequest> {
        const product = {
            name,
            price,
            description,
            category_id,
            imageUrl,
        }

        const productCreated =
            await this.createProductRepository.create(product)

        return productCreated
    }
}

export { CreateProductService }
