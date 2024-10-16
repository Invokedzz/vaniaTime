import { Request, Response } from "express";

import { homeInit, loginInit, registerInit, viewGuides, viewGuidesLogin } from "../controllers/routesControllers";

import { renderCommentsView, commentaryPost, commentaryGet, updateGuidesInfoPost, updateGuidesInfoGet, deleteAGuide } from "../models/databaseMiddleware";

import { validateRegister, validateLogin, validateGuide, validateTopic, validUpdate, validateCommentary } from "../controllers/validatorsHeaders";

import { loginControl, registerControl, topicControl, guideControl, commentaryControl } from "../controllers/validatorsControl";

import { database } from "../db/database";

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

        //expect(Response.render).toHaveBeenCalledWith("createGuides");

    });

    it ("Should handle the responses correctly // viewGuides", (): void => {

        viewGuides(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("viewGuides");

    });

    it ("Should handle the responses correctly // viewGuidesLogin", (): void => {

        viewGuidesLogin(Request as Request, Response as Response);

        expect(Response.render).toHaveBeenCalledWith("viewGuideslogin");

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

        const returnErrors = validateGuide(title, author, message);

        expect(returnErrors).toContain("Invalid message. Try again.");

    });

    it ("Should return author and title errors", (): void => {

        const title: string = "";

        const author: string = "";

        const message: string = "something";

        const returnErrors = validateGuide(title, author, message);

        expect(returnErrors).toContain("Invalid informations. Try again.");

    });

    it ("Should not return anything", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        validateGuide(title, author, message);

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

        guideControl(title, author, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return title error", (): void => {

        const title: string = '';

        const author: string = "someone";

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        const errorMessage = guideControl(title, author, message);

        expect(errorMessage).toContain("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

        ourSpy.mockRestore();

    });

    it ("Should return author error", (): void => {

        const title: string = "something";

        const author: string = '';

        const message: string = "something";

        const ourSpy = jest.spyOn(console, 'log');

        const errorMessage = guideControl(title, author, message);

        expect(errorMessage).toContain("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

        ourSpy.mockRestore();

    });

    it ("Should return message error", (): void => {

        const title: string = "something";

        const author: string = "someone";

        const message: string = '';

        const ourSpy = jest.spyOn(console, 'log');

        const errorMessage = guideControl(title, author, message);

        expect(errorMessage).toContain("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

        ourSpy.mockRestore();

    });

});

describe ("Validate user update function", (): void => {

    it ("Should not return anything", (): void => {

        const username: string = "testing";

        const email: string = "testing@gmail.com";

        const ourSpy = jest.spyOn(console, 'log');

        validUpdate(username, email);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return email error", (): void => {

        const username: string = "testing";

        const email: string = '';

        const errorMessage = validUpdate(username, email);

        expect(errorMessage).toContain("Invalid e-mail. Try again.");

    });

    it ("Should return username error", (): void => {

        const username: string = '';

        const email: string = "testing@gmail.com";

        const errorMessage = validUpdate(username, email);

        expect(errorMessage).toContain("Invalid account. Try again.");

    });

});

describe ("commentaryControl function test", (): void => {

    it ("Should return username error", (): void => {

        const username: string = '';

        const message: string = "something nice";

        const errorMsg = commentaryControl(username, message);

        expect(errorMsg).toContain("Invalid username. Try again. Minimum: 1 character, maximum: 30 characters.");   

    });

    it ("Should return message error", (): void => {

        const username: string = "testing";

        const message: string = '';

        const errorMsg = commentaryControl(username, message);

        expect(errorMsg).toContain("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

    });

    it ("Should not return anything", (): void => {

        const username: string = 'testing';

        const message: string = "something nice";

        const ourSpy = jest.spyOn(console, 'log');

        commentaryControl(username, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

});

describe ("validateCommentary function test", (): void => {

    it ("Should not return anything", (): void => {

        const username: string = "testing";

        const message: string = "something nice";

        const ourSpy = jest.spyOn(console, 'log');

        validateCommentary(username, message);

        expect(ourSpy).not.toHaveBeenCalled();

        ourSpy.mockRestore();

    });

    it ("Should return empty username error", (): void => {

        const username: string = '';

        const message: string = "something nice";

        const errorMsg = validateCommentary(username, message);

        expect(errorMsg).toContain("Invalid account. Try again.");

    });

    it ("Should return empty message error", (): void => {

        const username: string = "testing";

        const message: string = '';

        const errorMsg = validateCommentary(username, message);

        expect(errorMsg).toContain("Invalid message. Try again.");

    });

});

describe ("rendercommentsview test", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    const mockQuery = jest.fn();

    beforeEach((): void => {

        Request = {

            params: {

                id: '1',

            },

        };

        Response = {

            render: jest.fn(),

        };

        (database.query as jest.Mock) = mockQuery;

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return the proper values", async (): Promise <void> => {

        const mockTests = [{id: 1, username: 'test', message: 'test'}];

        mockQuery.mockResolvedValueOnce({ rows: mockTests });

        await renderCommentsView(Request as Request, Response as Response);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM metroidvania.comments WHERE id_guide = $1', ['1']);

        expect(Response.render).toHaveBeenCalledWith('viewComments', { getElements: mockTests });

    });

});

describe("commentaryGet test", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    const mockQuery = jest.fn();

    beforeEach((): void => {

        Request = {

            params: {

                id: '1',

            },

        };

        Response = {

            render: jest.fn(),

        };

        (database.query as jest.Mock) = mockQuery;

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return commentaryGet proper values", async (): Promise <void> => {

        const id = '1';

        const mockUser = { author: 'Test User' };

        mockQuery.mockResolvedValueOnce({ rows: [mockUser] });

        await commentaryGet(Request as Request, Response as Response);

        expect(mockQuery).toHaveBeenCalledWith(`SELECT * FROM metroidvania.guide WHERE id = $1`, [id]);

        expect(Response.render).toHaveBeenCalledWith('createComments', { username: 'Test User', id });

    });

});

describe("commentaryPost test", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    const mockQuery = jest.fn();

    beforeEach((): void => {

        Request = {

            params: {

                id: '1',

            },

            body: {

                username: 'testing',

                message: 'i love waffles',

            },

        };

        Response = {

            render: jest.fn(),

        };

        (database.query as jest.Mock) = mockQuery;

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return commentaryPost proper values", async (): Promise <void> => {

        const mockTests = [{id: 1, username: 'test', message: 'test'}];

        mockQuery.mockResolvedValueOnce({ rows: mockTests });

        await commentaryPost(Request as Request, Response as Response);

        expect(mockQuery).toHaveBeenCalledWith('INSERT INTO metroidvania.comments (username, message, id_guide) VALUES ($1, $2, $3)', ['testing', 'i love waffles', '1']);

        expect(Response.render).toHaveBeenCalledWith('commentsSuccess', { id: '1' });

    });

});

describe("updateGuidesGet test", (): void => {

});

describe("updateGuidesPost test", (): void => {

    let Request: Partial <Request>;

    let Response: Partial <Response>;

    const mockQuery = jest.fn();

    beforeEach((): void => {

        Request = {

            params: {

                id: '1',

            },

            body: {

                title: "something funny",

                author: "someone boring enough",

                message: "i love coffee",

            },

        };

        Response = {

            render: jest.fn(),

        };

        (database.query as jest.Mock) = mockQuery;

    });

    afterEach((): void => {

        jest.clearAllMocks();

    });

    it ("Should return updateGuidesPost proper values", async (): Promise <void> => {

        const mockTests = [{id: 1, title: 'test', author: 'test', message: 'test'}];

        mockQuery.mockResolvedValueOnce({ rows: mockTests });

        await updateGuidesInfoPost(Request as Request, Response as Response);

        expect(mockQuery).toHaveBeenCalledWith('UPDATE metroidvania.guide SET title = $1, author = $2, message = $3 WHERE id = $4', ['something funny', 'someone boring enough', 'i love coffee', '1']);

        expect(Response.render).toHaveBeenCalledWith('editGuideSuccess');

    });

});

describe("deleteGuide test", (): void => {

});