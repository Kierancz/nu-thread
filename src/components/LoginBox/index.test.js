import React from 'react';
import { shallow } from 'enzyme';
import { LoginButton } from './index';

test('should correctly render LoginButton', () => {
  const wrapper = shallow(<LoginButton/>);
  expect(wrapper).toMatchSnapshot();
});
