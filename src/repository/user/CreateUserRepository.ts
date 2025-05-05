import { prisma } from 'prisma/prisma'
import { iUserRequest } from '../../interfaces/user'
import { User } from '@prisma/client'

export interface ICreateUserRepository {
    create(user: iUserRequest): Promise<User>
}

export class CreateUserRepository implements ICreateUserRepository {
    async create(user: iUserRequest) {
        const newUser = await prisma.user.create({
            data: user,
        })

        return newUser
    }
}
