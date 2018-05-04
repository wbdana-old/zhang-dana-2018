import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class Schedule extends React.Component {


  render() {
    return(
      <Container className='schedule'>
        <br /><br />

        <Header size='huge'>Schedule</Header>
        <Header size='large'>Ceremony and Reception</Header>
        <p><strong>Saturday, October 6, 2018, 2:00 p.m.</strong></p>
        <p><strong>1400 Shepard Hill Road, Roxbury, NY 12474</strong></p>
        <p><i>Attire: Cocktail/Semi-Formal</i></p>
        <p>Dinner will be family style. Please let us know if you have any dietary restrictions that we need to be aware of!</p>
        <br />
        <Header size='large'>Sunday Brunch</Header>
        <p><strong>Sunday, October 7, 2018, 10:00 a.m.</strong></p>
        <p><strong>1400 Shepard Hill Road, Roxbury, NY 12474</strong></p>        
        
      </Container>
    )
  }
};

export default Schedule;
