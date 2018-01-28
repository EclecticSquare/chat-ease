import React, { Component } from 'react';
import Bootstrap, { DropdownButton } from 'react-bootstrap';
import Image from './avatar.png'
import Cats from './cats.js'
import Chuck from './chuck.js'
import News from './news.js'
import Entertainment from './entertainment.js'
import './login.css';
import Background from './candlesSparklers.jpg';
import {Route, Link} from 'react-router-dom';
import Google from './googleLogin'

// import GoogleSignIn from "react-google-signin";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
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
          <Button className='loginButton'  outline color="secondary" size='lg' onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Login</ModalHeader>
            <ModalBody>
                <img src={Image}/>
                <br/>
            </ModalBody>
            <ModalFooter>
              <Google/>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default Login;