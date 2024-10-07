import validator from "validator";

export function validateRegister (
    
    username: string,
    email: string,
    password: string

): string [] {

    const errors: string [] = [];

    if (!validator.isEmail(email)) errors.push("Invalid e-mail. Try again.");

    if (validator.isEmpty(password) && validator.isEmpty(username)) errors.push("Invalid informations. Try again.");

    return errors;

};

export function validateLogin (
    
    email: string,
    password: string

): string [] {

    const errors: string [] = [];

    if (!validator.isEmail(email)) errors.push("Invalid e-mail. Try again.");

    if (validator.isEmpty(password) && password.length < 3) errors.push("Invalid password. Try again.");

    return errors;

};

export function validateTopic (
    
    title: string,
    author: string,
    message: string,

): string [] {

    const errors: string [] = [];

    if (validator.isEmpty(title) && validator.isEmpty(author)) errors.push("Invalid informations. Try again.");

    if (validator.isEmpty(message)) errors.push("Invalid message. Try again.");

    return errors;

};

export function validateComments (
    
    title: string,
    author: string,
    message: string,

): string [] {

    const errors: string [] = [];

    if (validator.isEmpty(title) && validator.isEmpty(author)) errors.push("Invalid informations. Try again.");

    if (validator.isEmpty(message)) errors.push("Invalid message. Try again.");

    return errors;

};

export function validUpdate (
    
    email: string,
    discordAccount: string

): string [] {

    const errors: string [] = [];
    
    if (!validator.isEmail(email)) errors.push("Invalid e-mail. Try again.");

    if (validator.isEmpty(discordAccount)) errors.push("Invalid discord account. Try again.");

    return errors;

}