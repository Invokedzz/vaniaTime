import { Username } from '../../controllers/verifyToken';

import * as express from "express";

declare global {
    namespace Express {
        interface Request {
            username?: Username; 
        }
    }
};
