import { NextFunction, Request, Response } from 'express'
import { CreateCategoryService } from 'src/services/category/CreateCategoryService'

class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) {}
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const user_id = req.user_id

            if (!user_id) throw new Error('Unauthorized')

            const { name } = req.body

            if (!name) throw new Error('Name is required')

            const category = await this.createCategoryService.execute(name)

            res.json(category)
        } catch (error) {
            next(error)
        }
    }
}

export { CreateCategoryController }
