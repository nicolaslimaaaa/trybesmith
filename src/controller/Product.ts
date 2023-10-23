import { Request, Response } from 'express';
import ProductService from '../service/Product';
import mapStatusCode from '../utils/mapStatusCode';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { status, data } = await ProductService.createProduct(req.body);

  return res.status(mapStatusCode(status)).json(data);
};

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const { status, data } = await ProductService.getAll();

  return res.status(mapStatusCode(status)).json(data);
};

export default {
  createProduct,
  getAll,
};