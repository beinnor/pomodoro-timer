import React from 'react';
import PropTypes from 'prop-types';

function TimerReset({ name, buttonClick }) {
  return (
    <button id={name} className="button" type="button" value="reset" onClick={buttonClick}>
      Reset
    </button>
  );
}

TimerReset.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired
};

export default TimerReset;
