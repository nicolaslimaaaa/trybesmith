import { Router } from 'express';
import ProductController from '../controller/Product';

const productRouter = Router();

productRouter.post('/', ProductController.createProduct);

export default productRouter;