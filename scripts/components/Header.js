import React from 'react';
import { Link } from 'react-router';
import autobind from 'autobind-decorator';

class Header extends React.Component {

    renderEnter() {
        return (
            <Link to="/connect/" className="enter">
                Sign in / sign up
            </Link>
        )
    }

    renderAccount() {
        return (
            <Link to="/account/" className="account">
                { this.props.userData.email }
                <img src={this.props.userData.profpic} />
            </Link>
        )
    }

    render() {
        return (
            <nav className="global-header">
                <Link to="/tours/" className="brand">
                    YESTERYEAR
                </Link>
                { (!this.props.userData || !this.props.userData.uid) ? this.renderEnter() : this.renderAccount() }
            </nav>
        )
    }
}

export default Header;
