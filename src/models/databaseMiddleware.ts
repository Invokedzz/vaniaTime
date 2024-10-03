import { Request, Response } from "express";

import { database } from "../db/database";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export async function registerPost (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error("Something went wrong", error);

        throw new Error("Try again later");

    };

};

export async function loginPost (request: Request, response: Response): Promise <void> {

    try {

    } catch (error) {

        console.error("Something went wrong", error);
        
        throw new Error("Try again later");

    };

};