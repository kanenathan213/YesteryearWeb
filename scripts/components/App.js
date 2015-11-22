/*
  App
*/

import React from 'react';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import ToursList from './ToursList';
import TourActive from './TourActive';

// Firebase
import Rebase  from 're-base';
var base = Rebase.createClass('https://hey-day-tours.firebaseio.com/');

@autobind
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      userData : {},
      tours : {}
    };
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

  componentDidMount() {
      this.setState({
          tours : require('../sample-tours')
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
                tours: this.state.tours
              }
            )
          );
      }
  }

  render() {
    return (
      <div className="heyday">
          <div className="background-image"></div>
          <div className="background-overlay"></div>
          {this.content()}
      </div>
    )
  }
};

reactMixin.onClass(App, History);

export default App;
