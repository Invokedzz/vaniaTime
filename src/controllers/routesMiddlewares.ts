import { Request, Response } from "express";

export const homepage = (request: Request, response: Response): void => {

    response.render("homepage");

};

export const loginpage = (request: Request, response: Response): void => {

    response.render("loginpage");

};

export const registerpage = (request: Request, response: Response): void => {

    response.render("registerpage");

};