const express = require('express');
const pino = require('express-pino-logger')();
const cors = require('cors');
const port = process.env.PORT || 8082;

const twilio = require('twilio')
const AccessToken = twilio.jwt.AccessToken
const ChatGrant = AccessToken.ChatGrant;

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use(pino);

app.get('/api/token', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    const userId = 'test@test.com';
    const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;

    try {
        if (serviceSid) {
            var chatGrant = new ChatGrant({
                serviceSid
            }); 
            var token = new AccessToken(
                process.env.TWILIO_ACCOUNT_SID,
                process.env.TWILIO_API_KEY,
                process.env.TWILIO_API_SECRET
            );
            token.addGrant(chatGrant);
            token.identity = userId;
            res.send(JSON.stringify({ token: token.toJwt() }));
        } else res.status(404).json('Access denied');
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(port, () =>
    console.log(`Express server is running on localhost:${port}`)
);
