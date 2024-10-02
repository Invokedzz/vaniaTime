import { Request, Response } from "express";

import { getHome } from "../models/modelsRoutes";

export const homepage = (request: Request, response: Response): void => {

    getHome(request, response);

};