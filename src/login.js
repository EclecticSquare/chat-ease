import React, { Component } from 'react';
import Image from './images/avatar.png'
import Menu from './menu.js'
import './login.css';
import Google from './googleLogin'

// import GoogleSignIn from "react-google-signin";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: true
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    onSignIn(userProfile, accessToken) {
      console.log(userProfile)
  }
  
    signOut() {
      this.googleAuth.signOut();
  }
  
    render() {
      return (
        <div>
          <Button className='loginButton'  outline color="secondary" size='lg' onClick={this.toggle}>{this.props.buttonLabel}Login or Create An Account</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Login or Create An Account</ModalHeader>
            <ModalBody>
                <img src={Image} alt='avatars'/>
                <br/>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input type="email" name="email" id="exampleName" placeholder="Username" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="*********" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <Input type="password" name="password" id="exampleEmail" placeholder="TalkToMe@ChatEase.com" />
                  </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Google/>
              <Button color="secondary cancel" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          <Menu/>
        </div>
      );
    }
  }
  
  export default Login;