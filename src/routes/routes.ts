import { Router } from 'express';

import { homepage, registerpage, loginpage } from '../controllers/routesMiddlewares';

import { registerMethod, loginMethod } from '../models/routesDatabase';

const router = Router();

router.get('/', homepage);

router.get('/register', registerpage);

router.get('/login', loginpage);

export { router };