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
      <label htmlFor="switch">
        Sound:
        <div className="switch">
          <input type="checkbox" id="switch" checked={sound} onChange={toggleSound} />
          <span className="slider" />
        </div>
      </label>
    </div>
  );
}

SoundConfig.propTypes = {
  sound: PropTypes.bool.isRequired,
  setSound: PropTypes.func.isRequired
};

export default SoundConfig;
