import express from 'express';

import { Router } from 'express';

import { homepage } from '../models/routesMiddlewares';

const application = express();

const router = Router();

application.use('/', homepage);

export { router };