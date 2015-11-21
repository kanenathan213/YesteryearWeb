import React from 'react';
import autobind from 'autobind-decorator';

import { Link } from 'react-router';

@autobind
class TourDetail extends React.Component {

  componentDidMount() {
  }

  render() {
      let details = this.props.details;
      if (details) {
          return (
              <div className="tour-detail-wrap">
                  <div className="tour-detail">
                      <section className="tour-detail-top-wrap">
                          <figure><img src={ details.image } alt="tour-image" className="tour-detail-thumbnail" /></figure>
                          <div className="tour-detail-overlay"></div>
                          <div className="tour-detail-title-wrap">
                              <div className="tour-detail-name">{ details.name }</div>
                              <div className="tour-detail-stops">{ details.totalTime } min / { details.numberOfStops } stops</div>
                          </div>

                      </section>
                      <section className="cta-section">
                        <Link to={`/play-tour/${this.props.details.tourID}`}>
                            <button className="tour-detail-cta">
                              ${ details.price }
                              <span className="cta-label">Buy</span>
                            </button>
                        </Link>
                      </section>
                      <section className="tour-detail-desc">
                          <div>{ details.description }</div>
                      </section>
                  </div>
                  <div className="return-wrap">
                      <Link to={"/tours"} className="tour-detail-return">
                          <i className="ion-ios-close-empty"></i>
                      </Link>
                  </div>
              </div>

          )
      }
      else {
        return <p className="dummy"></p>
      }
  }
}

export default TourDetail;
