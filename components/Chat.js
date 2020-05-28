import React, { Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

import ChatMessages from './ChatMessages';

const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];

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
                {this.state.chats.map((chat, index) => {  // Iterate through the chatsarray propertities, in the state, to check if...
                    //... the sender of the message is the same as the currently active user and use that to determine the position of the...
                    //... displayed chat message

                    const previous = Math.max(0, index - 1);
                    const previousChat = this.state.chats[previous];
                    const position = chat.user === this.props.activeUser ? "right" : "left";

                    // Current chat message is the first in the list
                    const isFirst = previous === index;
                    // Current chat message directly follows a message from another user
                    const inSequence = chat.user === previousChat.user;
                    // Current chat message has a delay of over 1 minute from the previous message of the same user
                    const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;
                    // Set the mood of the user while typing the message to either happy, sad or neutral using the earlier defined constants...
                    //...using the sentiment score in the chat object
                    const mood = chat.sentiment > 0 ? HAPPY_EMOJI : (chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI);

                    return (
                        // Global_Objects/String/fromCodePoint
                        // String.fromCodePoint(...mood) => fn() added in ES6 to get the emoji from the code points defined in constants earlier
                        <Fragment key={index}>

                            {(isFirst || !inSequence || hasDelay) && (
                                <div className={`d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`} style={{ fontSize: '0.9rem' }}>
                                    <span className="d-block" style={{ fontSize: '1.6rem' }}>
                                        {String.fromCodePoint(...mood)}
                                    </span>
                                    <span>{chat.user || 'Anonymous'}</span>
                                </div>
                            )}

                            <ChatMessages message={chat.message} position={position} />

                        </Fragment>
                    );

                })}
                <textarea className="form-control px-3 py-2" onKeyUp={this.handleKeyUp} placeholder="Enter a chat message" style={{ resize: 'none' }}></textarea>
            </div>

        </Fragment>)
    }

}

export default Chat;
