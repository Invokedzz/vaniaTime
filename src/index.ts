import { startServer } from './website';

import { security } from './controllers/validators';

security();

const gettingStarted = new startServer();

gettingStarted.Listen();