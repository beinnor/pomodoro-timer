import { SSL_OP_NO_TICKET } from 'constants';

let countDownInterval = null;

export const startTimer = (seconds, tick) => {
  const now = Math.round(Date.now() / 1000);
  const then = now + seconds;

  countDownInterval = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now() / 1000);
    if (secondsLeft < 0) {
      return;
    }

    tick(secondsLeft);
  }, 1000);
};

export const stopTimer = () => {
  clearInterval(countDownInterval);
};
