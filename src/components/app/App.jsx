import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import TimerConfig from '../timerConfig';
import TimerDisplay from '../timerDisplay';
import TimerStart from '../timerStart';
import TimerReset from '../timerReset';
import Sound from '../sound';

const defaultSessionLength = 25 * 60;
const defaultBreakLength = 5 * 60;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: defaultBreakLength,
      sessionLength: defaultSessionLength,
      secondsLeft: 1500,
      sessionState: 'session', // session, break
      sound: 'on'
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TimerDisplay name={this.state.sessionState} secondsLeft={this.state.secondsLeft} />
        <TimerConfig
          name="session"
          sessionLength={this.state.sessionLength}
          buttonClick={() => {
            alert('session');
          }}
        />
        <TimerConfig
          name="break"
          sessionLength={this.state.breakLength}
          buttonClick={() => {
            alert('break');
          }}
        />
        <TimerStart
          name="start_stop"
          buttonClick={() => {
            alert('start');
          }}
        />
        <TimerReset
          name="reset"
          buttonClick={() => {
            alert('reset');
          }}
        />
        <Sound
          sound={this.state.sound}
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
