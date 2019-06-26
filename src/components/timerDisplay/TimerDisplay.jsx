import React from 'react';
import PropTypes from 'prop-types';
import './TimerDisplay.css';
import { toMMSS } from '../../utils/helpers';

function TimerConfig({ name, timeLeft }) {
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <div id="timer-label">{label}</div>
      <div id="time-left">{toMMSS(timeLeft)}</div>
    </>
  );
}

TimerConfig.propTypes = {
  name: PropTypes.string.isRequired,
  timeLeft: PropTypes.number.isRequired
};

export default TimerConfig;
