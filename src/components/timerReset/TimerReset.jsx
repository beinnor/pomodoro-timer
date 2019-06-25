import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

function TimerReset({ buttonClick }) {
  return <Button id="reset" value="reset" buttonClick={buttonClick} />;
}

TimerReset.propTypes = {
  buttonClick: PropTypes.func.isRequired
};

export default TimerReset;
