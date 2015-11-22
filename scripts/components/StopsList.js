import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';

import TourStop from './TourStop';

@autobind
class StopsList extends React.Component {

  renderTourStop(key) {
      let tourSlug = h.slugify(this.props.tours[key].name);
      return (
          <Link key={key} to={`/tours/${key}/play`}>
              <TourStop key={key} index={key} details={this.props.tours[key]}/>
          </Link>
      )
  }

  render() {
      return (
          <div className="list-of-stops-wrap">
              <ul className="list-of-stops">
                  {/* Object.keys(this.props.tours).map(this.renderTourStop) */ }
              </ul>
              <Link to={`/tours/`}>
                  <button className="tour-detail-cta">
                    $5
                    <span className="cta-label">Buy</span>
                  </button>
              </Link>
          </div>
      )
  }
}

export default StopsList;
