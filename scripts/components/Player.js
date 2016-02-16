import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import autobind from 'autobind-decorator';

import ProgressLabel from '../../node_modules/react-progress-label/dist/progress-label';

let progressUpdate;

//@autobind
class Track extends Component {

    constructor(props) {
      super(props);
      this.state = {
          elem: null,
          isPlaying : false,
          loadState : "notLoaded",
          progress : 0
      };
      this.playerEvent = {};
    }

    componentDidMount() {
        this.audioTag = ReactDOM.findDOMNode(this.refs.audio);
        this.props.ptag(this.audioTag);

        this.playerEvent.loadStart = () => {
          this.setState({
            loadState: "loading"
          });
        };

        this.playerEvent.loadEnd = () => {
          this.setState({
            loadState: "loaded"
          });
        };

        this.playerEvent.isPlaying = () => {
          this.setState({
            isPlaying: false
          });
          this._progressTracking("stop");
        };
        this._progressTracking("stop");
      }

      componentWillUnmount() {
        this.audioTag.removeEventListener('ended', this.playerEvent.isPlaying);
        this.audioTag.removeEventListener('pause', this.playerEvent.isPlaying);
        this.audioTag.removeEventListener('loadeddata', this.playerEvent.loadEnd);
        this.audioTag.removeEventListener('loadstart', this.playerEvent.loadStart);
        this.audioTag.removeEventListener('suspend', this.playerEvent.loadStart);
      }

      _startLoading() {
          this.playerEvent.loadStart();
          this.audioTag.addEventListener('ended', this.playerEvent.isPlaying);
          this.audioTag.addEventListener('pause', this.playerEvent.isPlaying);
          this.audioTag.addEventListener('loadeddata', this.playerEvent.loadEnd);
          this.audioTag.addEventListener('loadstart', this.playerEvent.loadStart);
          this.audioTag.addEventListener('suspend', this.playerEvent.loadEnd);
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
          if (action === "start") {
              progressUpdate = setInterval(this._updateProgress, 1000);
          }
          else if (action === "stop") {
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
                        size={100}
                        fillColor="transparent"
                        trackColor="hsla(206, 100%, 15%, 1)"
                        progressColor="hsla(82, 0%, 93%, 1)"
                        className="progress-bar">
                    </ProgressLabel>
                    { this.state.loadState === "notLoaded" ?
                        <i className="ion-ios-cloud-download-outline tour-control" onClick={this._startLoading} /> : null
                    }
                    { !this.state.isPlaying && (this.state.loadState === "loaded")  ?
                        <i className="ion-ios-play tour-control" onClick={this._play} /> : null
                    }
                    { this.state.isPlaying ?
                        <i className="ion-pause tour-control" onClick={this._stop} /> : null
                    }
                    { this.state.loadState === "loading" ?
                        <i className="ion-load-c tour-control stop-loading" onClick={this._stop} /> : null
                    }
                </div>
                <audio preload='auto' src={ this.props.stopDetails.audioURL } ref='audio'/>
            </div>
        )
    }
}

export default Track;
