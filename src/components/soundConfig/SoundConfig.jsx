import React from 'react';
import PropTypes from 'prop-types';

function SoundConfig({ sound, setSound }) {
  const toggleSound = () => {
    if (sound === true) {
      setSound(false);
    } else {
      setSound(true);
    }
  };

  return (
    <label htmlFor="soundCheckBox">
      Sound:
      <input
        type="checkbox"
        id="soundCheckBox"
        name="soundCheckbox"
        checked={sound}
        onChange={toggleSound}
      />
    </label>
  );
}

SoundConfig.propTypes = {
  sound: PropTypes.bool.isRequired,
  setSound: PropTypes.func.isRequired
};

export default SoundConfig;
