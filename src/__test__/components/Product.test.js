import React from 'react';
import { expect, test } from '@jest/globals';
import { mount, shallow } from 'enzyme';
import Product from '../../components/Product';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
  test('Render componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobar el botón de comprar', () => {
    const handle = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handle} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handle).toHaveBeenCalledTimes(1);
  });
});
