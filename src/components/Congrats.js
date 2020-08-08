/**
 * Functional component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if prop `success` is true).
 */
import React from 'react';
import PropTypes from 'prop-types';

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulations! You guessed word!;
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats'></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
