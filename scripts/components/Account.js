import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';

import Firebase from 'firebase';

@autobind
class Account extends React.Component {

  renderLogin() {
      return (
          <section className="login-section">
              <h3>Sign in or create an account</h3>

              <button className="facebook-login" onClick={this.props.authenticate.bind(this, 'facebook')}>
                  <i className="ion-social-facebook login-icon"></i>
                  <span className="login-label">Connect</span>
              </button>
          </section>
      )
  }

  renderLogout() {
      return (
          <div className="signed-in-wrap">
              <span>{this.props.userData.firstName} {this.props.userData.lastName}</span>
              <span>{this.props.userData.email}</span>
              <img src={this.props.userData.profpic} />
              <button className="logout" onClick={this.props.logout}>Logout</button>
              <button className="delete-account" onClick={this.props.deleteAccount}>Delete account</button>
          </div>
      )
  }

  renderPaymentsService() {
      return (
          <button className="stripe-connect">Pay with Stripe</button>
      )
  }

  componentDidMount() {

  }

  render() {
      return (
          <div className="account-wrap">
              <section className="auth-section">
                    { (!this.props.userData || !this.props.userData.uid) ? this.renderLogin() : this.renderLogout() }
              </section>
          </div>
      )
  }
}

export default Account;
