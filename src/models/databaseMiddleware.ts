import { Request, Response } from "express";

import { database } from "../db/database";

import { validateRegister, validateLogin } from "../controllers/validatorsHeaders";

import { Username } from "../controllers/verifyToken";

import fs from "fs";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";


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

            response.cookie('token', token, { httpOnly: true, secure: true }); 

            return response.render("userLogin", { username: user.username });

        };

        response.render('sendError');


    } catch (error) {

        console.error("Something went wrong", error);
        
        throw new Error("Try again later");

    };

};

export async function userProfile (request: Request, response: Response): Promise <void> {

    try {

        const token = request.cookies.token;

        const user: Username = jwt.verify(token, 'secret') as Username;

        const userInfo = await database.query(`SELECT * FROM metroidvania.users WHERE id = $1`, [user.id]);
        
        if (userInfo.rows.length > 0) {

            const userDetails = userInfo.rows[0];

            response.render("userProfile", { 

                username: userDetails.username, 

                email: userDetails.email, 
                
            });
            
        };

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };
    
};

export async function updateProfile (request: Request, response: Response): Promise <void> {

    const username: string = request.body.username;

    const email: string = request.body.email;
    
    try {

        const token = request.cookies.token;

        const user: Username = jwt.verify(token, 'secret') as Username;

        await database.query(`UPDATE metroidvania.users SET username = $1, email = $2 WHERE id = $3`, [username, email, user.id]);

        response.render('editUserSuccess');

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    }; 

}; 

export async function deleteProfile (request: Request, response: Response): Promise <void> {

    try {

        const token = request.cookies.token;

        const user: Username = jwt.verify(token, 'secret') as Username;

        await database.query(`DELETE FROM metroidvania.users WHERE id = $1`, [user.id]);

        response.redirect('/');

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function guidesPreview (request: Request, response: Response): Promise <void> {

    try {

        const token = request.cookies.token;

        const user: Username = jwt.verify(token, 'secret') as Username;

        const userInfo = await database.query(`SELECT * FROM metroidvania.users WHERE id = $1`, [user.id]);

        const username = userInfo.rows[0].username;

        response.render('createGuides', { username });

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function createGuide (request: Request, response: Response): Promise <void> {

    const title: string = request.body.title;

    const author: string = request.body.author;

    const message: string = request.body.message;

    const image = request.file;

    try {

        const imagePath = image?.path;

        const imageAnalysis = fs.readFileSync(imagePath as string);

        const result = await database.query(`INSERT INTO metroidvania.guide (title, author, message, image) VALUES ($1, $2, $3, $4)`, [title, author, message, imageAnalysis]);

        const guide = result.rows[0];

        response.render('receiveGuides', { guide });

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function receiveGuidesInfo (request: Request, response: Response): Promise <void> {

    try {

        const result = await database.query(`SELECT * FROM metroidvania.guide`);

        const guides = result.rows.map(guide => ({

            ...guide,
            image: guide.image ? guide.image.toString('base64'): null,

        }));

        response.render('viewGuideslogin', { guides });

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};
