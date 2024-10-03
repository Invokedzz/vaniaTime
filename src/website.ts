import express from 'express';

import { rateLimit } from 'express-rate-limit';

import { engine } from "express-handlebars";

import path from "path";

import { router } from './routes/routes';

import cors from "cors";

const application = express();

const port = process.env.PORT || 3001;

application.engine('handlebars', engine ({

    defaultLayout: 'main',

    partialsDir: path.join(__dirname, 'views', 'partials'),

}));

application.set('view engine', 'handlebars');

application.set('views', path.join(__dirname, 'views'));

export class startServer {

    private expressLimiter (): void {

        const limiter = rateLimit({

            windowMs: 15 * 60 * 1000, 

            max: 100,

            standardHeaders: true,

            legacyHeaders: false,

        });

        application.use(limiter);

    };

    private changeSettings (): void {

        application.use(express.json());

        application.use(express.urlencoded({ extended: true }));

        application.use(express.static('public'));

    };

    private routesMiddlewares (): void {

        application.use(cors());

        application.use('/', router);

    };

    public Listen (): void {

        this.expressLimiter();

        this.changeSettings();

        this.routesMiddlewares();

        application.listen(port, (): void => {

            console.log(`http://localhost:${port}`);

        });

    };

};
