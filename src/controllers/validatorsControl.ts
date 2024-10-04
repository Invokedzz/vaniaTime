export function registerControl (
    
    username: string,
    email: string,
    password: string,

): void {

    const errors: string [] = [];

    if (username.length < 1 || username.length > 30) errors.push("Invalid username. Try again. Minimum: 1 character, maximum: 30 characters.");

    if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid e-mail. Try again.");

    if (password.length < 3 || password.length > 255) errors.push("Invalid password. Try again.");

    if (errors.length > 0) return;

};

export function loginControl (
    
    email: string,
    password: string,

): void {

    const errors: string [] = [];

    if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid e-mail. Try again.");

    if (password.length < 3 || password.length > 255) errors.push("Invalid password. Try again.");

    if (errors.length > 0) return;

};

export function topicControl (
    
    title: string,
    author: string,
    message: string,

): void {



};

export function commentControl (
    
    title: string,
    author: string,
    message: string,
    
): void {



};