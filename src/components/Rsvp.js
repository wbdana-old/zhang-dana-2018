import React from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import Message from './Message.js';

class Rsvp extends React.Component {
  state = {
    rsvp: {
      name: "",
      email: "",
      rehearsal: "False",
      wedding: "False",
      brunch: "False"
    },
    message: {
      showMessage: false,
      messageHeader: "",
      messageContent: "",
    }
  };

  onChange = (event, data) => {
    this.setState({
      ...this.state,
      rsvp: {
        ...this.state.rsvp,
        [data.type]: event.target.value
      }
    })
  };

  onCheckboxClick = (event, data) => {
    this.state.rsvp[data.name] === "False"
    ? this.setState({
        ...this.state,
        rsvp: {
          ...this.state.rsvp,
          [data.name]: "True"
        }
      })
    : this.setState({
        ...this.state,
        rsvp: {
          ...this.state.rsvp,
          [data.name]: "False"
        }
      });
  };

  validateEmail = (email) => {
    // eslint-disable-next-line
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onSubmit = (event, data) => {
    if (this.validateEmail(this.state.rsvp.email)) {
      const options = {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(this.state.rsvp)
      }
      // fetch("http://127.0.0.1:5000/rsvp", options)
      fetch("https://zhang-dana-api.herokuapp.com/rsvp", options)
      .then(resp => this.responseHandler(resp.status));
    } else {
      this.setState({
        ...this.state,
        message: {
          showMessage: true,
          messageHeader: "Invalid email address",
          messageContent: "You have entered an invalid email address. Please try again!"
        }
      })
    }
  };

  responseHandler = (status) => {
    if (status === 400) {
      this.setState({
        ...this.state,
        message: {
          showMessage: true,
          messageHeader: "Invalid name or email",
          messageContent: "Your name or email address is invalid. Please try again!"
        }
      })
      return
    }
    if (status === 500) {
      this.setState({
        ...this.state,
        message: {
          showMessage: true,
          messageHeader: "Internal server error",
          messageContent: "Internal server error (i.e., not your fault!) -- please try again!"
        }
      })
      return
    }
    if (status === 204) {
      this.setState({
        rsvp: {
          name: "",
          email: "",
          rehearsal: "False",
          wedding: "False",
          brunch: "False"
        },
        message: {
          showMessage: true,
          messageHeader: "Response Updated",
          messageContent: "You have successfully updated the response associated with this email address!"
        }
      })
      return
    }
    this.setState({
      rsvp: {
        name: "",
        email: "",
        rehearsal: "False",
        wedding: "False",
        brunch: "False"
      },
      message: {
        showMessage: true,
        messageHeader: "Success",
        messageContent: "Your response has been successfully recorded. We hope to see you there!"
      }
    })
  };

  dismissMessage = () => {
    this.setState({
      ...this.state,
      message: {
        showMessage: false,
        messageHeader: "",
        messageContent: "",
      }
    })
  }

  render() {
    return(
      <Container className='rsvp'>
        {this.state.message.showMessage && <Message dismissMessage={this.dismissMessage} message={this.state.message} />}
        <br /><br />
        <Header size='huge'>RSVP</Header>
        <p><strong>Please use this form once per guest, with a <i>unique email</i> for each guest.<br />If you are updating your RSVP, please ensure that you use the same email address that you used in your initial RSVP.</strong><br /><br />If you have any trouble at all, please do not hesitate to <a href="mailto:william.b.dana@gmail.com">contact Will</a> for assistance.</p>
        <Form id='rsvp' className='rsvp-form'>
          <Form.Input label='Name' type='name' placeholder='Name' onChange={this.onChange} value={this.state.rsvp.name} />
          <Form.Input label='Email' type='email' placeholder='Email Address' onChange={this.onChange} value={this.state.rsvp.email} />
          <Form.Checkbox label='I plan to attend the Rehearsal Dinner -- TO COME' type='checkbox' name='rehearsal' onChange={this.onCheckboxClick} disabled />
          <Form.Checkbox label='I plan to attend the Wedding Ceremony and Reception' type='checkbox' name='wedding' onChange={this.onCheckboxClick} />
          <Form.Checkbox label='I plan to attend the Sunday Brunch' type='checkbox' name='brunch' onChange={this.onCheckboxClick} />
        </Form>
        <br />
        <Button onClick={this.onSubmit} size='large' color='black'>RSVP</Button>
      </Container>
    )
  }
};

export default Rsvp;
