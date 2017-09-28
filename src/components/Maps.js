import React from 'react'
import { Container } from 'semantic-ui-react'

class Maps extends React.Component {


  render() {
    return(
      <Container className='maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.5916719774036!2d-74.58161568454598!3d42.28723897919186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc42b188f99a5d%3A0x8278386040ec7b6f!2s1400+Shepard+Hill+Rd%2C+Roxbury%2C+NY+12474!5e0!3m2!1sen!2sus!4v1506632668971" width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen />
      </Container>
    )
  }
}

export default Maps
