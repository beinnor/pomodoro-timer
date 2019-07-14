import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import Button from '../button';
import { toMM } from '../../utils/helpers';

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
    alert('increment');
  };

  updateTimesValidations = (name, newTime, pomodoroState, setTimeState) => {
    if (name === 'session') {
      return setTimeState({ sessionTime: newTime, currentTimeLeft: newTime });
    }
    if (name === 'break') {
      return setTimeState({ breakTime: newTime, currentTimeLeft: newTime });
    }
    return false;
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
          {toMM(sessionTime)}
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
