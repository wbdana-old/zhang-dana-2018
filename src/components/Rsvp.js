import React from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';

class Rsvp extends React.Component {
  state = {
    name: "",
    email: "",
    rehearsal: "False",
    wedding: "False",
    brunch: "False"
  };

  onChange = (event, data) => {
    this.setState({
      [data.type]: event.target.value
    })
  };

  onCheckboxClick = (event, data) => {
    this.state[data.name] === "False"
    ? this.setState({
        [data.name]: "True"
      })
    : this.setState({
        [data.name]: "False"
      });
  };

  onSubmit = (event, data) => {
    console.log(this.state);
  }

  render() {
    return(
      <Container className='rsvp'>
        <br /><br />
        <Header size='large'>RSVP</Header>        
        <Form id='rsvp' className='rsvp-form'>
          <Form.Input label='Name' type='name' placeholder='Name' onChange={this.onChange} />
          <Form.Input label='Email' type='email' placeholder='Email Address' onChange={this.onChange} />
          <Form.Checkbox label='I plan to attend the Rehearsal Dinner -- TO COME' type='checkbox' name='rehearsal' onChange={this.onCheckboxClick} disabled />
          <Form.Checkbox label='I plan to attend the Wedding Ceremony and Reception' type='checkbox' name='wedding' onChange={this.onCheckboxClick} />
          <Form.Checkbox label='I plan to attend the Sunday Brunch' type='checkbox' name='brunch' onChange={this.onCheckboxClick} />
        </Form>
        <br />
        <Button onClick={this.onSubmit} size='huge' color='red'>RSVP</Button>
      </Container>
    )
  }
};

export default Rsvp;
