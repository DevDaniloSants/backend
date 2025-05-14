import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization

    if (!authToken) {
        res.status(401).json({
            message: 'Token is missing',
        })

        return
    }

    const [, token] = authToken.split(' ')

    try {
        if (!process.env.JWT_SECRET)
            throw new Error('JWT_SECRET is not defined')

        const { sub } = jwt.verify(token, process.env.JWT_SECRET) as IPayload

        req.user_id = sub

        return next()
    } catch (error) {
        console.error(error)
        res.status(401).json({
            message: 'Invalid token',
        })

        return
    }
}
