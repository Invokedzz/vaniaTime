import { startServer } from './website';

import { security } from './controllers/validators';

import { loginValidate, registerValidate } from './controllers/validatorsInputs';

loginValidate();

registerValidate();

security();

const gettingStarted = new startServer();

gettingStarted.Listen();