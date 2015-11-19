/*
  App
*/

import React from 'react';

import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

//import TourList from './TourList';
import Tour from './Tour';

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

  componentDidMount() {
      this.setState({
          tours : require('../sample-tours')
      });
  }

  componentWillUpdate(nextProps, nextState) {

  }

  renderTour(key) {
      return <Tour key={key} index={key} details={this.state.tours[key]} />
  }

  render() {
    return (
      <div className="heyday">
          <ul className="list-of-tours">
              { Object.keys(this.state.tours).map(this.renderTour) }
          </ul>
      </div>
    )
  }

};

export default App;
