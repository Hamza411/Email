import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class App extends Component {

  responseGoogle(response){
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="149249245910-fho3p7j2ih2j0nc3a6tiahutt8ss5ae2.apps.googleusercontent.com"
        buttonText="Login With Gmail"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default App