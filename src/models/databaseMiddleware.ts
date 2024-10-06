import { Request, Response } from "express";

import { database } from "../db/database";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { validateRegister, validateLogin } from "../controllers/validatorsHeaders";

export async function registerPost (request: Request, response: Response): Promise <void> {

    const username: string = request.body.username;

    const email: string = request.body.email;

    const password: string = request.body.password;

    validateRegister(username, email, password);

    try {

        const existingUser = await database.query(`SELECT * FROM metroidvania.users WHERE email = $1`, [email]);

        if (existingUser.rows.length > 0) return;

        const passwordHash = await bcrypt.hash(password, 10);

        await database.query(`INSERT INTO metroidvania.users (username, email, password) VALUES ($1, $2, $3)`, [username, email, passwordHash]);

        response.redirect('/login');

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function loginPost (request: Request, response: Response): Promise <void> {

    const email: string = request.body.email;

    const password: string = request.body.password;

    validateLogin(email, password);

    try {

        const existingUser = await database.query(`SELECT * FROM metroidvania.users WHERE email = $1`, [email]);

        const user = existingUser.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {

            const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

            response.cookie('token', token, { httpOnly: true }); 

            response.send("They match!");

        };

        response.render('sendError');


    } catch (error) {

        console.error("Something went wrong", error);
        
        throw new Error("Try again later");

    };

};