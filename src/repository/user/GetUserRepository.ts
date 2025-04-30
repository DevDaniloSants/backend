import { prisma } from 'prisma/prisma'

class GetUserRepository {
    async getUserByEmail(email: string) {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        })

        return user
    }
}
const getUserRepository = new GetUserRepository()

export { getUserRepository }
