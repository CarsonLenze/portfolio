import MailSettings from '../../mail.config.js';
import mailer from 'nodemailer';

const data = { name: '', email: '', message: '' }
export default async function contact(req, res) {
  Object.keys(data).forEach(x => data[x] = req.body[x]);
  const missing = Object.keys(data).filter(x => !data[x]);
  if (missing.length) return res.status(400).json({ error: `Request malformed. Missing parameter(s): ${missing.join(', ')}` });

  const Client = new MailClient();
  const context = {
    subject: 'New message from carsons.site!',
    html: `<div class="container" style="margin-left: 20px;margin-right: 20px;">
    <h3>You've got a new mail from ${data.name}, their email is: ${data.email} </h3>
    <div style="font-size: 16px;">
    <p>Message:</p><p>${data.message}</p><br>
    </div></div>`,
  };
  const response = await Client.send(data.email, context);
  if (response.rejected.length) return res.status(400).json({ error: `there was a error sending your message. ${response.response}` });

  res.status(200).json(response);
}

class MailClient {
  constructor() {
    this.email = MailSettings.from
    this.transporter = mailer.createTransport(MailSettings);
  }
  send(recipient, data) {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail({ from: this.email, to: recipient, ...data }, (error, data) => {
        if (error) return reject(error);
        resolve(data);
      });
    });
  }
}