import { Request, Response } from "express";

export function homeInit (request: Request, response: Response): void {

    response.render("homepage");

};

export function registerInit (request: Request, response: Response): void {

    response.render("registerpage");

};

export function loginInit (request: Request, response: Response): void {

    response.render("loginpage");

};
