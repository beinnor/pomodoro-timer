import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import Button from '../button';
import * as pomodoroStates from '../../utils/pomodoroStates';

class TimerConfig extends React.Component {
  handleDecrementTime = () => {
    const { name, pomodoroState, sessionTime, setTimeState } = this.props;
    if (sessionTime > 60) {
      const newTime = sessionTime - 60;
      return this.updateTimesValidations(name, newTime, pomodoroState, setTimeState);
    }
    return false;
  };

  handleIncrementTime = () => {
    const { name, pomodoroState, sessionTime, setTimeState } = this.props;
    if (sessionTime < 3600) {
      const newTime = sessionTime + 60;
      return this.updateTimesValidations(name, newTime, pomodoroState, setTimeState);
    }
    return false;
  };

  updateTimesValidations = (name, newTime, pomodoroState, setTimeState) => {
    if (name === 'session') {
      if (pomodoroState === pomodoroStates.SESSION) {
        return setTimeState({ sessionTime: newTime, currentTimeLeft: newTime });
      }
      return setTimeState({ sessionTime: newTime });
    }
    if (name === 'break') {
      if (pomodoroState === pomodoroStates.BREAK) {
        return setTimeState({ breakTime: newTime, currentTimeLeft: newTime });
      }
      return setTimeState({ breakTime: newTime });
    }
    return false;
  };

  toMM = secs => {
    const minutes = Math.floor(secs / 60);
    return `${minutes}`;
  };

  render() {
    const { name, sessionTime, buttonsDisabled } = this.props;

    return (
      <div className="config" id={`${name}Config`}>
        <div className="configLabel" id={`${name}-label`}>
          {`${name.charAt(0).toUpperCase() + name.slice(1)} Length`}
        </div>
        <Button
          name="configMinusButton"
          id={`${name}-decrement`}
          value="-"
          isDisabled={buttonsDisabled}
          buttonClick={this.handleDecrementTime}
        />
        <span className="configLength" id={`${name}-length`}>
          {this.toMM(sessionTime)}
        </span>
        <Button
          name="configPlusButton"
          id={`${name}-increment`}
          value="+"
          isDisabled={buttonsDisabled}
          buttonClick={this.handleIncrementTime}
        />
      </div>
    );
  }
}

TimerConfig.propTypes = {
  name: PropTypes.string.isRequired,
  setTimeState: PropTypes.func.isRequired,
  pomodoroState: PropTypes.number.isRequired,
  sessionTime: PropTypes.number.isRequired,
  buttonsDisabled: PropTypes.bool.isRequired
};

export default TimerConfig;
