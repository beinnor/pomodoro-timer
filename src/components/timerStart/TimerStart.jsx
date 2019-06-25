import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

function TimerStart({ buttonClick }) {
  return <Button id="start_stop" value="Start/Stop" buttonClick={buttonClick} />;
}

TimerStart.propTypes = {
  buttonClick: PropTypes.func.isRequired
};

export default TimerStart;
