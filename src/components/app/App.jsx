import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import TimerConfig from '../timerConfig';
import TimerDisplay from '../timerDisplay';
import TimerStart from '../timerStart';
import TimerReset from '../timerReset';
import SoundConfig from '../soundConfig';
import {
  decrementSessionTime,
  incrementSessionTime,
  decrementBreakTime,
  incrementBreakTime
} from '../../utils/helpers';
import { startTimer, stopTimer } from '../../utils/timer';

const defaultSessionLength = 25 * 60;
const defaultBreakLength = 5 * 60;
const defaultSessionState = 'sessionStopped';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: defaultBreakLength,
      sessionLength: defaultSessionLength,
      secondsLeft: defaultSessionLength,
      sessionState: 'sessionStopped', // initial -> session -> [sessionStopped] -> break -> [breakStopped]
      sound: true
    };
  }

  handleDecrementSessionTime = () => {
    const { sessionLength, sessionState } = this.state;
    this.setState(decrementSessionTime(sessionLength, sessionState));
  };

  handleIncrementSessionTime = () => {
    const { sessionLength, sessionState } = this.state;
    this.setState(incrementSessionTime(sessionLength, sessionState));
  };

  handleDecrementBreakTime = () => {
    const { breakLength, sessionState } = this.state;
    this.setState(decrementBreakTime(breakLength, sessionState));
  };

  handleIncrementBreakTime = () => {
    const { breakLength, sessionState } = this.state;
    this.setState(incrementBreakTime(breakLength, sessionState));
  };

  tick = secs => {
    this.setState({ secondsLeft: secs });
  };

  timerFinished = () => {
    const { sessionState, breakLength, secondsLeft } = this.state;
    stopTimer();

    if (sessionState === 'session') {
      this.setState({ sessionState: 'break', secondsLeft: breakLength });
      console.log('playsound');
      console.log(`Secondslleft: ${secondsLeft}, brakelength: ${breakLength}`);
      startTimer(secondsLeft, this.tick, this.timerFinished);
    } else if (sessionState === 'break') {
      this.setState({ sessionState: 'initial' });
      console.log('playsound');
    }
  };

  handleTimerButton = () => {
    const { secondsLeft, sessionState } = this.state;
    if (sessionState === 'sessionStopped' || sessionState === 'breakStopped') {
      if (sessionState === 'sessionStopped') this.setState({ sessionState: 'session' });
      if (sessionState === 'breakStopped') this.setState({ sessionState: 'break' });

      startTimer(secondsLeft, this.tick, this.timerFinished);
    } else {
      if (sessionState === 'session') this.setState({ sessionState: 'sessionStopped' });
      if (sessionState === 'break') this.setState({ sessionState: 'breakStopped' });
      stopTimer();
    }
  };

  handleReset = () => {
    stopTimer();
    this.setState({
      breakLength: defaultBreakLength,
      sessionLength: defaultSessionLength,
      secondsLeft: defaultSessionLength,
      sessionState: defaultSessionState,
      sound: true
    });
  };

  render() {
    const { sessionState, secondsLeft, sessionLength, breakLength, sound: soundOn } = this.state;
    return (
      <div className="App">
        <Header />
        <TimerDisplay name={sessionState} secondsLeft={secondsLeft} />
        <TimerConfig
          name="session"
          sessionLength={sessionLength}
          onClickDecrement={this.handleDecrementSessionTime}
          onClickIncrement={this.handleIncrementSessionTime}
        />
        <TimerConfig
          name="break"
          sessionLength={breakLength}
          onClickDecrement={this.handleDecrementBreakTime}
          onClickIncrement={this.handleIncrementBreakTime}
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
