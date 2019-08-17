import express from 'express';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();
const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(router);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port: ${ port }`);
});
