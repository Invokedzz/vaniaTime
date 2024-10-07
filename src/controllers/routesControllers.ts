import { Request, Response } from "express";

export function homeInit (request: Request, response: Response): void {

    response.render("homePage");

};

export function registerInit (request: Request, response: Response): void {

    response.render("registerPage");

};

export function loginInit (request: Request, response: Response): void {

    response.render("loginPage");

};

export function createTopics (request: Request, response: Response): void {

};

export function viewTopics (request: Request, response: Response): void {

};