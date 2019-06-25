let countDownInterval = null;

export const startTimer = (seconds, tick, timerFinished) => {
  const now = Math.round(Date.now() / 1000);
  const then = now + seconds;

  countDownInterval = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now() / 1000);
    if (secondsLeft < 0) {
      return timerFinished();
    }

    return tick(secondsLeft);
  }, 1000);
  return true;
};

export const stopTimer = () => {
  clearInterval(countDownInterval);
};
