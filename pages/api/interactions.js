export const config = {
    api: {
      bodyParser: false,
    },
  };

const { buffer } = require('micro');
const nacl = require('tweetnacl');

export default async function interactions(req, res) {
    if (req.method != 'POST') return res.status(400).json({ error: 'Invalid request' });
    const buf = await buffer(req);

    try {
    const isVerified = nacl.sign.detached.verify(
      Buffer.from(req.headers['X-Signature-Timestamp'] + buf),
      Buffer.from(req.headers['X-Signature-Ed25519'], 'hex'),
      Buffer.from(process.env.PUBLIC_KEY, 'hex')
    );
    } catch {
        return res.status(401).end('invalid request signature');
    }
    
    if (!isVerified) {
      return res.status(401).end('invalid request signature');
    }
}