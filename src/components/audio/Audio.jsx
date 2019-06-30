import React from 'react';
import PropTypes from 'prop-types';
import mp3file from '../../assets/alarm-sound.mp3';
import oggfile from '../../assets/alarm-sound.ogg';
import captionfile from '../../assets/captions.vtt';

class Audio extends React.Component {
  playSound = () => {
    document.getElementById('beep').play();
  };

  render() {
    const { playSound } = this.props;
    return (
      <audio id="beep" preload="auto" ref={playSound}>
        <source src={oggfile} type="audio/ogg" />
        <source src={mp3file} type="audio/mpeg" />
        <track kind="captions" default srcLang="en" src={captionfile} />
      </audio>
    );
  }
}

Audio.propTypes = {
  playSound: PropTypes.func.isRequired
};

export default Audio;
