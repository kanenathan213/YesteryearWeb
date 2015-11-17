/*
  InitialView
*/

import React from 'react';

import autobind from 'autobind-decorator';

@autobind
class InitialView extends React.Component {
    render() {
      return (
        <div className="initial-view-wrap">
            <h1>You'll never go to a museum without it</h1>
        </div>
      )
    }
}

export default InitialView;
