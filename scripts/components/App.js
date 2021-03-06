import React from 'react';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';
import { History } from 'react-router';

import Header from './Header';
import ToursList from './ToursList';

import Firebase from 'firebase';
const ref = new Firebase('https://hey-day-tours.firebaseio.com/');

// Firebase
import Rebase  from 're-base';
const base = Rebase.createClass('https://hey-day-tours.firebaseio.com/');

@autobind
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      userData : {},
      tours : {}
    };
  }

  authenticate(provider) {
      ref.authWithOAuthPopup(provider, this.authHandler, {
          scope: "public_profile, email"
      });
  }

  authHandler(err, authData) {
      if(err) {
          return;
      }

      if(authData) {
          this.updateAppUserState(authData);

          let endPoint = 'users/' + this.state.userData.uid;

          base.post(endPoint,{
              data: this.state.userData
          });
      }

      this.props.history.replaceState(null, '/tours/');
      localStorage.setItem('yesteryear-token', authData.token);
  }

  updateAppUserState(data) {
      this.setState({
          userData : {
              uid: data.uid,
              profpic: data.facebook.profileImageURL,
              firstName: data.facebook.cachedUserProfile.first_name,
              lastName: data.facebook.cachedUserProfile.last_name,
              email: data.facebook.email
          }
      });
  }

  tokenedUserHandler(err, authData) {
      if(err) {
          console.log("There was an auth error");
      }

      let endPoint = 'users/' + authData.uid;

      if(authData) {
          base.fetch(endPoint, {
              context: this,
              then(data) {
                  this.setState({
                      userData : {
                          uid: data.uid,
                          profpic: data.profpic,
                          firstName: data.first_name,
                          lastName: data.last_name,
                          email: data.email
                      }
                  })
              }
          })
      }
  }

  deleteAccount() {

      let endPoint = 'users/' + this.state.userData.uid;
      base.post(endPoint,{
          data: null
      });
      this.logout();
  }

  logout() {
      ref.unauth();
      localStorage.removeItem('yesteryear-token');
      this.setState({
          userData: null
      })
      this.props.history.replaceState(null, '/');
  }

  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  }

  componentWillMount() {
      var token = localStorage.getItem('yesteryear-token');
      if(token) {
          ref.authWithCustomToken(token, this.tokenedUserHandler);
      }

      let toursEndpoint = 'tours/';
      base.fetch(toursEndpoint, {
          context: this,
          then(data) {
              this.setState({
                  tours : data
                  }
              )}
      });
  }

  content() {
      if (this.props.params.tourID) {
          return (
              <div className="detail">
                  {this.props.children && React.cloneElement(this.props.children, {
                      details : this.state.tours[this.props.params.tourID]
                  })}
              </div>
          )
      }
      else {
          return React.Children.map(this.props.children, child =>
              React.cloneElement(child, {
                tours: this.state.tours,
                authenticate: this.authenticate,
                logout: this.logout,
                deleteAccount: this.deleteAccount,
                userData: this.state.userData
              }
            )
          );
      }
  }

  render() {
    return (
      <div className="heyday">
          <div className="main-content-wrap">
              {this.content()}
          </div>
          <div className="background-image"></div>
          <div className="background-overlay"></div>
          <Header userData={this.state.userData} />
      </div>
    )
  }
};

reactMixin.onClass(App, History);

export default App;
