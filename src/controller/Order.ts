import { RequestHandler } from 'express';
import OrderService from '../service/Order';
import mapStatusCode from '../utils/mapStatusCode';

const getAll: RequestHandler = async (req, res) => {
  const { status, data } = await OrderService.getAll();

  return res.status(mapStatusCode(status)).json(data);
};

export default {
  getAll,
};