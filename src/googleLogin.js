import GoogleSignIn from 'react-google-signin';
import React, { Component } from 'react';


class Google extends Component { 
    
    
        onSignIn(userProfile, accessToken) {
            console.log(userProfile)
        }
        
        signOut() {
            this.googleAuth.signOut();
        }
    
        render() {
            return (
                <div>
                    <GoogleSignIn clientId='247487919544-lhq3c050e9uknrjcbm6532kh9m4v32kv.apps.googleusercontent.com'
                            ref={g => this.googleAuth = g}
                            onSuccess={this.onSignIn.bind(this)}
                    />
                    
                    <button onClick={this.signOut.bind(this)}> Sign Out </button>  
                </div>
            );    
        }
 
    }

    export default Google;