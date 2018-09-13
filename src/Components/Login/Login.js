import React from 'react';
import './Login.css'
class Login extends React.Component {

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri${url}&
        response_type=code`
    }

    render(){
        return(
            <div>
                <button className="buttonTag"
                    onClick={this.login}>Account
                </button>
            </div>
        )
    }
}

export default Login