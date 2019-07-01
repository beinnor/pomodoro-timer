import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './TimerStart.css';

function TimerStart({ buttonClick, value }) {
  return <Button id="start_stop" value={value} buttonClick={buttonClick} />;
}

TimerStart.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TimerStart;
