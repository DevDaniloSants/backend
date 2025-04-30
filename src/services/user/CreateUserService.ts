import { getUserRepository, createUserRepository } from 'src/repository/user'
import { iUserRequest } from '../../interfaces/user'

class CreateUserService {
    async execute({ name, email, password }: iUserRequest) {
        const userAlreadyExists = await getUserRepository.getUserByEmail(email)
        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const user = await createUserRepository.create({
            name,
            email,
            password,
        })

        return user
    }
}

const createUserService = new CreateUserService()

export { createUserService }
