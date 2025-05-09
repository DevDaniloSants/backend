import bcrypt from 'bcrypt'

export interface IPasswordHasher {
    hash: (password: string) => Promise<string>
    compare: (password: string, passwordHash: string) => Promise<boolean>
}

export class PasswordHasher implements IPasswordHasher {
    async hash(password: string) {
        return await bcrypt.hash(password, 10)
    }

    async compare(password: string, passwordHash: string) {
        return await bcrypt.compare(password, passwordHash)
    }
}
