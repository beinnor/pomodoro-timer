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

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function toMM(secs) {
  const minutes = Math.floor(secs / 60);

  return `${minutes.toString().padStart(2, ' ')}`;
}
