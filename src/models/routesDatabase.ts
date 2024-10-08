import { Request, Response } from "express";

import { registerPost, loginPost, userProfile, updateProfile, deleteProfile, createGuide } from "./databaseMiddleware";

import { homeInit, loginInit, registerInit, createGuides, viewGuides, viewGuidesLogin } from "../controllers/routesControllers";

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

export const viewMethod = (request: Request, response: Response): void => {

    viewGuides(request, response);

};

export const createMethod = (request: Request, response: Response): void => {

    createGuides(request, response);

};

export const viewMethodLogin = (request: Request, response: Response): void => {

    viewGuidesLogin(request, response);

};

export const methodProfile = async (request: Request, response: Response): Promise <void> => {

    await userProfile(request, response);

};

export const updateProfileMethod = async (request: Request, response: Response): Promise <void> => {

    await updateProfile(request, response);

};

export const deleteProfileMethod = async (request: Request, response: Response): Promise <void> => {

    await deleteProfile(request, response);

};

export const createGuideMethod = async (request: Request, response: Response): Promise <void> => {

    await createGuide(request, response);

};