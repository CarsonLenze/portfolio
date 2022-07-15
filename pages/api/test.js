let axios = require('axios');

export default async function interactions(req, res) {
    let ip;

    ip = req.headers["x-forwarded-for"]

    res.status(200);

    axios.post(process.env.WEBHOOK, { content: `Page viewed from ${ip} `})
    res.json({ status: ip });
}