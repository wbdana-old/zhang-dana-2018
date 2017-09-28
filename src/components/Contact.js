import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Contact extends React.Component {


  render() {
    return(
      <Container className='contact'>
        <Header size='large'>Contact</Header>
        <p>Please do not hesitate to reach out to us with any questions or concerns regarding preparations for or your attendance at our special day.</p>
        <p>General Email: ____</p>
        <p>Maid of Honor (Steph Shapiro): ____</p>
      </Container>
    )
  }
}

export default Contact
