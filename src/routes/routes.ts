import { Router } from 'express';

import { homepage, registerpage, loginpage } from '../controllers/routesMiddlewares';

const router = Router();

router.get('/', homepage);

router.get('/register', registerpage);

router.get('/login', loginpage);

export { router };