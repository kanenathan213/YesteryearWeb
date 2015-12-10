import React from 'react';
import { Link } from 'react-router';
import autobind from 'autobind-decorator';

import LogoLockup from './LogoLockup';

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
            <Link to="/" className="account"> {/* switch to= back to /tours after launch */}
                <img src={this.props.userData.profpic} className="profpic"/>
            </Link>
        )
    }

    render() {
        return (
            <header className="global-header-wrap">
                <nav className="global-header">
                    <Link to="/tours/" className="brand">
                        <LogoLockup />
                    </Link>
                    { /*(!this.props.userData || !this.props.userData.uid) ? this.renderEnter() : this.renderAccount() */}
                </nav>
            </header>
        )
    }
}

export default Header;
