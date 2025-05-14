import { NextFunction, Request, Response } from 'express'
import { IDetailsUserService } from 'src/services/user/DetailsUserService'

class DetailsUserController {
    constructor(private detailsUserService: IDetailsUserService) {}
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const user_id = req.user_id

            if (!user_id) throw new Error('User ID is required')

            const user = await this.detailsUserService.execute(user_id)

            res.json(user)
        } catch (error) {
            next(error)
        }
    }
}
export { DetailsUserController }
