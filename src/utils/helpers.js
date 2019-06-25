export function toMMSS(secs) {
  let minutes;
  let seconds;

  if (secs === 3600) {
    minutes = 60;
    seconds = 0;
  } else {
    minutes = Math.floor(secs / 60) % 60;
    seconds = secs % 60;
  }

  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export const decrementSessionTime = (length, state) => {
  if (length > 60) {
    const temp = length - 60;
    const status = { sessionLength: temp };
    if (state === 'sessionStopped') {
      status.secondsLeft = temp;
    }
    return status;
  }
  return {};
};

export const incrementSessionTime = (length, state) => {
  if (length < 3600) {
    const temp = length + 60;
    const status = {
      sessionLength: temp
    };
    if (state === 'sessionStopped') {
      status.secondsLeft = temp;
    }
    return status;
  }
  return {};
};

export const decrementBreakTime = (length, state) => {
  if (length > 60) {
    const temp = length - 60;
    const status = { breakLength: temp };
    if (state === 'breakStopped') {
      status.secondsLeft = temp;
    }
    return status;
  }
  return {};
};

export const incrementBreakTime = (length, state) => {
  if (length < 3600) {
    const temp = length + 60;
    const status = {
      breakLength: temp
    };
    if (state === 'breakStopped') {
      status.secondsLeft = temp;
    }
    return status;
  }
  return {};
};
