
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";


class Google extends Component { 
    
    responseGoogle = (response) => {
        console.log(response);
        this.props.history.push('/chat')
      }

      failedResponseGoogle = (response) => {
        console.log(response);
        alert('Login failed. Please try again.')
      }
    
        render() {

            
            return (
               
                <div>
                    <GoogleLogin
                        clientId="247487919544-lhq3c050e9uknrjcbm6532kh9m4v32kv.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.failedResponseGoogle}
                    />
                    
                    {/* <button onClick={this.signOut.bind(this)}> Sign Out </button>   */}
                </div>
            );    
        }
 
    }

    export default withRouter(Google);