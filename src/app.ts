import express from 'express';
import productRouter from './routes/Product';
import orderRouter from './routes/Order';
import userRouter from './routes/User';

// import authMiddleware from './middlewares/authMiddleware';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);

// app.use(authMiddleware);

app.use('/login', userRouter);

export default app;
