import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import ProgressLabel from '../../node_modules/react-progress-label/dist/progress-label';

@autobind
class Track extends Component {

    constructor(props) {
      super(props);
      this.state = {
          elem: null,
          isPlaying : false,
          isLoading : false,
          progress : 0
      };
      this.playerEvent = {};
    }

    componentDidMount() {
        this.audioTag = ReactDOM.findDOMNode(this.refs.audio);
        this.props.ptag(this.audioTag);

        this.playerEvent.loadStart = () => {
          this.setState({
            isLoading: true
          });
        };

        this.playerEvent.loadEnd = () => {
          this.setState({
            isLoading: false
          });
        };

        this.playerEvent.isPlaying = () => {
          this.setState({
            isPlaying: false
          });
        };

        this.audioTag.addEventListener('ended', this.playerEvent.isPlaying);
        this.audioTag.addEventListener('pause', this.playerEvent.isPlaying);
        this.audioTag.addEventListener('loadeddata', this.playerEvent.loadEnd);
        this.audioTag.addEventListener('loadstart', this.playerEvent.loadStart);
        this.audioTag.addEventListener('suspend', this.playerEvent.loadEnd);
      }

      componentWillUnmount() {
        this.audioTag.removeEventListener('ended', this.playerEvent.isPlaying);
        this.audioTag.removeEventListener('pause', this.playerEvent.isPlaying);
        this.audioTag.removeEventListener('loadeddata', this.playerEvent.loadEnd);
        this.audioTag.removeEventListener('loadstart', this.playerEvent.loadStart);
        this.audioTag.removeEventListener('suspend', this.playerEvent.loadStart);
      }

      _play() {
        this.props.stopAll.apply();
        this.audioTag.play();
        this.setState({
          isPlaying: true
        });
        this._progressTracking("start");
      }

      _stop() {
        this.audioTag.pause();
        this.setState({
          isPlaying: false
        });
        this._progressTracking("stop");
      }

      _progressTracking(action) {
          let progressUpdate;
          if (action === "start") {
              progressUpdate = setInterval(this._updateProgress, 1000);
          }
          else if ((action === "stop") && progressUpdate !== undefined) {
              clearInterval(progressUpdate);
          }
      }

      _updateProgress() {
          let duration = this.audioTag.duration;
          let currentTime = this.audioTag.currentTime;
          let newProgress = (currentTime / duration ) * 100;
          this.setState({
            progress: newProgress
          });
      }

      render() {
        return (
            <div className="player">
                <div className="progress-bar-wrapper">
                    <ProgressLabel
                        progress={this.state.progress}
                        startDegree={0}
                        progressWidth={5}
                        trackWidth={4}
                        cornersWidth={0}
                        size={50}
                        fillColor="transparent"
                        trackColor="hsla(206, 100%, 15%, 1)"
                        progressColor="hsla(82, 0%, 93%, 1)">
                    </ProgressLabel>
                </div>
                { !this.state.isPlaying && !this.state.isLoading ?
                    <i className="ion-ios-play tour-control" onClick={this._play} /> : null
                }
                { this.state.isPlaying && !this.state.isLoading ?
                    <i className="ion-pause tour-control" onClick={this._stop} /> : null
                }
                { this.state.isLoading ?
                    <i className="ion-load-c tour-control" onClick={this._stop} /> : null
                }
                <audio src={ this.props.stopDetails.audioURL } ref='audio'/>
            </div>
        )
    }
}

export default Track;
