import { Router } from 'express';

import { registerMethod, loginMethod, homePage, registerPage, loginPage, viewMethod, createMethod, viewMethodLogin } from '../models/routesDatabase';

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

router.get('/viewGuides', viewMethod);

router.get('/viewGuides/login', viewMethodLogin);

router.get('/createGuide', createMethod);

router.post('/registeruser', registerMethod);

router.post('/loginuser', loginMethod);

export { router };