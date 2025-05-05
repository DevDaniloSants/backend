import bcrypt from 'bcrypt'

export interface IPasswordHasher {
    hash(password: string): Promise<string>
}

export class PasswordHasher implements IPasswordHasher {
    async hash(password: string) {
        return await bcrypt.hash(password, 10)
    }
}
