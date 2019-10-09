export const capitalize = item => item.charAt(0).toUpperCase() + item.slice(1);
export const slugify = text => text.toString().toLowerCase().replace(/[^0-9a-zA-Z_]/g, '_');
export const generate = ({
  length = 15
}) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};