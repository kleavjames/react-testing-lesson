import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords, {
  propTypes as somePropTypes,
  name as componentName,
} from './GuessedWords';
import { findByTestAttr, checkProps } from '../test/testUtils';

const initProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * A function to create a shallow wrapper for the GuessedWords component
 * @param {object} props - component props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProp = { ...initProps, ...props };
  return shallow(<GuessedWords {...setupProp} />);
};

test('does not throw warning with expected props', () => {
  checkProps(somePropTypes, initProps, componentName);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {});
