import { Request, Response, NextFunction } from 'express'
import { ICreateUserService } from 'src/services/user/CreateUserService'

export interface ICreateUserController {
    handle(req: Request, res: Response, next: NextFunction): Promise<void>
}

export class CreateUserController implements ICreateUserController {
    constructor(private createUserService: ICreateUserService) {}
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                throw new Error('Missing required fields')
            }

            const user = await this.createUserService.execute({
                name,
                email,
                password,
            })

            res.json(user)
        } catch (error) {
            next(error)
        }
    }
}
