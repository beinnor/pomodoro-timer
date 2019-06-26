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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeLeft: defaultCurrentTimeLeft,
      sessionTime: defaultSessionTime,
      breakTime: defaultBreakTime,
      pomodoroState: timerStates.INITIAL,
      sound: true
    };
  }

  setTimeState = obj => {
    this.setState(obj);
  };

  timerFinished = () => {
    console.log('timer finished');
    stopTimer();
  };

  handleTimerButton = () => {
    const { currentTimeLeft: timeLeft, pomodoroState } = this.state;
    if (pomodoroState === 'sessionStopped' || pomodoroState === 'breakStopped') {
      if (pomodoroState === 'sessionStopped') this.setState({ pomodoroState: 'session' });
      if (pomodoroState === 'breakStopped') this.setState({ pomodoroState: 'break' });

      startTimer(timeLeft, this.tick, this.timerFinished);
    } else {
      if (pomodoroState === 'session') this.setState({ pomodoroState: 'sessionStopped' });
      if (pomodoroState === 'break') this.setState({ pomodoroState: 'breakStopped' });
      stopTimer();
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
    const { pomodoroState, currentTimeLeft, sessionTime, breakTime, sound: soundOn } = this.state;
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
        <TimerStart buttonClick={this.handleTimerButton} />
        <TimerReset buttonClick={this.handleReset} />
        <SoundConfig
          sound={soundOn}
          setSound={sound => {
            this.setState({ sound });
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
