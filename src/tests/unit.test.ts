import { Request, Response } from "express";

import { homeInit, loginInit, registerInit, createGuides, viewGuides } from "../controllers/routesControllers";

import { validateRegister, validateLogin, validateComments, validateTopic } from "../controllers/validatorsHeaders";

import { loginControl, registerControl, topicControl, commentControl } from "../controllers/validatorsControl";

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

    it ("Should handle the responses correctly // homePage", (): void => {

        homeInit(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("homePage");

    });

    it ("Should handle the responses correctly // loginPage", (): void => {

        loginInit(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("loginPage");

    });

    it ("Should handle the responses correctly // registerPage", (): void => {

        registerInit(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("registerPage");

    });

    it ("Should handle the responses correctly // createGuides", (): void => {

        createGuides(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("createGuides");

    });

    it ("Should handle the responses correctly // viewGuides", (): void => {

        viewGuides(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("viewGuides");

    });

});

describe ("registerControl test", (): void => {

    it ("Should not return any errors", (): void => {

        const username: string = "testing";

        const email: string = "testing@gmail.com";

        const password: string = "validpassword";

        const ourSpy = jest.spyOn(console, 'log');

        registerControl(username, email, password);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return error for invalid username", (): void => {

        const username: string = '';

        const email: string = 'testing@gmail.com';

        const password: string = 'validpassword';

        const returnErrors = registerControl(username, email, password);
        
        expect(returnErrors).toContain("Invalid username. Try again. Minimum: 1 character, maximum: 30 characters.");

    });

    it ("Should return error for invalid password", (): void => {

        const username: string = 'testing';

        const email: string = 'testing@gmail.com';

        const password: string = '';

        const returnErrors = registerControl(username, email, password);
        
        expect(returnErrors).toContain("Invalid password. Try again.");

    });

    it ("Should return error for invalid e-mail", (): void => {

        const username: string = 'testing';

        const email: string = '';

        const password: string = 'validpassword';

        const returnErrors = registerControl(username, email, password);
        
        expect(returnErrors).toContain("Invalid e-mail. Try again.");

    });

});

describe("loginControl test", (): void => {

    it ("Should not return any error", (): void => {

        const email: string = "testing@gmail.com";

        const password: string = "validpassword";

        const ourSpy = jest.spyOn(console, 'log');

        loginControl(email, password);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return password error", (): void => {

        const email: string = "testing@gmail.com";

        const password: string = "";

        const returnErrors = loginControl(email, password);

        expect(returnErrors).toContain("Invalid password. Try again.");

    });

    it ("Should return an email error", (): void => {

        const email: string = '';

        const password: string = "validpassword";

        const returnErrors = loginControl(email, password);

        expect(returnErrors).toContain("Invalid e-mail. Try again.");

    });

});

describe("topicControl test", (): void => {

    it ("Should not return any messages", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        topicControl(title, author, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return title error", (): void => {

        const title: string = '';

        const author: string = "someone";

        const message: string = "something";

        const returnErrors = topicControl(title, author, message);

        expect(returnErrors).toContain("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

    });

    it ("Should return author error", (): void => {

        const title: string = "something";

        const author: string = '';

        const message: string = "something";

        const returnErrors = topicControl(title, author, message);

        expect(returnErrors).toContain("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

    });

    it ("Should return message error", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = '';

        const returnErrors = topicControl(title, author, message);

        expect(returnErrors).toContain("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

    });

});

describe("commentControl test", (): void => {

    it ("Should not return anything", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        topicControl(title, author, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return title error", (): void => {

        const title: string = '';

        const author: string = "someone";

        const message: string = "something";

        const returnErrors = topicControl(title, author, message);

        expect(returnErrors).toContain("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

    });

    it ("Should return author error", (): void => {

        const title: string = "something";

        const author: string = '';

        const message: string = "something";

        const returnErrors = topicControl(title, author, message);

        expect(returnErrors).toContain("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

    });

    it ("Should return message error", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = '';

        const returnErrors = topicControl(title, author, message);

        expect(returnErrors).toContain("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

    });

});

describe ("Handling validate register", (): void => {

    it ("Should return e-mail errors", (): void => {

        const username: string = "testing";

        const email: string = "";

        const password: string = "validpassword";

        const returnErrors = validateRegister(username, email, password);

        expect(returnErrors).toContain("Invalid e-mail. Try again.");

    });

    it ("Should handle username and password errors", (): void => {

        const username: string = '';

        const email: string = 'testing@gmail.com';

        const password: string = '';

        const returnErrors = validateRegister(username, email, password);

        expect(returnErrors).toContain("Invalid informations. Try again.");

    });

    it ("Should not return anything", (): void => {

        const username: string = "testing";

        const email: string = 'testing@gmail.com';

        const password: string = "validpassword";

        const ourSpy = jest.spyOn(console, 'log');

        validateRegister(username, email, password);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

});

describe("validateLogin test", (): void => {

    it ("Should return e-mail error", (): void => {

        const email: string = "";

        const password: string = "validpassword";

        const returnErrors = validateLogin(email, password);

        expect(returnErrors).toContain("Invalid e-mail. Try again.");

    });

    it ("Should return password error", (): void => {

        const email: string = 'testing@gmail.com';

        const password: string = "";

        const returnErrors = validateLogin(email, password);

        expect(returnErrors).toContain("Invalid password. Try again.");

    });

    it ("Should not return anything", (): void => {

        const email: string = "testing@gmail.com";

        const password: string = "validpassword";

        const ourSpy = jest.spyOn(console, 'log');

        validateLogin(email, password);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

});

describe("validateTopic test", (): void => {

    it ("Should return message error", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "";

        const returnErrors = validateTopic(title, author, message);

        expect(returnErrors).toContain("Invalid message. Try again.");

    });

    it ("Should return author and title errors", (): void => {

        const title: string = "";

        const author: string = "";

        const message: string = "something";

        const returnErrors = validateTopic(title, author, message);

        expect(returnErrors).toContain("Invalid informations. Try again.");

    });

    it ("Should not return anything", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        validateTopic(title, author, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

});

describe("validateComments test", (): void => {

    it ("Should return message error", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "";

        const returnErrors = validateComments(title, author, message);

        expect(returnErrors).toContain("Invalid message. Try again.");

    });

    it ("Should return author and title errors", (): void => {

        const title: string = "";

        const author: string = "";

        const message: string = "something";

        const returnErrors = validateComments(title, author, message);

        expect(returnErrors).toContain("Invalid informations. Try again.");

    });

    it ("Should not return anything", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        validateComments(title, author, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

});

describe ("Testing commentControl", (): void => {


    it ("Should not return anything", (): void => {

        const title: string = "something";

        const author: string = "someone";
    
        const message: string = "something";
    
        const ourSpy = jest.spyOn(console, 'log');

        commentControl(title, author, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return title error", (): void => {

        const title: string = '';

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        const errorMessage = commentControl(title, author, message);

        expect(errorMessage).toContain("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

        ourSpy.mockRestore();

    });

    it ("Should return author error", (): void => {

        const title: string = "something";

        const author: string = '';

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        const errorMessage = commentControl(title, author, message);

        expect(errorMessage).toContain("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

        ourSpy.mockRestore();

    });

    it ("Should return message error", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = '';

        const ourSpy = jest.spyOn(console, 'log');

        const errorMessage = commentControl(title, author, message);

        expect(errorMessage).toContain("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

        ourSpy.mockRestore();

    });

});
