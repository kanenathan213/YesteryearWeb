import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';
import h from '../helpers';

import Tour from './Tour';

@autobind
class ToursList extends React.Component {

  renderTour(key) {
      let tourSlug = h.slugify(this.props.tours[key].name);
      return (
          <Link key={key} to={`/tours/${key}`}>
              <Tour key={key} index={key} details={this.props.tours[key]}/>
          </Link>
      )
  }

  render() {
      return (
          <div className="list-of-tours-wrap">
              <div className="background-image"></div>
              <div className="background-overlay"></div>
              <ul className="list-of-tours">
                  { Object.keys(this.props.tours).map(this.renderTour) }
              </ul>
              <div className="detail">
                  {this.props.children && React.cloneElement(this.props.children, {
                      details : this.props.tours[this.props.params.tourID]
                  })}
              </div>
          </div>
      )
  }
}

export default ToursList;