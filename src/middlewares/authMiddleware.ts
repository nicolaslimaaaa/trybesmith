import { RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

if (!secret) {
  throw new Error('MISSING_JWT_SECRET');
}

const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token faltando' });
  }
  
  const token = authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Token inválido' });
  }
    
  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token não verificado' });
  }
  
  next();
};

export default {
  authMiddleware,
};