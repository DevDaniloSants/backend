import { User } from '@prisma/client'
import { prisma } from 'prisma/prisma'

export interface IGetUserRepository {
    getUserByEmail(email: string): Promise<User | null>
}

export class GetUserRepository implements IGetUserRepository {
    async getUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        })

        return user
    }
}
