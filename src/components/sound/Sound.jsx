import React from 'react';
import PropTypes from 'prop-types';

function Sound({ sound, setSound }) {
  const toggleSound = () => {
    if (sound === 'on') {
      setSound('off');
    } else {
      setSound('on');
    }
  };

  return (
    <label htmlFor="soundCheckBox">
      Sound:
      <input type="checkbox" id="soundCheckBox" name="soundCheckbox" onClick={toggleSound} />
    </label>
  );
}

Sound.propTypes = {
  sound: PropTypes.string.isRequired,
  setSound: PropTypes.func.isRequired
};

export default Sound;
