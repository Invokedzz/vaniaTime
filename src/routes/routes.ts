import { Router } from 'express';

import { registerMethod, loginMethod, homePage, registerPage, loginPage } from '../models/routesDatabase';

import { registerPost } from '../models/databaseMiddleware';

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

router.post('/registeruser', registerPost);

export { router };