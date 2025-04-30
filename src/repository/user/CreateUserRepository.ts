import { prisma } from 'prisma/prisma'
import { iUserRequest } from '../../interfaces/user'

class CreateUserRepository {
    async create(user: iUserRequest) {
        const newUser = prisma.user.create({
            data: user,
        })

        return newUser
    }
}

const createUserRepository = new CreateUserRepository()

export { createUserRepository }
