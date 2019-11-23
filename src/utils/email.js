const mailjet = require('node-mailjet').connect(
  '40272bb9df0f23fedf0eb37976369f99',
  '335acc2e71b80358be992bd3fc5edc03',
);

export const send = ({
  fromName = 'Livefolio',
  from = 'barbot.max@gmail.com',
  to = 'barbot.max@gmail.com',
  toName = null,
  subject = null,
  text = null,
  html = null,
  templateVariables = null,
  templateId = null,
}) => {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: from,
          Name: fromName,
        },
        To: [
          {
            Email: to,
            Name: toName,
          },
        ],
        TemplateID: templateId,
        TemplateLanguage: templateId || false,
        Variables: templateVariables,
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
      },
    ],
  });

  return request;
};
