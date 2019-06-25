import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import toMMSS from '../../utils/convertTimeString';

function TimerConfig({ name, sessionLength, buttonClick }) {
  return (
    <div id={`${name}Config`}>
      <button
        id={`${name}-decrement`}
        className="button"
        type="button"
        value="-"
        onClick={buttonClick}
      >
        -
      </button>
      <span id={`${name}Length`}>{toMMSS(sessionLength)}</span>
      <button
        id={`${name}-increment`}
        className="button"
        type="button"
        value="+"
        onClick={buttonClick}
      >
        +
      </button>
    </div>
  );
}

TimerConfig.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  sessionLength: PropTypes.number.isRequired
};

export default TimerConfig;
