import { RequestHandler } from 'express';

const validateInputsUser: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  
  next();
};

export default validateInputsUser;