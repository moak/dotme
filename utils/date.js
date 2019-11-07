"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPast = void 0;

var isPast = function isPast(string) {
  var date = new Date(string);
  var now = new Date();
  return !!(now > date);
};

exports.isPast = isPast;