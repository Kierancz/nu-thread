import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

test('should render Logo with text and link', () => {
  const wrapper = shallow(<Logo text="thread" link="/" />);
  expect(wrapper).toMatchSnapshot();
})