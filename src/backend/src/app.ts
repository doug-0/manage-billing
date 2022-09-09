import express from 'express';
import Router from './routes/Router';

const app = express();

app.use(express.json());
app.use('/user', Router.userRouter);

export default app;
