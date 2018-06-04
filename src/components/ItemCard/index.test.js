import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ItemCard from './index';
import { sampleItem } from '../../modules/data/sampleItem';

test('should render ItemCard correctly', () => {
  const wrapper = shallow(<ItemCard item={sampleItem} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});