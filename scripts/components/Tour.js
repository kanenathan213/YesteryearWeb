import React from 'react';
import { Link, History } from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import TourDetail from './TourDetail';
import h from '../helpers';

@autobind
class Tour extends React.Component {

    render() {
        return (
            <li>
                <div className="tour-wrap" ref="tourID">
                    <figure><img src={ this.props.details.image } alt="tour-image" className="tour-thumbnail" /></figure>
                    <div className="tour-overlay"></div>
                    <span className="tour-name">{ this.props.details.name }</span>
                    <span className="tour-stops">{ this.props.details.totalTime } min / { this.props.details.numberOfStops } stops </span>
                </div>
            </li>
        )
    }
}

reactMixin.onClass(Tour, History);

export default Tour;
