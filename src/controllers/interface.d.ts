import { Username } from './verifyToken';

declare global {
    namespace Express {
        interface Request {
            user?: Username; 
        }
    }
};
