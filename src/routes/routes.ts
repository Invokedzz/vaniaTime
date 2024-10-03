import { Router } from 'express';

import { homePage, registerPage, loginPage } from '../controllers/routesMiddlewares';

import { registerMethod, loginMethod } from '../models/routesDatabase';

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

export { router };