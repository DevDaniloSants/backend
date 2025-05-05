import { User } from '@prisma/client'
import { prisma } from 'prisma/prisma'

export interface IGetUserRepository {
    getUserByEmail(email: string): Promise<User>
}

export class GetUserRepository implements IGetUserRepository {
    async getUserByEmail(email: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        })

        if (!user) {
            throw new Error('User not found')
        }

        return user
    }
}
