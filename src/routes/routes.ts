import { Router } from 'express';

import { homepage } from '../controllers/routesMiddlewares';

const router = Router();

router.get('/', homepage);

export { router };