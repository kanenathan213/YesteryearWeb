import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';

import TourStop from './TourStop';

@autobind
class TourActive extends React.Component {

  renderStop(key) {
      let tourSlug = h.slugify(this.props.tours[key].name);
      return (
          <TourStop key={key} index={key} />
      )
  }

  render() {
      return (
          <div className="tour-active-wrap">
              Ima be a TourActive component
          </div>
      )
  }
}

export default TourActive;
