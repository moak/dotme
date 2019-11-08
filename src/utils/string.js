export const capitalize = item => item.charAt(0).toUpperCase() + item.slice(1);

export const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^0-9a-zA-Z_]/g, '_');

export const generate = (amount = 15) => {
  let text = '';
  const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < amount; i++) {
    text += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
  }

  return text;
};
