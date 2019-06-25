import React from 'react';
import PropTypes from 'prop-types';
import './TimerConfig.css';
import Button from '../button';
import { toMM } from '../../utils/helpers';

function TimerConfig({ name, sessionLength, onClickDecrement, onClickIncrement }) {
  return (
    <div id={`${name}Config`}>
      <div id={`${name}-label`}>{`${name.charAt(0).toUpperCase() + name.slice(1)} Length`}</div>
      <Button id={`${name}-decrement`} value="-" buttonClick={onClickDecrement} />
      <span id={`${name}-length`}>{toMM(sessionLength)}</span>
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
