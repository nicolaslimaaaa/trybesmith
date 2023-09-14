import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app'
import productMock from '../../mocks/product.test'
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Será validado que é possível listar todos os produtos com sucesso', async function () {
    // ARRANJE
    const mockFindAllReturn = ProductModel.build(productMock.createdProduct)
    sinon.stub(ProductModel, 'findAll').resolves([mockFindAllReturn])

    //ACT
    const products = await chai.request(app).get('/products').send();
    
    //ASSERT
    expect(products.status).to.equal(200);
    expect(products.body).to.be.deep.equal(productMock.allProducts)

  })
});
