import { Request, Response } from "express";

export function getHome (request: Request, response: Response): void {

    response.render('test');

};