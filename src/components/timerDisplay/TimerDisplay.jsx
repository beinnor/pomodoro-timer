import React from 'react';
import PropTypes from 'prop-types';
import './TimerDisplay.css';
import { toMMSS } from '../../utils/helpers';
import * as timerStates from '../../utils/timerStates';

function TimerDisplay({ pomodoroState, timeLeft }) {
  let label;

  switch (pomodoroState) {
    case timerStates.INITIAL:
      label = 'Initial';
      break;
    case timerStates.SESSION:
      label = 'Session';
      break;
    case timerStates.SESSION_PAUSED:
      label = 'Session Paused';
      break;
    case timerStates.BREAK:
      label = 'Break';
      break;
    case timerStates.BREAK_PAUSED:
      label = 'Break Paused';
      break;
    default:
      label = 'Initial';
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
