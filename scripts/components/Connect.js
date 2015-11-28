import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';

import Firebase from 'firebase';

@autobind
class Connect extends React.Component {

  renderLogin() {
      return (
          <section className="login-section">
              <h2>Sign in or sign up</h2>
              <div className="login-button-wrap">
                  <button className="facebook-login" onClick={this.props.authenticate.bind(this, 'facebook')}>
                      <i className="ion-social-facebook login-icon"></i>
                      <span className="login-label">Connect</span>
                  </button>
              </div>
          </section>
      )
  }

  renderLogout() {
      return (
          <div className="signed-in-wrap">
              <h2>Settings</h2>
              <h4>Email</h4>
              <div className="email-field">{this.props.userData.email}</div>
              <div className="logout-wrapper">
                  <button className="logout" onClick={this.props.logout}>Logout</button>
              </div>
              <div className="delete-account" onClick={this.props.deleteAccount}>Delete account</div>
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
          <div className="connect-wrap">
              <section className="auth-section">
                    { (!this.props.userData || !this.props.userData.uid) ? this.renderLogin() : this.renderLogout() }
              </section>
          </div>
      )
  }
}

export default Connect;
