import React from 'react';

class Tour extends React.Component {
    render() {
        return (
            <li>
                { this.props.details.name }
                <img src={ this.props.details.image } alt="tour-image" className="tour-thumbnail" />
            </li>
        )
    }
}

export default Tour;
