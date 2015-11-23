import React from 'react';
import ReactDOM  from 'react-dom';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

import ProgressLabel from '../../node_modules/react-progress-label/dist/progress-label';
import Player from './Player';

@autobind
class TourStop extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let progress = 0;
        let textStyle = {
            'fill': '#000',
            'textAnchor': 'middle'
        };
        return (
            <li className="tour-stop-wrap" ref="tourID">

                    <figure className="stop-figure">
                        <img src={ this.props.stopDetails.image } alt="tour-image" className="stop-thumbnail" />
                    </figure>
                    <div className="stop-text-wrapper">
                        <span className="stop-name">{ this.props.stopDetails.name }</span>
                    </div>
                    <div className="progress-bar-wrapper">
                        <ProgressLabel
                            progress={progress}
                            startDegree={0}
                            progressWidth={5}
                            trackWidth={4}
                            cornersWidth={0}
                            size={50}
                            fillColor="transparent"
                            trackColor="hsla(206, 100%, 15%, 1)"
                            progressColor="hsla(82, 0%, 93%, 1)">

                            <text x="200" y="200" style={textStyle}>
                            </text>
                        </ProgressLabel>
                        <Player
                            stopAll={this.props.stopAll}
                            ptag={this.props.ptag}
                            stopDetails={this.props.stopDetails}
                        />
                    </div>
            </li>
        )
    }
}

export default TourStop;
