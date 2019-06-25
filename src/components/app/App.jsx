import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import TimerConfig from '../timerConfig';
import TimerDisplay from '../timerDisplay';
import TimerStart from '../timerStart';
import TimerReset from '../timerReset';
import SoundConfig from '../soundConfig';

const defaultSessionLength = 25 * 60;
const defaultBreakLength = 5 * 60;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: defaultBreakLength,
      sessionLength: defaultSessionLength,
      secondsLeft: 1500,
      sessionState: 'sessionStopped', // session, sessionStopped, break, breakStopped
      sound: true
    };
  }

  handleDecrementSessionTime = () => {
    const { sessionLength, sessionState } = this.state;

    if (sessionLength > 60) {
      const temp = sessionLength - 60;
      this.setState({
        sessionLength: temp
      });
      if (sessionState === 'sessionStopped') {
        this.setState({
          secondsLeft: temp
        });
      }
    }
  };

  handleIncrementSessionTime = () => {
    const { sessionLength, sessionState } = this.state;

    if (sessionLength < 3600) {
      const temp = sessionLength + 60;
      this.setState({
        sessionLength: temp
      });
      if (sessionState === 'sessionStopped') {
        this.setState({
          secondsLeft: temp
        });
      }
    }
  };

  handleDecrementBreakTime = () => {
    const { breakLength, sessionState } = this.state;

    if (breakLength > 60) {
      const temp = breakLength - 60;
      this.setState({
        breakLength: temp
      });
      if (sessionState === 'breakStopped') {
        this.setState({
          secondsLeft: temp
        });
      }
    }
  };

  handleIncrementBreakTime = () => {
    const { breakLength, sessionState } = this.state;

    if (breakLength < 3600) {
      const temp = breakLength + 60;
      this.setState({
        breakLength: temp
      });
      if (sessionState === 'breakStopped') {
        this.setState({
          secondsLeft: temp
        });
      }
    }
  };

  handleTimerStart = () => {
    alert('start up');
  };

  handleReset = () => {
    this.setState({
      breakLength: defaultBreakLength,
      sessionLength: defaultSessionLength,
      secondsLeft: 1500,
      sessionState: 'session', // session, break
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
        <TimerStart buttonClick={this.handleTimerStart} />
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
