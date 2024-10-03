import { Request, Response } from "express";

import { registerPost, loginPost, homeInit, registerInit, loginInit } from "./databaseMiddleware";
import { register } from "ts-node";

export const homePage = (request: Request, response: Response): void => {

    homeInit(request, response);

};

export const registerPage = (request: Request, response: Response): void => {

    registerInit(request, response);

};

export const loginPage = (request: Request, response: Response): void => {

    loginInit(request, response);

};

export const registerMethod = async (request: Request, response: Response): Promise <void> => {

    await registerPost(request, response);

};

export const loginMethod = async (request: Request, response: Response): Promise <void> => {

    await loginPost(request, response);

};