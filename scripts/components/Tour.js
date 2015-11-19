import React from 'react';

class Tour extends React.Component {
    render() {
        return (
            <li>
                <div className="tour-wrap">
                    <img src={ this.props.details.image } alt="tour-image" className="tour-thumbnail" />
                    <div className="tour-overlay"></div>
                    <span className="tour-name">{ this.props.details.name }</span>
                </div>

            </li>
        )
    }
}

export default Tour;
