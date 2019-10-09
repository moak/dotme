const mailjet = require('node-mailjet').connect(
  '40272bb9df0f23fedf0eb37976369f99',
  '335acc2e71b80358be992bd3fc5edc03',
);

export const send = ({ from, to, subject, text, html = null }) => {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'barbot.max@gmail.com',
          Name: 'Livefolio',
        },
        To: [
          {
            Email: to,
            // Name: 'Maxime',
          },
        ],
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
        CustomID: 'AppGettingStartedTest',
      },
    ],
  });

  return request;
};
