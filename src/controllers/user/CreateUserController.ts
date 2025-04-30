import { Request, Response, NextFunction } from 'express'
import { createUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                throw new Error('Missing required fields')
            }

            const user = await createUserService.execute({
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

const createUserController = new CreateUserController()

export { createUserController }
