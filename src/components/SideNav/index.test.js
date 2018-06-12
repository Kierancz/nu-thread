import React from 'react';
import { shallow } from 'enzyme';
import SideNav from './index';

test('should correctly render SideNav', () => {
  const wrapper = shallow(<SideNav/>);
  expect(wrapper).toMatchSnapshot();
});