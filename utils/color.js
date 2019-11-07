"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgb2hex = exports.hexToRgb = void 0;

var hexToRgb = function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1
  } : null;
};

exports.hexToRgb = hexToRgb;

var rgb2hex = function rgb2hex(red, green, blue) {
  var rgb = blue | green << 8 | red << 16;
  return "#".concat((0x1000000 + rgb).toString(16).slice(1));
};

exports.rgb2hex = rgb2hex;