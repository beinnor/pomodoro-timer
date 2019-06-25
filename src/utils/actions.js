const incrementSession = prevSessionTime => {
  if (prevSessionTime < 60) {
    return prevSessionTime + 1;
  }
  return prevSessionTime;
};

export default incrementSession;
