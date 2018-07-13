import React from 'react';
import { shallow } from 'enzyme';
import renderInput from './renderInput';
import { renderSuggestions } from './renderSuggestions';

test('should correctly render renderInput', () => {
  const wrapper = shallow(<renderInput/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render renderSuggestions', () => {
  const wrapper = shallow(<renderSuggestions/>);
  expect(wrapper).toMatchSnapshot();
});