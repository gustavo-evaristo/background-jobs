import express from 'express';
import mailConfig from './config/mail';
import UserController from './controllers/UserController';


const app = express();

app.use(express.json());

app.post('/users', UserController.create);

app.listen(3333, () => console.log('server is runnig'));
