import React from 'react';
import autobind from 'autobind-decorator';

import { Link } from 'react-router';
import StopsList from './StopsList';

@autobind
class TourDetail extends React.Component {

  render() {
      let details = this.props.details;
      if (details) {
          return (
              <div className="tour-detail-wrap">
                  <div className="tour-detail-container">
                      <Link to={"/tours"} className="tour-detail-return">
                          <i className="ion-chevron-left"></i><span className="return-label">Tours</span>
                      </Link>
                  </div>
                  <div className="tour-detail">
                      <section className="tour-detail-top-wrap">
                          <figure><img src={ details.image } alt="tour-image" className="tour-detail-thumbnail" /></figure>
                          <div className="tour-detail-overlay"></div>
                          <div className="tour-detail-title-wrap">
                              <div className="tour-detail-name">{ details.name }</div>
                              <div className="tour-detail-stops">{ details.totalTime } minutes</div>
                          </div>
                      </section>
                      <StopsList />
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
