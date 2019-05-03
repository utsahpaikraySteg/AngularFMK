ng build --base-href https://utsahpaikraysteg.github.io/AngularFMK/
ngh
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.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);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
npm install --save @sendgrid/mail

echo "export SENDGRID_API_KEY='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'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env