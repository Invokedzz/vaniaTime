import { Router } from 'express';

import { homepage } from '../models/routesMiddlewares';

const router = Router();

router.get('/', homepage);

export { router };