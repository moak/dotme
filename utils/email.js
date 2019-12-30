"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = exports.send = void 0;

var mailjet = require('node-mailjet').connect('40272bb9df0f23fedf0eb37976369f99', '335acc2e71b80358be992bd3fc5edc03');

var send = function send(_ref) {
  var _ref$fromName = _ref.fromName,
      fromName = _ref$fromName === void 0 ? 'Livefolio' : _ref$fromName,
      _ref$from = _ref.from,
      from = _ref$from === void 0 ? 'barbot.max@gmail.com' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? 'barbot.max@gmail.com' : _ref$to,
      _ref$toName = _ref.toName,
      toName = _ref$toName === void 0 ? null : _ref$toName,
      _ref$subject = _ref.subject,
      subject = _ref$subject === void 0 ? null : _ref$subject,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? null : _ref$text,
      _ref$html = _ref.html,
      html = _ref$html === void 0 ? null : _ref$html,
      _ref$templateVariable = _ref.templateVariables,
      templateVariables = _ref$templateVariable === void 0 ? null : _ref$templateVariable,
      _ref$templateId = _ref.templateId,
      templateId = _ref$templateId === void 0 ? null : _ref$templateId;
  var request = mailjet.post('send', {
    version: 'v3.1'
  }).request({
    Messages: [{
      From: {
        Email: from,
        Name: fromName
      },
      To: [{
        Email: to,
        Name: toName
      }],
      TemplateID: templateId,
      TemplateLanguage: templateId ? true : false,
      Variables: templateVariables,
      Subject: subject,
      TextPart: text,
      HTMLPart: html
    }]
  });
  return request;
};

exports.send = send;

var isValid = function isValid(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

exports.isValid = isValid;