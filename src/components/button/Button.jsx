import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ id, name, value, isDisabled, buttonClick }) {
  return (
    <button className={name} id={id} disabled={isDisabled} type="button" onClick={buttonClick}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  name: 'button',
  isDisabled: false
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default Button;
