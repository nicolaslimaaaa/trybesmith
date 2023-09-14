import productMock from './product.test'

const allOrders = [
  {
    "id": 3,
    "userId": 2,
    "productIds": [
      5
    ]
  }
];

const returnModelAllOrders = [
    {
      "id": 3,
      "userId": 2,
      "productIds": [
        productMock.createdProduct,
      ]
    }
  ];

export default {
    allOrders,
    returnModelAllOrders,
}