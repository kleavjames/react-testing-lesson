import React from 'react';
import { shallow } from 'enzyme';

import Congrats, {
  propTypes as somePropTypes,
  name as componentName,
} from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

const initProps = { success: false };

/**
 * A function to create a shallow wrapper for the Congrats component
 * @param {object} props - component props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProp = { ...initProps, ...props };
  return shallow(<Congrats {...setupProp} />);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  // check prop types
  checkProps(somePropTypes, expectedProps, componentName);
});
