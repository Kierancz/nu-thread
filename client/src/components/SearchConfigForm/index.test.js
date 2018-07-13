import React from 'react';
import { shallow } from 'enzyme';
import SearchConfigForm from './index';

test('should correctly render SearchConfigForm', () => {
  const wrapper = shallow(<SearchConfigForm/>);
  expect(wrapper).toMatchSnapshot();
});