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

  // Needs to become a find and update or create by NAME list
  // Check if 
  onSubmit = (event, data) => {
    console.log(this.state);
    const options = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    // fetch("http://127.0.0.1:5000/rsvp", options)
    fetch("https://zhang-dana-api.herokuapp.com/rsvp", options)
      .then(resp => this.responseHandler(resp.status))
  };

  responseHandler = (status) => {
    if (status === 400) {
      alert("Your name or email address is invalid. Please try again!")
      return
    }
    if (status === 500) {
      alert("Internal server error (i.e., not your fault!) -- please try again!")
      return
    }
    alert("Your response has been successfully recorded.")
  };

  render() {
    return(
      <Container className='rsvp'>
        <br /><br />
        <Header size='large'>RSVP</Header>
        <p>Please use this form once per guest.<br /><u>If you are updating your RSVP, please ensure that you use the same email address as used in your initial RSVP, as your email address is used as your unique identifier and for wedding-related updates.</u><br />If you have any trouble at all, please do not hesitate to <a href="mailto:william.b.dana@gmail.com">contact Will</a> for assistance.</p>
        <Form id='rsvp' className='rsvp-form'>
          <Form.Input label='Name' type='name' placeholder='Name' onChange={this.onChange} />
          <Form.Input label='Email' type='email' placeholder='Email Address' onChange={this.onChange} />
          <Form.Checkbox label='I plan to attend the Rehearsal Dinner -- TO COME' type='checkbox' name='rehearsal' onChange={this.onCheckboxClick} disabled />
          <Form.Checkbox label='I plan to attend the Wedding Ceremony and Reception' type='checkbox' name='wedding' onChange={this.onCheckboxClick} />
          <Form.Checkbox label='I plan to attend the Sunday Brunch' type='checkbox' name='brunch' onChange={this.onCheckboxClick} />
        </Form>
        <br />
        <Button onClick={this.onSubmit} size='huge' color='red'>RSVP (or Update RSVP)</Button>
      </Container>
    )
  }
};

export default Rsvp;
