import React from 'react';
import { shallow } from 'enzyme';
import ProfileForm from './index';

test('should correctly render ProfileForm', () => {
  const wrapper = shallow(<ProfileForm/>);
  expect(wrapper).toMatchSnapshot();
});