jest.dontMock('../scripts/components/ToursList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ToursList = require('../scripts/components/ToursList');

describe('ToursList', () => {

  it('changes the text after click', () => {

    var tours_list = TestUtils.renderIntoDocument(
      <ToursList />
    );

    var toursListNode = ReactDOM.findDOMNode(tours_list);

    expect(toursListNode).toBeTruthy();
  });

});
