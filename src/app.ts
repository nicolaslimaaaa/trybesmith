import express from 'express';
import productRouter from './routes/Product';
import orderRouter from './routes/Order';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
