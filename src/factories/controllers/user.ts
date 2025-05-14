import { PasswordHasher } from 'src/adapters'
import { CreateUserController } from 'src/controllers/user/CreateUserController'
import { DetailsUserController } from 'src/controllers/user/DetailsUserController'
import { CreateUserRepository, GetUserRepository } from 'src/repository/user'
import { CreateUserService } from 'src/services/user/CreateUserService'
import { DetailsUserService } from 'src/services/user/DetailsUserService'

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

export const makeDetailsUserController = () => {
    const getUserRepository = new GetUserRepository()
    const detailsUserService = new DetailsUserService(getUserRepository)

    const detailsUserController = new DetailsUserController(detailsUserService)

    return detailsUserController
}
