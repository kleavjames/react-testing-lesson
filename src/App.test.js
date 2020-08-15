import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttr } from './test/testUtils';

test('render App without crashing', () => {
  const wrapper = shallow(<App />);
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
