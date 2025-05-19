import { NextFunction, Request, Response } from 'express'
import { ListCategoryService } from 'src/services/category/ListCategoryService'

class ListCategoryController {
    constructor(private listCategoryService: ListCategoryService) {}

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await this.listCategoryService.execute()

            res.send(categories)
        } catch (error) {
            next(error)
        }
    }
}

export { ListCategoryController }
