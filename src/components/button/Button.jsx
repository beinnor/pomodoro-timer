import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ id, value, buttonClick }) {
  return (
    <button id={id} type="button" onClick={buttonClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired
};

export default Button;
