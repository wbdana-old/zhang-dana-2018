import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Footer = () => {
    return(
        <Container className='footer'>
            <Header size='tiny'>&copy; William Dana 2018 | <a href="https://github.com/wbdana/zhang-dana-2018" target='_blank' rel="noopener noreferrer">Source</a></Header>
        </Container>
    )
};

export default Footer;