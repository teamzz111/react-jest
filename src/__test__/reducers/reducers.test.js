import { expect, test } from '@jest/globals';
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Test reducers', () => {
  test('Estado inicial', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('Añadir al carrito', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
