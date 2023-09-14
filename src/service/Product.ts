import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const createProduct = async (product: Product): Promise<ServiceResponse> => {
  const newProduct = await ProductModel.create(product);

  const { id, name, price } = newProduct.dataValues;

  return { status: 'CREATED', data: { id, name, price } };
};

export default {
  createProduct,
};