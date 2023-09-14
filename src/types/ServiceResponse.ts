import { ProductInputtableTypes } from '../database/models/product.model';

export type ServiceResponseStatus = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseProduct = {
  status: ServiceResponseStatus,
  data: { message: string } | Omit<ProductInputtableTypes, 'orderId'>
  | Omit<ProductInputtableTypes, 'orderId'>[] 
};

export type ServiceResponseOrder<G> = {
  status: ServiceResponseStatus,
  data: { message: string } | G
};