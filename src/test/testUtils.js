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

export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
