export const isPast = time => {
  // eslint-disable-line import/prefer-default-export
  const now = new Date();
  return time < now;
};
