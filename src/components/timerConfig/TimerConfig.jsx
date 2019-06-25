import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import Button from '../button';
import toMMSS from '../../utils/helpers';

function TimerConfig({ name, sessionLength, onClickDecrement, onClickIncrement }) {
  return (
    <div id={`${name}Config`}>
      <Button id={`${name}-decrement`} value="-" buttonClick={onClickDecrement} />
      <span id={`${name}Length`}>{toMMSS(sessionLength)}</span>
      <Button id={`${name}-increment`} value="+" buttonClick={onClickIncrement} />
    </div>
  );
}

TimerConfig.propTypes = {
  name: PropTypes.string.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  sessionLength: PropTypes.number.isRequired
};

export default TimerConfig;
