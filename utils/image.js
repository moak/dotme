"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validate = function validate(image, type) {
  if (type === 'image') {
    var maxSize = _config["default"].upload.imageMaxSize;

    if (image.size > maxSize) {
      return {
        imageValid: false,
        error: 'too_big'
      };
    }

    var acceptedImageExentions = _config["default"].upload.allowedImageExtensions;

    if (!acceptedImageExentions.includes(image.type)) {
      return {
        imageValid: false,
        error: 'wrong_type'
      };
    }
  }

  if (type === 'file') {
    var _maxSize = _config["default"].upload.fileMaxSize;

    if (image.size > _maxSize) {
      return {
        imageValid: false,
        error: 'too_big'
      };
    }

    var acceptedFileExentions = _config["default"].upload.allowedFileExtensions;

    if (!acceptedFileExentions.includes(image.type)) {
      return {
        imageValid: false,
        error: 'wrong_type'
      };
    }
  }

  return {
    imageValid: true,
    error: null
  };
};

exports.validate = validate;