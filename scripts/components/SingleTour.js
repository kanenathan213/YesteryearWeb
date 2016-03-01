import React from 'react';

class SingleTour extends React.Component {

  render() {
          return (
              <div className="single-tour-wrap">
                  <h2 className="get-tour-title">Get the Angkor Wat tour</h2>
                  <div className="get-tour-description">
                      <ul>
                          <li>30 minute history tour in English</li>
                          <li>Go at your own pace</li>
                          <li>Totally free</li>
                      </ul>
                  </div>
                  <a href="https://s3-us-west-2.amazonaws.com/yesteryear-images/colusseum.jpg" className="get-tour-button" download>
                      <span className="ion-arrow-down-a"></span> Download
                  </a>
              </div>
          )
      }
  }

export default SingleTour;
