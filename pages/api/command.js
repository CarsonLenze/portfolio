const axios = require('axios').default;

export default async function command(req, res) {
    if (req.query.key != process.env.KEY) return res.status(400).json({ error: 'Invalid request' });

    let command = {
        "name": "motd",
        "type": 1,
        "description": "Sets the next meme of the day",
        "options": [
            {
                "name": "meme",
                "description": "The image or video of the meme",
                "type": 11,
                "required": true,
            },
            {
                "name": "override",
                "description": "Whether to override todays meme of the day",
                "type": 5,
                "required": false
            }
        ]
    }

    let data;
    try {
        data = await axios.post(`https://discord.com/api/v10/applications/${process.env.PUBLIC_ID}/guilds/${req.query.guild}/commands`, command, { headers: { Authorization: `Bot ${process.env.TOKEN}` } });
    } catch (err) {
        res.status(400).json({ error: err })
    }
    res.status(200).send('Command has been successfully set')

}