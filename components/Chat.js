import React, { Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

class Chat extends React.Component {

    state = {
        chats: [] //Initialize the state with an empty chats array property
    }

    componentDidMount() {
        // Setup a Pusher connection when the component mounts
        this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
            cluster: process.env.PUSHER_APP_CLUSTER,
            encrypted: true
        });

        // Setup a Channel subscription to a Pusher channel *chat-room* when the component mounts
        this.channel = this.pusher.subscribe('chat-room');

        // Binding to the new-message event on the channel, which gets triggered when a new chat message comes in
        this.channel.bind('new-message', ({ chat = null }) => {
            const { chats } = this.state;
            chat && chats.push(chat);
            this.setState({ chats });
        });
        // Binding the connected event on the Pusher client, on a fresh connection
        this.pusher.connection.bind('connected', () => {
            axios.post('/messages') // Fetch all the chat messages from history by making a POST /messages HTTP request using the axios
                .then(response => {
                    const chats = response.data.messages;
                    this.setState({ chats }); // Set the fetched messages to the state
                });
        });

    }

    componentWillUnmount() {
        this.pusher.disconnect();
    }

    handleKeyUp = evt => {
        const value = evt.target.value;

        if (evt.keyCode === 13 && !evt.shiftKey) {
            const { activeUser: user } = this.props;
            // Construct a chat object containing the user sending the message (currently active user), message & timestamp
            const chat = { user, message: value, timestamp: +new Date };
            // Clear the textarea
            evt.target.value = '';
            // Pass the chat object as payload, over a POST /message HTTP request
            axios.post('/message', chat);
        }
    }

    render() {
        /* activeUser prop to identify the currently active user */
        return (this.props.activeUser && <Fragment>

            <div className="border-bottom border-gray w-100 d-flex align-items-center bg-white" style={{ height: 90 }}>
                <h2 className="text-dark mb-0 mx-4 px-2">{this.props.activeUser}</h2>
            </div>

            <div className="border-top border-gray w-100 px-4 d-flex align-items-center bg-light" style={{ minHeight: 90 }}>
                <textarea className="form-control px-3 py-2" onKeyUp={this.handleKeyUp} placeholder="Enter a chat message" style={{ resize: 'none' }}></textarea>
            </div>

        </Fragment>)
    }

}

export default Chat;
