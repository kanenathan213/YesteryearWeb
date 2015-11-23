import React from 'react';
import ReactDOM  from 'react-dom';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import Player from './Player';

@autobind
class TourStop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seeking: false,
            playing: false,
            currentTime: 24,
            progressVal: 8,
            duration: 300
        };
    }

    render() {
        return (
            <li className="tour-stop-wrap" ref="tourID">
                <figure className="stop-figure">
                    <img src={ this.props.stopDetails.image } alt="tour-image" className="stop-thumbnail" />
                </figure>
                <div className="stop-text-wrapper">
                    <span className="stop-name">{ this.props.stopDetails.name }</span>
                </div>
                <Player
                    stopAll={this.props.stopAll}
                    ptag={this.props.ptag}
                    stopDetails={this.props.stopDetails}
                />
            </li>
        )
    }
}

export default TourStop;
