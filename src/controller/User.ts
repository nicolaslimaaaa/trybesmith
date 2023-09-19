import { RequestHandler } from 'express';
import UserService from '../service/User';
import mapStatusCode from '../utils/mapStatusCode';

const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const { status, data } = await UserService.login({ username, password });

  return res.status(mapStatusCode(status)).json(data);
};

export default {
  login,
};