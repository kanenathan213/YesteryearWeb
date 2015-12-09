import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';
import h from '../helpers';

import Tour from './Tour';

@autobind
class ToursList extends React.Component {

  renderTour(key) {
      return (
          <Link key={key} to={`/tours/${key}`}>
              <Tour key={key} index={key} details={this.props.tours[key]}/>
          </Link>
      )
  }

  render() {
      return (
          <div className="list-of-tours-wrap">
              <ul className="list-of-tours">
                  { Object.keys(this.props.tours).map(this.renderTour) }
              </ul>
          </div>
      )
  }
}

export default ToursList;
