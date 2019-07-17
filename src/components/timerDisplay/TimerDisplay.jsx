import React from 'react';
import PropTypes from 'prop-types';
import './TimerDisplay.css';
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

  const toMMSS = secs => {
    let minutes;
    let seconds;

    if (secs === 3600) {
      minutes = 60;
      seconds = 0;
    } else {
      minutes = Math.floor(secs / 60) % 60;
      seconds = secs % 60;
    }

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

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
