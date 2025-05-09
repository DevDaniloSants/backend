import { PasswordHasher } from 'src/adapters'
import { Jwt } from 'src/adapters/jwt'
import { AuthUserController } from 'src/controllers/auth/AuthUserController'
import { GetUserRepository } from 'src/repository/user'
import { AuthUserService } from 'src/services/auth/AuthUserService'

export const makeAuthUserController = () => {
    const getUserRepository = new GetUserRepository()
    const passwordHasher = new PasswordHasher()
    const jwt = new Jwt()

    const authUserService = new AuthUserService(
        getUserRepository,
        passwordHasher,
        jwt
    )

    const authUserController = new AuthUserController(authUserService)

    return authUserController
}
