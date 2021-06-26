import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from './ProviderMock';
import Header from '../../components/Header';
import { expect, test } from '@jest/globals';

describe('<Header />', () => {
  test('Render componente header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render título', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
