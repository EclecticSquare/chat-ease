
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class Google extends Component { 
    
//    const responseGoogle = (response) => {
//         console.log(response);
//       }
        
    
        render() {
            return (
                <div>
                    <GoogleLogin
                        clientId="247487919544-lhq3c050e9uknrjcbm6532kh9m4v32kv.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        // onSuccess={responseGoogle}
                        // onFailure={responseGoogle}
                    />
                    
                    {/* <button onClick={this.signOut.bind(this)}> Sign Out </button>   */}
                </div>
            );    
        }
 
    }

    export default Google;