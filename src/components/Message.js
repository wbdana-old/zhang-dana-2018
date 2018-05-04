import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Message = (props) => {
    console.log(props.message)

    return(
        <Card id='message-card'>
            <Card.Header><strong>{props.message.messageHeader}</strong></Card.Header>
            <Card.Description>{props.message.messageContent}</Card.Description>
            <Card.Content extra>
                <Button onClick={props.dismissMessage}>Dismiss</Button>
            </Card.Content>
        </Card>
    )
}

export default Message;