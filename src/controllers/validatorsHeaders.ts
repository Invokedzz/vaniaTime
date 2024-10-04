import validator from "validator";

export function validateRegister (
    
    username: string,
    email: string,
    password: string

): void {

    const errors: string [] = [];

    if (!validator.isEmail(email)) errors.push("Invalid e-mail. Try again.");

    if (validator.isEmpty(password) && validator.isEmpty(username)) errors.push("Invalid informations. Try again.");

    if (errors.length > 0) return;

};

export function validateLogin (
    
    email: string,
    password: string

): void {

    const errors: string [] = [];

    if (!validator.isEmail(email)) errors.push("Invalid e-mail. Try again.");

    if (validator.isEmpty(password) && password.length < 3) errors.push("Invalid password. Try again.");

    if (errors.length > 0) return;

};

export function validateTopic (
    
    title: string,
    author: string,
    message: string,

): void {

    const errors: string [] = [];

    if (validator.isEmpty(title) && validator.isEmpty(author)) errors.push("Invalid informations. Try again.");

    if (validator.isEmpty(message)) errors.push("Invalid message. Try again.");

    if (errors.length > 0) return;

};

export function validateComments (
    
    title: string,
    author: string,
    message: string,

): void {

    const errors: string [] = [];

    if (validator.isEmpty(title) && validator.isEmpty(author)) errors.push("Invalid informations. Try again.");

    if (validator.isEmpty(message)) errors.push("Invalid message. Try again.");

    if (errors.length > 0) return;

};