import { body } from 'express-validator';

export function registerValidate (): void {

    body("username")
    .isString()
    .isLength({ min: 1, max: 30 })
    .withMessage("Invalid username. Try again. Minimum: 1 character, maximum: 30 characters.");
    
    body("email")
    .isEmail()
    .isString()
    .isLength({ max: 255 })
    .withMessage("Invalid e-mail. Try again.");

    body("password")
    .isString()
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid password. Try again.");

};

export function loginValidate (): void {

    body("email")
    .isEmail()
    .isString()
    .isLength({ max: 255 })
    .withMessage("Invalid e-mail. Try again.");

    body("password")
    .isString()
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid password. Try again.");

};

export function topicValidate (): void {

    body("title")
    .isString()
    .isLength({ min: 4, max: 30 })
    .withMessage("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

    body("author")
    .isString()
    .isLength({ min: 1, max: 30 })
    .withMessage("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

    body("message")
    .isString()
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

};

export function commentValidate (): void {

    body("title")
    .isString()
    .isLength({ min: 4, max: 30 })
    .withMessage("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

    body("author")
    .isString()
    .isLength({ min: 1, max: 30 })
    .withMessage("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

    body("message")
    .isString()
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

};