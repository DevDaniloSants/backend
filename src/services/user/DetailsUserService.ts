import { IGetUserDTO, IGetUserRepository } from 'src/repository/user'

export interface IDetailsUserService {
    execute(id: string): Promise<IGetUserDTO | null>
}

class DetailsUserService implements IDetailsUserService {
    constructor(private getUserRepository: IGetUserRepository) {}

    async execute(id: string) {
        const user = await this.getUserRepository.getUserById(id)

        return user
    }
}

export { DetailsUserService }
