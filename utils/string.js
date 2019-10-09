export const capitalize = item => item.charAt(0).toUpperCase() + item.slice(1);
export const slugify = text => text.toString().toLowerCase().replace(/[^0-9a-zA-Z_]/g, '_');