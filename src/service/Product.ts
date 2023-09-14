import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const createProduct = async (product: Product): Promise<ServiceResponse> => {
  const newProduct = await ProductModel.create(product);

  const { id, name, price } = newProduct.dataValues;

  return { status: 'CREATED', data: { id, name, price } };
};

const getAll = async (): Promise<ServiceResponse> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products.map((product) => product.toJSON()) };
};

export default {
  createProduct,
  getAll,
};