"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = void 0;

var mailjet = require('node-mailjet').connect('40272bb9df0f23fedf0eb37976369f99', '335acc2e71b80358be992bd3fc5edc03');

var send = function send(_ref) {
  var from = _ref.from,
      to = _ref.to,
      subject = _ref.subject,
      text = _ref.text,
      _ref$html = _ref.html,
      html = _ref$html === void 0 ? null : _ref$html;
  var request = mailjet.post('send', {
    version: 'v3.1'
  }).request({
    Messages: [{
      From: {
        Email: 'barbot.max@gmail.com',
        Name: 'Livefolio'
      },
      To: [{
        Email: to // Name: 'Maxime',

      }],
      Subject: subject,
      TextPart: text,
      HTMLPart: html,
      CustomID: 'AppGettingStartedTest'
    }]
  });
  return request;
};

exports.send = send;