import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app'
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.test';
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Será validado que é possível listar todos os pedidos com sucesso', async function () {
    // ARRANJE
    const mockFindAllReturn = OrderModel.bulkBuild(orderMock.returnModelAllOrders, {
        include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
      })
    sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn)

    //ACT
    const orders = await chai.request(app).get('/orders').send();
    
    //ASSERT
    expect(orders.status).to.equal(200);
    expect(orders.body).to.be.deep.equal(orderMock.allOrders)

  })
});
