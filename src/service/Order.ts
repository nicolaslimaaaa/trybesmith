import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderWithProductIds } from '../types/Order';
import { ServiceResponseOrder } from '../types/ServiceResponse';

const getAll = async (): Promise<ServiceResponseOrder<OrderWithProductIds[]>> => {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const data = orders.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((product) => product.id) || [],
  }));

  return { status: 'SUCCESSFUL', data };
};

export default {
  getAll,
};