import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import Button from '../button';
import { toMM } from '../../utils/helpers';
import * as timerStates from '../../utils/timerStates';

class TimerConfig extends React.Component {
  handleDecrementTime = () => {
    const { name, pomodoroState, sessionTime, setTimeState } = this.props;
    if (pomodoroState !== timerStates.SESSION && pomodoroState !== timerStates.BREAK) {
      if (sessionTime > 60) {
        const newTime = sessionTime - 60;
        return this.updateTimesValidations(name, newTime, pomodoroState, setTimeState);
      }
    }
    return false;
  };

  handleIncrementTime = () => {
    const { name, pomodoroState, sessionTime, setTimeState } = this.props;
    if (pomodoroState !== timerStates.SESSION && pomodoroState !== timerStates.BREAK) {
      if (sessionTime < 3600) {
        const newTime = sessionTime + 60;
        return this.updateTimesValidations(name, newTime, pomodoroState, setTimeState);
      }
    }
    return false;
  };

  updateTimesValidations = (name, newTime, pomodoroState, setTimeState) => {
    if (name === 'session' && pomodoroState !== timerStates.BREAK_PAUSED) {
      return setTimeState({ sessionTime: newTime, currentTimeLeft: newTime });
    }
    if (name === 'break' && pomodoroState === timerStates.BREAK_PAUSED) {
      return setTimeState({ breakTime: newTime, currentTimeLeft: newTime });
    }
    if (name === 'break') {
      return setTimeState({ breakTime: newTime });
    }
    return false;
  };

  render() {
    const { name, sessionTime } = this.props;
    return (
      <div id={`${name}Config`}>
        <div id={`${name}-label`}>{`${name.charAt(0).toUpperCase() + name.slice(1)} Length`}</div>
        <Button id={`${name}-decrement`} value="-" buttonClick={this.handleDecrementTime} />
        <span id={`${name}-length`}>{toMM(sessionTime)}</span>
        <Button id={`${name}-increment`} value="+" buttonClick={this.handleIncrementTime} />
      </div>
    );
  }
}

TimerConfig.propTypes = {
  name: PropTypes.string.isRequired,
  setTimeState: PropTypes.func.isRequired,
  pomodoroState: PropTypes.number.isRequired,
  sessionTime: PropTypes.number.isRequired
};

export default TimerConfig;
