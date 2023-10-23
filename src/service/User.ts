import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { ServiceResponseUser } from '../types/ServiceResponse';
import { UserData } from '../types/User';
import env from '../envArgs';

const unauthorizedResponse: ServiceResponseUser = {
  status: 'UNAUTHORIZED',
  data: { message: 'Username or password invalid' },
};

const login = async (userData: UserData): Promise<ServiceResponseUser> => {
  const userExist = await UserModel.findOne({
    where: { username: userData.username },
  });

  if (!userExist) {
    return unauthorizedResponse;
  }
  
  const isValidPassword = await bcrypt.compare(userData.password, userExist.dataValues.password);
  
  if (!isValidPassword) {
    return unauthorizedResponse;
  }
  
  const token = jwt.sign({
    id: userExist.dataValues.id,
    username: userExist.dataValues.username,
  }, env.jwtSecret);

  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  login,
};