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
            <Link to="/connect/" className="account">
                <img src={this.props.userData.profpic} className="profpic"/>
            </Link>
        )
    }

    render() {
        return (
            <header className="global-header-wrap">
                <nav className="global-header">
                    <Link to="/tours/" className="brand">
                        <img src="../../css/images/white-logo.svg" className="logo"/>
                        <div className="logo-text">YESTERYEAR</div>
                    </Link>
                    { (!this.props.userData || !this.props.userData.uid) ? this.renderEnter() : this.renderAccount() }
                </nav>
            </header>
        )
    }
}

export default Header;
