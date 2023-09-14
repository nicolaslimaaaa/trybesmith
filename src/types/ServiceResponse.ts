import { ProductInputtableTypes } from '../database/models/product.model';

export type ServiceResponseStatus = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponse = {
  status: ServiceResponseStatus,
  data: { message: string } | Omit<ProductInputtableTypes, 'orderId'>
  | Omit<ProductInputtableTypes, 'orderId'>[] 
};
