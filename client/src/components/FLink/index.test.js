import React from 'react';
import { shallow } from 'enzyme';
import FLink from './index';

test('should correctly render FLink', () => {
  const wrapper = shallow(<FLink/>);
  expect(wrapper).toMatchSnapshot();
});