import express from 'express';
import dotenv from 'dotenv';
import router from './router';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, `../.env`)
});
const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(router);

app.listen( port, async () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port: ${ port }`);
});
