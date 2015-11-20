import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import { Link } from 'react-router';

@autobind
class Tour extends React.Component {

    goToTour(event) {
      event.preventDefault();
      // get the data from the input
      var tourID = h.slugify(this.props.details.name);
      this.history.pushState(null, '/tours/' + tourID);
    }

    render() {
        return (
            <li>
                <div className="tour-wrap" ref="tourID" onClick={this.goToTour}>
                    <figure><img src={ this.props.details.image } alt="tour-image" className="tour-thumbnail" /></figure>
                    <div className="tour-overlay"></div>
                    <span className="tour-name">{ this.props.details.name }</span>
                    <span className="tour-price">${ this.props.details.price }</span>
                    <span className="tour-stops">{ this.props.details.totalTime } min / { this.props.details.numberOfStops } stops </span>
                </div>
            </li>
        )
    }
}

reactMixin.onClass(Tour, History);

export default Tour;

//<Link to={ "tour/" + this.props.details.tourID }>
// </Link>
