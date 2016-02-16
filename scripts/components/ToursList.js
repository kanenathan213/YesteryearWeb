import React from 'react';
import { Link } from 'react-router';
import h from '../helpers';

import Tour from './Tour';

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
                  Hi
              </ul>
          </div>
      )
  }
}

export default ToursList;
