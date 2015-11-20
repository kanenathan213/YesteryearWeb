import React from 'react';

class Tour extends React.Component {
    render() {
        return (
            <li>
                <div className="tour-wrap">
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

export default Tour;
