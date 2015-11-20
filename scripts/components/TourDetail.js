import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class TourDetail extends React.Component {

  componentDidMount() {
      var id = this.props.params.tourID
  }

  render() {
      return (
          <p>this will be a component
              { this.props.params.tourID }
          </p>

      )
  }
}

export default TourDetail;
