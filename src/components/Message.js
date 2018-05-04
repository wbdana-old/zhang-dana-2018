import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Message = (props) => {
    console.log(props.message)

    return(
        <Card id='message-card'>
            <Card.Header id='message-header'><strong>{props.message.messageHeader}</strong></Card.Header>
            <Card.Description id='message-description'>{props.message.messageContent}</Card.Description>
            <Card.Content extra>
                <Button inverted color='grey' onClick={props.dismissMessage}>Dismiss</Button>
            </Card.Content>
        </Card>
    )
}

export default Message;