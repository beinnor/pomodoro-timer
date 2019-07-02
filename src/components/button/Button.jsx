import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ id, value, buttonClick, name }) {
  return (
    <button className={name} id={id} type="button" onClick={buttonClick}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  name: 'button'
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default Button;
