import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import Queue from './config/queue'; 
import UserController from './controllers/UserController';

const serverAdapter = new ExpressAdapter();

createBullBoard({ queues: [ new BullAdapter(Queue) ], serverAdapter: serverAdapter})

const app = express();

app.use(express.json());

app.post('/users', UserController.create);

serverAdapter.setBasePath('/admin/queues');

app.use('/admin/queues', serverAdapter.getRouter());

app.listen(3333, () => console.log('server is runnig'));
