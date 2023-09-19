import express from 'express';
import productRouter from './routes/Product';
import orderRouter from './routes/Order';
import userRouter from './routes/User';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', userRouter);

export default app;
