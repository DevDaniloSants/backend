import jwt from 'jsonwebtoken'

interface IUser {
    id: string
    name: string
    email: string
}

export interface IJwtProvider {
    generateToken: (user: IUser) => void
}

export class Jwt implements IJwtProvider {
    generateToken(user: IUser) {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined')
        }

        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d',
            }
        )

        return token
    }
}
