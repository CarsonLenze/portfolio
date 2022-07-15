let axios = require('axios');

export default async function interactions(req, res) {
    let ip;

    if (req.headers["x-forwarded-for"]) {
      ip = req.headers["x-forwarded-for"].split(',')[0]
    } else if (req.headers["x-real-ip"]) {
      ip = req.connection.remoteAddress
    } else {
      ip = req.connection.remoteAddress
    }

    res.status(200);

    axios.post(process.env.WEBHOOK, { content: `Page viewed from ${ip} `})
    res.json({ status: 'OK' });
}