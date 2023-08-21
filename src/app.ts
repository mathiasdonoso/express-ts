import express, { Application, Request, Response } from 'express';
const port = 3000;

const getApp = (): Application => {
    const app: Application = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', async (_: Request, res: Response): Promise<Response> => {
        return res.status(200).send({ message: 'Hello, world!' });
    });

    // Add new routes here!

    return app;
};

export const start = () => {
    const app = getApp();
    try {
        app.listen(port, () => {
            return console.log(`Server listening at http://localhost:${port}`);
        });
    } catch (error: any) {
        console.error(`Error ocurred: ${error.message}`);
    }
};

start();

