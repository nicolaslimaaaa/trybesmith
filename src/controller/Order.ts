import { Request, Response } from 'express';
import OrderService from '../service/Order';
import mapStatusCode from '../utils/mapStatusCode';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const { status, data } = await OrderService.getAll();

  return res.status(mapStatusCode(status)).json(data);
};

export default {
  getAll,
};