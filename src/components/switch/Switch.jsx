import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

function Switch({ checkedVal, callBack }) {
  return (
    <label className="switch" htmlFor="soundCheckBox">
      <input type="checkbox" name="soundCheckBox" />
      <span className="slider" />
    </label>
  );
}

Switch.propTypes = {
  checkedVal: PropTypes.bool.isRequired,
  callBack: PropTypes.func.isRequired
};

export default Switch;
