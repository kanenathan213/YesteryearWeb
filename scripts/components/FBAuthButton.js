import React from 'react';

class FBAuthButton extends React.Component {

    render() {
        return (
            <button className="facebook-login">
                <i className="ion-social-facebook login-icon"></i>
                <span className="login-label">Get Started</span>
            </button>
        )
    }

}

export default FBAuthButton;
