import React from 'react';
import { shallow } from 'enzyme';
import ItemsControlBar from './index';

test('should correctly render ItemsControlBar', () => {
  const wrapper = shallow(<ItemsControlBar/>);
  expect(wrapper).toMatchSnapshot();
});