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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 25 * 60,
      pomodoroState: 'initial', // initial -> session -> [sessionStopped] -> break -> [breakStopped]
      sound: true
    };
  }

  setTimeLeft = seconds => {
    this.setState({ timeLeft: seconds });
  };

  tick = secs => {
    this.setState({ timeLeft: secs });
  };

  timerFinished = () => {
    console.log('timer finished');
    stopTimer();
  };

  handleTimerButton = () => {
    const { timeLeft, pomodoroState } = this.state;
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
      timeLeft: 25 * 60,
      pomodoroState: 'initial',
      sound: true
    });
  };

  render() {
    const { pomodoroState, timeLeft, sound: soundOn } = this.state;
    return (
      <div className="App">
        <Header />
        <TimerDisplay name={pomodoroState} timeLeft={timeLeft} />
        <TimerConfig name="session" pomodoroState={pomodoroState} setTimeLeft={this.setTimeLeft} />
        <TimerConfig name="break" pomodoroState={pomodoroState} setTimeLeft={this.setTimeLeft} />
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
