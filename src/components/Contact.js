import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class Contact extends React.Component {


  render() {
    return(
      <Container className='contact'>
        <br /><br />
        <Header size='large'>Contact</Header>
        <p>Please do not hesitate to reach out to us with any questions or concerns regarding preparations for or your attendance at our special day.</p>
        <p>General Email: <a href="mailto:william.b.dana@gmail.com">william.b.dana@gmail.com</a> / <a href="mailto:lzhang917@gmail.com">lzhang917@gmail.com</a></p>
        <p>Maid of Honor (Steph Shapiro): <a href="mailto:stephanie.shapiro89@gmail">stephanie.shapiro89@gmail</a></p>
      </Container>
    )
  }
};

export default Contact;
