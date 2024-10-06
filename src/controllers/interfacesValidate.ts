import { Username } from '../controllers/verifyToken';

declare global {
    namespace Express {
        interface Request {
            user?: Username; 
        }
    }
};
