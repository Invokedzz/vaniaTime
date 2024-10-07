import express, { Router } from 'express';

import { registerMethod, loginMethod, homePage, registerPage, loginPage } from '../models/routesDatabase';

//import { verifyToken } from "../controllers/verifyToken";

const application = express();

//application.use(verifyToken);

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

router.post('/registeruser', registerMethod);

router.post('/loginuser', loginMethod);

export { router };