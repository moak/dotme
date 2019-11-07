const BLACK_LIST = ['www', 'http', 'https'];

export const isPortfolioNameValid = name => {
  return !!(name.length > 3 && !BLACK_LIST.includes(name) && name.match('^[A-Za-z0-9-_]+$'));
};
