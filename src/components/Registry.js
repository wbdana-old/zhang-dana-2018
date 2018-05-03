import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Registry extends React.Component {


  render() {
    return(
      <Container className='registry'>
        <br /><br />

        <Header size='large'>Registry</Header>
        
        <p>Gifts are not necessary, but if you feel so inclined, we are registered at <a href='https://www.zola.com/registry/lindawill' target='_blank' rel="noopener noreferrer">Zola</a>.</p>
      </Container>
    )
  }
}

export default Registry
