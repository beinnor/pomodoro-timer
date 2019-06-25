const toMMSS = secs => {
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
};

export default toMMSS;
