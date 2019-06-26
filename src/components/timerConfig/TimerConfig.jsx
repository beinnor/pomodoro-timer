import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import Button from '../button';
import { toMM } from '../../utils/helpers';

class TimerConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 25 * 60
    };
  }

  handleDecrementTime = () => {
    const { name, pomodoroState, setTimeLeft } = this.props;
    const { duration } = this.state;
    if (pomodoroState === `${name}Stopped` || pomodoroState === 'initial') {
      if (duration > 60) {
        const newTime = duration - 60;
        this.setState({ duration: newTime });
        if (name === 'session') {
          return setTimeLeft(newTime);
        }
        if (pomodoroState === 'breakStopped') {
          return setTimeLeft(newTime);
        }
      }
    }
    return false;
  };

  handleIncrementTime = () => {
    const { name, pomodoroState, setTimeLeft } = this.props;
    const { duration } = this.state;
    if (pomodoroState === `${name}Stopped` || pomodoroState === 'initial') {
      if (duration < 3600) {
        const newTime = duration + 60;
        this.setState({ duration: newTime });
        if (name === 'session') {
          return setTimeLeft(newTime);
        }
        if (pomodoroState === 'breakStopped') {
          return setTimeLeft(newTime);
        }
      }
    }
    return false;
  };

  render() {
    const { name } = this.props;
    const { duration } = this.state;
    return (
      <div id={`${name}Config`}>
        <div id={`${name}-label`}>{`${name.charAt(0).toUpperCase() + name.slice(1)} Length`}</div>
        <Button id={`${name}-decrement`} value="-" buttonClick={this.handleDecrementTime} />
        <span id={`${name}-length`}>{toMM(duration)}</span>
        <Button id={`${name}-increment`} value="+" buttonClick={this.handleIncrementTime} />
      </div>
    );
  }
}

TimerConfig.propTypes = {
  name: PropTypes.string.isRequired,
  setTimeLeft: PropTypes.func.isRequired,
  pomodoroState: PropTypes.string.isRequired
};

export default TimerConfig;
