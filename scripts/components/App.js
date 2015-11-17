/*
  App
*/

import React from 'react';

import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

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

      </div>
    )
  }

};

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

export default App;
