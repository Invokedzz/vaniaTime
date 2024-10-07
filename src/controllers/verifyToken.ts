import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export type Username = {

    username?: string;
    email: string;
    password: string;

};

export function verifyToken (request: Request, response: Response, next: NextFunction): void {

    const token = request.cookies.token;

    if (token) {

        const user: Username = jwt.verify(token, 'secret') as Username;

        request.username = user;

        next();

    };

};
