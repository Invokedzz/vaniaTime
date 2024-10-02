import { body } from 'express-validator';

export const validateLogin = [

    body("email")
    .isString()
    .isEmail()
    .isLength({ max: 255 })
    .withMessage("Invalid e-mail address. Try again."),

    body("password")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Invalid password. Try again. Minimum 3 characters and maximum 30."),

];

export const validateRegister = [

    body("username")
    .isString()
    .isLength({ min: 1, max: 30 })
    .withMessage("Invalid username. Try again. Minimum 1 character and maximum 30."),
    
    body("email")
    .isString()
    .isEmail()
    .isLength({ max: 255 })
    .withMessage("Invalid e-mail address. Try again."),
    
    body("password")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Invalid password. Try again. Minimum 3 characters and maximum 30."),

];