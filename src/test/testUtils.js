import checkPropTypes from 'check-prop-types';

/**
 * A function that return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - value of data-test attribute
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (propType, props, componentName) => {
  const propError = checkPropTypes(propType, props, 'prop', componentName);
  expect(propError).toBeUndefined();
};
