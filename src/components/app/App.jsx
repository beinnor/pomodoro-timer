import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import TimerConfig from '../timerConfig';
import TimerDisplay from '../timerDisplay';
import TimerStart from '../timerStart';
import TimerReset from '../timerReset';
import SoundConfig from '../soundConfig';
import mp3file from '../../assets/alarm-sound.mp3';
import oggfile from '../../assets/alarm-sound.ogg';
import captionfile from '../../assets/captions.vtt';
import { startTimer, stopTimer } from '../../utils/timer';
import * as pomodoroStates from '../../utils/pomodoroStates';
import * as timerStates from '../../utils/timerStates';

const defaultSessionTime = 25 * 60;
const defaultBreakTime = 5 * 60;
const defaultCurrentTimeLeft = defaultSessionTime;
const defaultPomodoroState = pomodoroStates.SESSION;
const defaultTimerState = timerStates.PAUSED;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      currentTimeLeft: defaultCurrentTimeLeft,
      sessionTime: defaultSessionTime,
      breakTime: defaultBreakTime,
      pomodoroState: defaultPomodoroState,
      timerState: defaultTimerState,
      buttonsDisabled: false,
      sound: true,
      startButtonValue: 'Start'
    };
  }

  setTimeState = obj => {
    this.setState(obj);
  };

  tick = secs => {
    this.setState({ currentTimeLeft: secs });
  };

  timerFinished = () => {
    const { sessionTime, breakTime, pomodoroState, sound } = this.state;
    if (sound) {
      this.audioBeep.play();
    }
    stopTimer();
    if (pomodoroState === pomodoroStates.SESSION) {
      this.setState({ pomodoroState: pomodoroStates.BREAK });
      startTimer(breakTime, this.tick, this.timerFinished);
      return;
    }
    if (pomodoroState === pomodoroStates.BREAK) {
      this.setState({ pomodoroState: pomodoroStates.SESSION });
      startTimer(sessionTime, this.tick, this.timerFinished);
    }
  };

  handleStartButton = () => {
    const { timerState, currentTimeLeft } = this.state;

    if (timerState === timerStates.PAUSED) {
      this.setState({
        timerState: timerStates.RUNNING,
        buttonsDisabled: true,
        startButtonValue: 'Stop'
      });
      startTimer(currentTimeLeft, this.tick, this.timerFinished);
    }

    if (timerState === timerStates.RUNNING) {
      this.setState({
        timerState: timerStates.PAUSED,
        buttonsDisabled: false,
        startButtonValue: 'Start'
      });
      stopTimer();
    }
  };

  handleReset = () => {
    stopTimer();
    this.setState({
      currentTimeLeft: defaultCurrentTimeLeft,
      sessionTime: defaultSessionTime,
      breakTime: defaultBreakTime,
      pomodoroState: pomodoroStates.SESSION,
      timerState: timerStates.PAUSED,
      buttonsDisabled: false,
      sound: true,
      startButtonValue: 'Start'
    });
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

  render() {
    const {
      pomodoroState,
      currentTimeLeft,
      sessionTime,
      breakTime,
      sound: soundOn,
      startButtonValue,
      buttonsDisabled
    } = this.state;
    return (
      <div className="App">
        <Header />

        <TimerDisplay pomodoroState={pomodoroState} timeLeft={currentTimeLeft} />
        <TimerConfig
          name="session"
          pomodoroState={pomodoroState}
          sessionTime={sessionTime}
          buttonsDisabled={buttonsDisabled}
          setTimeState={this.setTimeState}
        />
        <TimerConfig
          name="break"
          pomodoroState={pomodoroState}
          sessionTime={breakTime}
          buttonsDisabled={buttonsDisabled}
          setTimeState={this.setTimeState}
        />
        <TimerStart buttonClick={this.handleStartButton} value={startButtonValue} />
        <TimerReset buttonClick={this.handleReset} />
        <SoundConfig
          sound={soundOn}
          setSound={sound => {
            this.setState({ sound });
          }}
        />
        <audio
          id="beep"
          preload="auto"
          ref={audio => {
            this.audioBeep = audio;
          }}
        >
          <source src={oggfile} type="audio/ogg" />
          <source src={mp3file} type="audio/mpeg" />
          <track kind="captions" default srcLang="en" src={captionfile} />
        </audio>

        <Footer />
      </div>
    );
  }
}

export default App;
