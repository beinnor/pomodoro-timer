import React from 'react';
import PropTypes from 'prop-types';
import './SoundConfig.css';

function SoundConfig({ sound, setSound }) {
  const toggleSound = () => {
    if (sound === true) {
      setSound(false);
    } else {
      setSound(true);
    }
  };

  return (
    <div id="SoundConfig">
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
    </div>
  );
}

SoundConfig.propTypes = {
  sound: PropTypes.bool.isRequired,
  setSound: PropTypes.func.isRequired
};

export default SoundConfig;
