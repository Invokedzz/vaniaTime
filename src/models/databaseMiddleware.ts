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

        const passwordHash = await bcrypt.hash(password, 10);

        await database.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, passwordHash]);

        response.send("We received your data");

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function loginPost (request: Request, response: Response): Promise <void> {

    const email: string = request.body.email;

    const password: string = request.body.password;

    try {

    } catch (error) {

        console.error("Something went wrong", error);
        
        throw new Error("Try again later");

    };

};