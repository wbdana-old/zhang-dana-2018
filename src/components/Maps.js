import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import map from '../assets/roxbury-map.png';

class Maps extends React.Component {


  render() {
    return(
      <Container className='maps'>
        <br /><br />

        <Header size='huge'>Maps</Header>

        <p>Getting to the Barn can be a little confusing. The address, as it appears on Google, is roughly 1400 Shepard Hill Road, Roxbury, NY 12474. Years ago, my dad -- Bob Dana -- made this excellent map that you should find helpful. As noted in the map, you will NOT have cell service. This map is your last and best hope once you're nearby.</p>

        <Image src={map} centered />

        <p>In conjuction with Google Maps (which should work until somewhere around Kingston), we think you'll be able to find the place okay. Please do not go up Green Road, no matter what your GPS tells you (if it even works). There is a gate at the end of Green Road that will be locked (and we cannot unlock it!).</p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.476842755186!2d-74.58161568454598!3d42.28723897919186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc42b188f99a5d%3A0x8278386040ec7b6f!2s1400+Shepard+Hill+Rd%2C+Roxbury%2C+NY+12474!5e1!3m2!1sen!2sus!4v1525277582712" width="1125" height="1000" frameBorder="0" style={{border:0}} allowFullScreen title="roxbury" />
        
      </Container>
    )
  }
}

export default Maps;