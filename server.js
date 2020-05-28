const cors = require('cors');
const next = require('next');
const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Sentiment = require('sentiment');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();
const sentiment = new Sentiment();

// Ensure that your pusher credentials are properly set in the .env file
// Using the specified variables
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});

app.prepare()
    .then(() => {
        // Set up a simple server using Next.js to wrap an Express application server
        const server = express();

        // Middlewares
        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        // Create an in-memory store for the chat history, to store chat messages in an array. This is useful for new clients that join...
        //... the chat room to see previous messages. Whenever the Pusher client makes a POST request to the /messages endpoint on...
        //... connection, it gets all the messages in the chat history in the returned response.
        const chatHistory = { messages: [] };

        server.post('/message', (req, res, next) => {
            // Fetch the chat payload from req.body through the help of the body-parsermiddleware
            const { user = null, message = '', timestamp = +new Date } = req.body;
            // Calculate the overall sentiment score of the chat message using the sentiment module
            const sentimentScore = sentiment.analyze(message).score;

            // Reconstruct the chat object, adding the sentiment property containing the sentiment score
            const chat = { user, message, timestamp, sentiment: sentimentScore };
            // Add the chat to the chat history messages
            chatHistory.messages.push(chat);
            // Trigger a new-message event on the chat-room Pusher channel, passing the chat object in the event data
            pusher.trigger('chat-room', 'new-message', { chat });
        });

        //Whenever the Pusher client makes a POST request to the /messages endpoint on connection, it gets all the messages...
        //... in the chat history in the returned response
        server.post('/messages', (req, res, next) => {
            res.json({ ...chatHistory, status: 'success' });
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
