import express from 'express';

import { homepage } from '../controllers/routesMiddlewares';

const application = express();

export class routesServer {

    private getRoutes (): void {

        application.get('/', homepage);

    };

    private postRoutes (): void {



    };

    public receiveRoutes (): void {

        this.getRoutes();

    //    this.postRoutes();

    };

};