import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './TimerReset.css';

function TimerReset({ buttonClick }) {
  return <Button id="reset" value="Reset" buttonClick={buttonClick} />;
}

TimerReset.propTypes = {
  buttonClick: PropTypes.func.isRequired
};

export default TimerReset;
