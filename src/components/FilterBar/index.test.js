import React from 'react';
import { shallow } from 'enzyme';
import FilterBar from './index';

test('should correctly render FilterBar', () => {
  const wrapper = shallow(<FilterBar/>);
  expect(wrapper).toMatchSnapshot();
});