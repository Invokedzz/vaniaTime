import { request, Request, Response } from "express";

export const homepage = (request: Request, response: Response): void => {

    response.render("homepage");

};