import React from 'react';
import { shallow } from 'enzyme';
import ItemGrid from './index';
import sampleItems from '../../modules/data/sampleItems';

test('should render ItemGrid with items', () => {
  const wrapper = shallow(<ItemGrid items={sampleItems} />);
})