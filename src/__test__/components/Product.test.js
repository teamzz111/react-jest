import React from 'react';
import { expect, test } from '@jest/globals';
import { mount } from 'enzyme';
import Product from '../../components/Product';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Product />', () => {
  test('Render componente Product', () => {});

  test('Render título', () => {
    const header = mount(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
