import { Router } from 'express';

import { registerMethod, loginMethod, homePage, registerPage, loginPage, viewMethod, createMethod, viewMethodLogin, methodProfile } from '../models/routesDatabase';

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

router.get('/viewGuides', viewMethod);

router.get('/viewGuides/login', viewMethodLogin);

router.get('/createGuide', createMethod);

router.get('/profile', methodProfile);

router.post('/registeruser', registerMethod);

router.post('/loginuser', loginMethod);

export { router };