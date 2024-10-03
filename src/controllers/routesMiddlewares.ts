import { Request, Response, NextFunction } from "express";

export const homePage = (request: Request, response: Response): void => {

    response.render("homepage");

};

export const loginPage = (request: Request, response: Response): void => {

    response.render("loginpage");

};

export const registerPage = (request: Request, response: Response): void => {

    response.render("registerpage");

};

export const errorPage = (request: Request, response: Response, next: NextFunction): void => {

    response.sendStatus(404);

    next();

};