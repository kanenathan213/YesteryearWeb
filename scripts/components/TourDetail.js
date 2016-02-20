import React from 'react';

import { Link } from 'react-router';
import StopsList from './StopsList';

class TourDetail extends React.Component {

  render() {
      let details = this.props.details;
      if (details) {
          return (
              <div className="tour-detail-wrap">
                  <div className="tour-detail-nav">
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
                          <div className="tour-detail-price-wrap">
                              <div className="detail-price">
                                  ${ details.price }
                              </div>
                          </div>
                      </section>
                      <StopsList details={details}/>
                  </div>
              </div>
          )
      }
      else {
        return null;
      }
  }
}

export default TourDetail;
