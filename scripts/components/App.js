/*
  App
*/

import React from 'react';

import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

// Firebase
import Rebase  from 're-base';
var base = Rebase.createClass('https://hey-day-tours.firebaseio.com/');

@autobind
class App extends React.Component {

  constructor() {
    super();

  }

  componentDidMount() {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  render() {
    return (
      <div className="heyday">
          <h1>Let's do this</h1>
      </div>
    )
  }

};

export default App;
