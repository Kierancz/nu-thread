import React from 'react';
import { shallow } from 'enzyme';
import BackToTop from './index';

test('should correctly render BackToTop', () => {
  const wrapper = shallow(<BackToTop/>);
  expect(wrapper).toMatchSnapshot();
});