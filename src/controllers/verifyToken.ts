import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface User {

    email: string;
    password: string;

};

export function verifyToken (request: Request, response: Response, next: NextFunction): void {

    const token = request.cookies.token;

    if (token) {

        const user: User = jwt.verify(token, 'secret') as User;

        request.user = user;

        next();

    };

};
