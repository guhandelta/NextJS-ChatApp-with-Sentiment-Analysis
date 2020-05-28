import React, { Component } from 'react';

class ChatMessages extends Component {

    render() {
        // This component requires two props: message for the chat message and position of the message -> either right or left,...
        //... respective to the user's screen
        const { position = 'left', message } = this.props;
        const isRight = position.toLowerCase() === 'right';

        const align = isRight ? 'text-right' : 'text-left';
        const justify = isRight ? 'justify-content-end' : 'justify-content-start';

        const messageBoxStyles = {
            maxWidth: '70%',
            flexGrow: 0
        };

        const messageStyles = {
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
        };

        // Display the message, from the props
        return <div className={`w-100 my-1 d-flex ${justify}`}>
            <div className="bg-light rounded border border-gray p-2" style={messageBoxStyles}>
                <span className={`d-block text-secondary ${align}`} style={messageStyles}>
                    {message}
                </span>
            </div>
        </div>
    }

}

export default ChatMessages;
