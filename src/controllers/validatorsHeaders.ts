import validator from "validator";

export function validateRegister (
    
    username: string,
    email: string,
    password: string

): void {

    if (!validator.isEmail(email)) return;

    if (validator.isEmpty(password) && validator.isEmpty(username)) return;

};

export function validateLogin (
    
    email: string,
    password: string

): void {

    if (!validator.isEmail(email)) return;

    if (validator.isEmpty(password) && password.length < 3) return;

};

export function validateTopic (
    
    title: string,
    author: string,
    message: string,

): void {



};

export function validateComments (
    
    title: string,
    author: string,
    message: string,

): void {



};