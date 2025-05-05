import { PasswordHasher } from 'src/adapters'
import { CreateUserController } from 'src/controllers/user/CreateUserController'
import { CreateUserRepository, GetUserRepository } from 'src/repository/user'
import { CreateUserService } from 'src/services/user/CreateUserService'

export const makeCreateUserController = () => {
    const createUserRepository = new CreateUserRepository()
    const getUserRepository = new GetUserRepository()
    const passwordHasher = new PasswordHasher()

    const createUserService = new CreateUserService(
        createUserRepository,
        getUserRepository,
        passwordHasher
    )

    const createUserController = new CreateUserController(createUserService)

    return createUserController
}
