"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPortfolioNameValid = void 0;
var BLACK_LIST = ['www', 'http', 'https'];

var isPortfolioNameValid = function isPortfolioNameValid(name) {
  return !!(name.length > 3 && !BLACK_LIST.includes(name) && name.match('^[A-Za-z0-9-_]+$'));
};

exports.isPortfolioNameValid = isPortfolioNameValid;