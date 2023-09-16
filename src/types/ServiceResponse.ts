import { ProductInputtableTypes } from '../database/models/product.model';
import { UserInputtableTypes } from '../database/models/user.model';

export type ServiceResponseStatus = 'SUCCESSFUL' | 'CREATED' | 'UNAUTHORIZED';

export type ServiceResponseProduct = {
  status: ServiceResponseStatus,
  data: { message: string } | Omit<ProductInputtableTypes, 'orderId'>
  | Omit<ProductInputtableTypes, 'orderId'>[] 
};

export type ServiceResponseOrder<G> = {
  status: ServiceResponseStatus,
  data: { message: string } | G
};

export type ServiceResponseUser = {
  status: ServiceResponseStatus,
  data: { message: string } | UserInputtableTypes | { token: string }
};