export function registerControl (
    
    username: string,
    email: string,
    password: string,

): string [] {

    const errors: string [] = [];

    if (username.length < 1 || username.length > 30) errors.push("Invalid username. Try again. Minimum: 1 character, maximum: 30 characters.");

    if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid e-mail. Try again.");

    if (password.length < 3 || password.length > 255) errors.push("Invalid password. Try again.");

    return errors;

};

export function loginControl (
    
    email: string,
    password: string,

): string [] {

    const errors: string [] = [];

    if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid e-mail. Try again.");

    if (password.length < 3 || password.length > 255) errors.push("Invalid password. Try again.");

    return errors;

};

export function topicControl (
    
    title: string,
    author: string,
    message: string,

): string [] {

    const errors: string [] = [];

    if (title.length < 4 || title.length > 30) errors.push("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

    if (author.length < 1 || author.length > 30) errors.push("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

    if (message.length < 3 || message.length > 255) errors.push("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

    return errors;

};

export function guideControl (
    
    title: string,
    author: string,
    message: string,
    
): string [] {

    const errors: string [] = [];

    if (title.length < 4 || title.length > 30) errors.push("Invalid title. Try again. Minimum: 4 characters, maximum: 30 characters.");

    if (author.length < 1 || author.length > 30) errors.push("Invalid author. Try again. Minimum: 1 character, maximum: 30 characters.");

    if (message.length < 3 || message.length > 255) errors.push("Invalid message. Try again. Minimum: 3 characters, maximum: 255 characters.");

    return errors;

};