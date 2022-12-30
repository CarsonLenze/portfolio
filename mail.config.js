export default {
    host: 'smtp.gmail.com',
    port: '465',
    from: process.env.EMAIL,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
};