import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app'
import productMock from '../../mocks/product.test'
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Será validado que é possível cadastrar um produto com sucesso', async function () {
    // ARRANJE
    const newProduct = productMock.newProduct;
    const mockCreateReturn = ProductModel.build(productMock.createdProduct)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)

    //ACT
    const createdProduct = await chai.request(app).post('/products').send(newProduct);
    
    //ASSERT
    expect(createdProduct.status).to.equal(201);
    expect(createdProduct.body).to.be.deep.equal(productMock.returnService)

  })
});
