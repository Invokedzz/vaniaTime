import { Request, Response } from "express";

import { homeInit, loginInit, registerInit } from "../controllers/routesControllers";

describe ("Handling with the renders", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    beforeEach((): void => {

        Request = {};

        Response = {

            render: jest.fn(),

        };

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should handle the responses correctly // homepage", (): void => {

        homeInit(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("homepage");

    });

    it ("Should handle the responses correctly // loginpage", (): void => {

        loginInit(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("loginpage");

    });

    it ("Should handle the responses correctly // registerpage", (): void => {

        registerInit(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("registerpage");

    });

});