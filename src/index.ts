import { startServer } from './website';

import { routesServer } from './routes/routes';

const startingRoutes = new routesServer();

const gettingStarted = new startServer();

startingRoutes.receiveRoutes();

gettingStarted.Listen();