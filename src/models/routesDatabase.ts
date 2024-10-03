import { Request, Response } from "express";

import { registerPost, loginPost } from "./databaseMiddleware";

export const registerMethod = async (request: Request, response: Response): Promise <void> => {

    await registerPost(request, response);

};

export const loginMethod = async (request: Request, response: Response): Promise <void> => {

    await loginPost(request, response);

};