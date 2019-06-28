import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import TimerConfig from '../timerConfig';
import TimerDisplay from '../timerDisplay';
import TimerStart from '../timerStart';
import TimerReset from '../timerReset';
import SoundConfig from '../soundConfig';
import { startTimer, stopTimer } from '../../utils/timer';
import * as timerStates from '../../utils/timerStates';

const defaultSessionTime = 25 * 60;
const defaultBreakTime = 5 * 60;
const defaultCurrentTimeLeft = defaultSessionTime;
const defaultPomodoroState = timerStates.INITIAL;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeLeft: defaultCurrentTimeLeft,
      sessionTime: defaultSessionTime,
      breakTime: defaultBreakTime,
      pomodoroState: defaultPomodoroState,
      sound: true,
      startButtonValue: 'Start'
    };
  }

  setTimeState = obj => {
    this.setState(obj);
  };

  tick = secs => {
    console.log(secs);
    this.setState({ currentTimeLeft: secs });
  };

  timerFinished = () => {
    const { sessionTime, breakTime, pomodoroState } = this.state;
    console.log('timer finished');
    stopTimer();
    if (pomodoroState === timerStates.SESSION) {
      console.log('goto BREAK');
      this.setState({ pomodoroState: timerStates.BREAK });
      startTimer(breakTime, this.tick, this.timerFinished);
      return;
    }
    if (pomodoroState === timerStates.BREAK) {
      console.log('goto SESSION');
      this.setState({ pomodoroState: timerStates.SESSION });
      startTimer(sessionTime, this.tick, this.timerFinished);
    }
  };

  handleStartButton = () => {
    const { currentTimeLeft, pomodoroState } = this.state;

    if (pomodoroState === timerStates.INITIAL) {
      // start timer
      console.log('start timer, goto SESSION');
      this.setState({ pomodoroState: timerStates.SESSION, startButtonValue: 'Stop' });
      startTimer(currentTimeLeft, this.tick, this.timerFinished);
      return;
    }
    if (pomodoroState === timerStates.SESSION) {
      console.log('pause timer, goto SESSION_PAUSED');
      this.setState({ pomodoroState: timerStates.SESSION_PAUSED, startButtonValue: 'Start' });
      stopTimer();
      return;
    }
    if (pomodoroState === timerStates.SESSION_PAUSED) {
      console.log('unpause timer, back to SESSION');
      this.setState({ pomodoroState: timerStates.SESSION, startButtonValue: 'Stop' });
      startTimer(currentTimeLeft, this.tick, this.timerFinished);
      return;
    }
    if (pomodoroState === timerStates.BREAK) {
      console.log('pause timer, goto BREAK_PAUSED');
      this.setState({ pomodoroState: timerStates.BREAK_PAUSED, startButtonValue: 'Stop' });
      stopTimer();
      return;
    }
    if (pomodoroState === timerStates.BREAK_PAUSED) {
      console.log('unpause timer, back to BREAK');
      this.setState({ pomodoroState: timerStates.BREAK, startButtonValue: 'Start' });
      startTimer(currentTimeLeft, this.tick, this.timerFinished);
    }
  };

  handleReset = () => {
    stopTimer();
    this.setState({
      currentTimeLeft: defaultCurrentTimeLeft,
      sessionTime: defaultSessionTime,
      breakTime: defaultBreakTime,
      pomodoroState: timerStates.INITIAL,
      sound: true
    });
  };

  render() {
    const {
      pomodoroState,
      currentTimeLeft,
      sessionTime,
      breakTime,
      sound: soundOn,
      startButtonValue
    } = this.state;
    return (
      <div className="App">
        <Header />
        <TimerDisplay pomodoroState={pomodoroState} timeLeft={currentTimeLeft} />
        <TimerConfig
          name="session"
          pomodoroState={pomodoroState}
          sessionTime={sessionTime}
          setTimeState={this.setTimeState}
        />
        <TimerConfig
          name="break"
          pomodoroState={pomodoroState}
          sessionTime={breakTime}
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
        {/* <audio id="beep" preload="auto" src="" ref="" /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
