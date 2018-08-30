import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

export default class RsvpList extends React.Component {
  state = {
    rsvps: [],
  }

  componentDidMount() {
    const url = 'https://zhang-dana-api.herokuapp.com/rsvps';
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(url, options)
      .then(resp => { return resp.json() })
      .then(json => {
        this.setState({
          rsvps: [...json.result],
        });
      });
  };


  render() {
    let
      rehearsalCount = 0,
      weddingCount = 0,
      brunchCount = 0
    ;

    for (let i = 0; i < this.state.rsvps.length; i++) {
      if (this.state.rsvps[i].rehearsal === true) {
        rehearsalCount++;
      }

      if (this.state.rsvps[i].wedding === true) {
        weddingCount++;
      }

      if (this.state.rsvps[i].brunch === true) {
        brunchCount++;
      }
    }

    return (
      <Container className='rsvp-list'>
        <Header>
          Counts (does not include duplicate entries!)
        </Header>
        <strong>
          <p>Rehearsal Dinner: {rehearsalCount}</p>
          <p>Wedding: {weddingCount}</p>
          <p>Brunch: {brunchCount}</p>
        </strong>
        <List>
          {
            this.state.rsvps
              .sort((a, b) => {
                return a.id > b.id
              })
              .map(guest => {
                return (
                  <List.Item>
                    <List.Icon name='user circle' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>
                        {String(guest.name)}, ID: {String(guest.id)}
                      </List.Header>
                      <List.List>
                        <List.Item>
                          Email: {String(guest.email)}
                        </List.Item>
                        <List.Item>
                          Rehearsal: {String(guest.rehearsal)}
                        </List.Item>
                        <List.Item>
                          Wedding: {String(guest.wedding)}
                        </List.Item>
                        <List.Item>
                          Brunch: {String(guest.brunch)}
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List.Item>
                );
              })
          }
        </List>
      </Container>
    );
  }
}