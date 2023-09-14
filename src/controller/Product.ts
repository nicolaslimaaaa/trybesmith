import { Request, Response } from 'express';
import ProductService from '../service/Product';
import mapStatusCode from '../utils/mapStatusCode';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const createdProduct = await ProductService.createProduct(req.body);

  return res.status(mapStatusCode(createdProduct.status)).json(createdProduct.data);
};

export default {
  createProduct,
};