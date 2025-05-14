import { NextFunction, Request, Response } from 'express'
import { AuthUserService } from 'src/services/auth/AuthUserService'

export class AuthUserController {
    constructor(private authUserService: AuthUserService) {}
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body

            const user = await this.authUserService.execute({
                email,
                password,
            })

            res.json(user)
        } catch (error) {
            next(error)
        }
    }
}
