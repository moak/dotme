"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = exports.slugify = exports.capitalize = void 0;

var capitalize = function capitalize(item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
};

exports.capitalize = capitalize;

var slugify = function slugify(text) {
  return text.toString().toLowerCase().replace(/[^0-9a-zA-Z_]/g, '_');
};

exports.slugify = slugify;

var generate = function generate() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var text = '';
  var allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < amount; i++) {
    text += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
  }

  return text;
};

exports.generate = generate;