import { prisma } from 'prisma/prisma'

export interface IGetUserDTO {
    id: string
    name: string
    email: string
    password?: string
}

export interface IGetUserRepository {
    getUserByEmail(email: string): Promise<IGetUserDTO | null>
    getUserById(id: string): Promise<IGetUserDTO | null>
}

export class GetUserRepository implements IGetUserRepository {
    async getUserByEmail(email: string): Promise<IGetUserDTO | null> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            },
        })

        return user
    }
    async getUserById(id: string): Promise<IGetUserDTO | null> {
        const user = await prisma.user.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        })

        return user
    }
}
