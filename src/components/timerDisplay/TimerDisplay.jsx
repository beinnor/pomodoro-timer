import React from 'react';
import PropTypes from 'prop-types';
import './TimerDisplay.css';
import { toMMSS } from '../../utils/helpers';
import * as pomodoroStates from '../../utils/pomodoroStates';

function TimerDisplay({ pomodoroState, timeLeft }) {
  let label;

  switch (pomodoroState) {
    case pomodoroStates.SESSION:
      label = 'Session';
      break;
    case pomodoroStates.BREAK:
      label = 'Break';
      break;
    default:
      label = 'Session';
      break;
  }

  return (
    <>
      <div id="timer-label">{label}</div>
      <div id="time-left">{toMMSS(timeLeft)}</div>
    </>
  );
}

TimerDisplay.propTypes = {
  pomodoroState: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired
};

export default TimerDisplay;
