import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './TimerReset.css';

function TimerReset({ buttonClick, buttonsDisabled }) {
  return <Button id="reset" value="Reset" isDisabled={buttonsDisabled} buttonClick={buttonClick} />;
}

TimerReset.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  buttonsDisabled: PropTypes.bool.isRequired
};

export default TimerReset;
