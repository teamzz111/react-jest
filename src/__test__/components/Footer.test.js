import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { expect, test } from '@jest/globals';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  test('Render del componente Footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar UI únicamente', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
