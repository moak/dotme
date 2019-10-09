export const isPast = string => {
  const date = new Date(string);
  const now = new Date();
  return !!(now > date);
};
