import express from 'express';
import cors from 'cors';
import Router from './routes/Router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', Router.userRouter);
app.use('/treatments', Router.treatmentsRouter);

export default app;
