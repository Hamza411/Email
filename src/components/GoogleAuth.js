import axios from 'axios';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleAuth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            email: null
        }
    }

    responseGoogle(response) {
        console.log("response", response);
        this.setState({
            userId: response.profileObj.googleId,
            email: response.profileObj.email
        })

        // const userId = response.profileObj.googleId;
        // const email = response.profileObj.email
        console.log(this.state.userId);
        console.log(this.state.email)
    }

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="1075903194307-lgglf5n8qsk3lfhr2j4k4512k60scmh7.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={() => this.responseGoogle()}
                    onFailure={() => this.responseGoogle()}
                    cookiePolicy={'single_host_origin'}
                    scope="https://www.googleapis.com/auth/gmail.labels"
                    key="AIzaSyDqTkgLrbg4aJy9bPhT2iL5ETNJ43y6CB4"
                />
            </div>
        )
    }
}

export default GoogleAuth