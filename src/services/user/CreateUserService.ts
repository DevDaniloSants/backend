import { ICreateUserRepository, IGetUserRepository } from 'src/repository/user'
import { iUserRequest } from '../../interfaces/user'
import { User } from '@prisma/client'
import { IPasswordHasher } from 'src/adapters'

export interface ICreateUserService {
    execute(data: iUserRequest): Promise<User>
}

export class CreateUserService implements ICreateUserService {
    constructor(
        private createUserRepository: ICreateUserRepository,
        private getUserRepository: IGetUserRepository,
        private passwordHasher: IPasswordHasher
    ) {}
    async execute({ name, email, password }: iUserRequest) {
        const userAlreadyExists =
            await this.getUserRepository.getUserByEmail(email)
        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const passwordHash = await this.passwordHasher.hash(password)

        const user = await this.createUserRepository.create({
            name,
            email,
            password: passwordHash,
        })

        return user
    }
}
