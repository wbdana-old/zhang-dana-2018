import React from 'react';
import { Icon, Card, Header, Button } from 'semantic-ui-react';

const Hotel = (props) => {

    function inquiryOrEmail() {
        return props.hotel.name === "Pine Hollow Lodging"
        ? (<a href={props.hotel.email} target='_blank' rel="noopener noreferrer" className='hotel-card'>
            <Button className='right-button'>Email</Button>
           </a>)
        : (<a href={`mailto:${props.hotel.email}`} className='hotel-card'>
            <Button className='right-button'>Email</Button>
           </a>)
    }

    return(
        <Card fluid className='hotel-card'>
            <Card.Content className='hotel-card'>
                <Card.Header className='hotel-card'>
                    <Header size='small' className='hotel-card'>
                        <Icon name='hotel' size='mini' className='hotel-card' />{props.hotel.name}
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
                <a href={props.hotel.link} target='_blank' rel="noopener noreferrer" className='hotel-card'>
                    <Button className='left-button'>Visit Website</Button>
                </a>
                {inquiryOrEmail()}
            </Card.Content>
        </Card>
    )
};

export default Hotel;