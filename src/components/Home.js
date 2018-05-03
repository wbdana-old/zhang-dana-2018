import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import engagement from '../assets/engagement-photo.jpeg';

const Home = () => {

  function dayCounter() {
    var wedding = new Date("October 06, 2018 16:00:00");
    var now = new Date();
    console.log(wedding);
    console.log(now);
    return(Math.round((wedding - now) / (1000 * 60 * 60 * 24)).toString());
  };

  return(
    <div className='homeDiv'>      
      <Container className='home'>
        <br />
        <Header size='huge'>Linda & Will</Header>
        <Header size='medium'>October 6, 2018 | Roxbury, NY</Header>
        <Header size='medium'>{dayCounter()} days to go!</Header>
      </Container>
      <Image id='homeImage' src={engagement} size='massive' centered />      
    </div>
  )
};

export default Home;
