import { Router } from 'express';
import ProductController from '../controller/Product';

const productRouter = Router();

productRouter.post('/', ProductController.createProduct);
productRouter.get('/', ProductController.getAll);

export default productRouter;