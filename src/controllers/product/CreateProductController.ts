import { NextFunction, Request, Response } from 'express'
import { CreateProductService } from 'src/services/product/CreateProductService'

class CreateProductController {
    constructor(private createProductService: CreateProductService) {}

    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { name, price, description, category_id } = request.body

            if (!name || !price || !description || !category_id) {
                throw new Error('All fields are required')
            }

            if (!request.file) {
                throw new Error('File is required')
            }

            const { filename: imageUrl } = request.file

            const product = await this.createProductService.execute({
                name,
                price,
                description,
                category_id,
                imageUrl,
            })

            response.json(product)
        } catch (error) {
            next(error)
        }
    }
}

export { CreateProductController }
