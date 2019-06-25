import React from 'react';
import PropTypes from 'prop-types';

function TimerStart({ name, buttonClick }) {
  return (
    <button id={name} className="button" type="button" value="start" onClick={buttonClick}>
      Start
    </button>
  );
}

TimerStart.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired
};

export default TimerStart;
