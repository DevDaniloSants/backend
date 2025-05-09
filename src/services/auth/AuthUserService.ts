import { PasswordHasher } from 'src/adapters'
import { Jwt } from 'src/adapters/jwt'

import { GetUserRepository } from 'src/repository/user'

export interface IAuthRequest {
    email: string
    password: string
}

export class AuthUserService {
    constructor(
        private getUserRepository: GetUserRepository,
        private passwordHasher: PasswordHasher,
        private jwt: Jwt
    ) {}

    async execute({ email, password }: IAuthRequest) {
        const user = await this.getUserRepository.getUserByEmail(email)

        if (!user) {
            throw new Error('User/password incorrect')
        }

        const passwordMatch = await this.passwordHasher.compare(
            password,
            user.password
        )

        if (!passwordMatch) {
            throw new Error('User/password incorrect')
        }

        const token = this.jwt.generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
        })

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token,
        }
    }
}
