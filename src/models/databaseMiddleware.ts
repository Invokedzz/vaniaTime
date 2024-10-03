import { Request, Response } from "express";

import { database } from "../db/database";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export function homeInit (request: Request, response: Response): void {

    response.render("homepage");

};

export function registerInit (request: Request, response: Response): void {

    response.render("registerpage");

};

export function loginInit (request: Request, response: Response): void {

    response.render("loginpage");

};

export async function registerPost (request: Request, response: Response): Promise <void> {

    const username: string = request.body.username;

    const email: string = request.body.email;

    const password: string = request.body.email;

    try {

        const existingUser = await database.query(`SELECT * FROM metroidvania.users WHERE email = $1`, [email]);

        if (existingUser.rows.length > 0) return;

        const passwordHash = await bcrypt.hash(password, 10);

        await database.query(`INSERT INTO metroidvania.users (username, email, password) VALUES ($1, $2, $3)`, [username, email, passwordHash]);

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function loginPost (request: Request, response: Response): Promise <void> {

    const email: string = request.body.email;

    const password: string = request.body.password;

    try {

        const user = await database.query(`SELECT * FROM metroidvania.users WHERE email = $1`, [email]);

        const rows = user.rows;

        if (rows && await bcrypt.compare(password, rows[0].password)) {

            const payload = {
                id: rows[0].id,
                username: rows[0].username
            };

            response.render('/',  payload);

        };

    } catch (error) {

        console.error("Something went wrong", error);
        
        throw new Error("Try again later");

    };

};