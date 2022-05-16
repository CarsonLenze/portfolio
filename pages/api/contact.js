const nodemailer = require('nodemailer');

export default function handler(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        let missing = !name ? 'name' : !email ? 'email' : 'message';
        res.status(400);
        return res.json({ ok: false, message: `Please provide a ${missing}.` });
    }

    var transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: true,
        auth: {
          user: process.env.username,
          pass: process.env.password
        }
      });
      
      var mailOptions = {
        from: `${name} <clenze@carsons.site>`,
        to: 'carsonlenze@gmail.com',
        subject: 'New message from carsons.site!',
        text: `${message} From ${email}`
      };
      
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.status(400);
            return res.json({ ok: false, message: 'Message failed to send.' });
        } else {
            res.status(200);
            return res.json({ ok: true, message: 'Message sent successfully!' });
        }
      });
}