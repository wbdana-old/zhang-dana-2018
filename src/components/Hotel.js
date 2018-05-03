import React from 'react';
import { Icon, Card, Header, Button } from 'semantic-ui-react';

const Hotel = (props) => {
    return(
        <Card fluid className='hotel-card'>
            <Card.Content className='hotel-card'>
                <Card.Header className='hotel-card'>
                    <Header size='small' className='hotel-card'>
                        <Icon name='hotel' size='mini' />{props.hotel.name}
                    </Header>
                </Card.Header>
                <Card.Meta className='hotel-card'>
                    {props.hotel.number}
                </Card.Meta>
                <Card.Description className='hotel-card'>
                    {props.hotel.address}
                </Card.Description>
            </Card.Content>
            <Card.Content extra className='hotel-card'>
                <div className='ui two buttons'>
                    <a href={props.hotel.link} target='_blank' rel="noopener noreferrer" className='hotel-card'>
                        <Button basic color='white' className='left-button'>Visit Website</Button>
                    </a>
                    <a href={props.hotel.email} className='hotel-card'>
                        <Button basic color='red' className='right-button'>Email</Button>
                    </a>
                </div>
            </Card.Content>
        </Card>
    )
};

export default Hotel;