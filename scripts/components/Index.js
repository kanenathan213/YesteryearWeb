/*
  InitialView
*/

import React from 'react';
import { Link } from 'react-router';

import autobind from 'autobind-decorator';
import ViewTourListButton from './ViewTourListButton'

@autobind
class Index extends React.Component {

    render() {
      return (
        <div className="initial-view-wrap">
            <section className="intro-header">
                <div className="hero-img-overlay"></div>
                <div className="intro-header-content-wrap">
                    <div className="intro-header-content">
                        <div className="logo-wrap">
                            <div className="logo-name">YESTERYEAR</div>
                            <div className="logo-tagline">Every place has a story</div>
                        </div>
                        <div className="index-cta-wrap">
                            {/*<Link to="/tours">
                            <ViewTourListButton />
                        </Link>
                                */}
                                <div className="pre-launch-message">
                                    We'll be launching on iOS in early 2016.
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="benefit-section">
                <div className="ben ben1">
                    <div className="benefit-writing">
                        On-demand audio tours for historical places
                    </div>
                    <div className="benefit-img-overlay"></div>
                    <div className="benefit-img-overlay-2"></div>
                </div>
                <div className="ben ben2">
                    <div className="benefit-writing">
                        Play tours right from your phone
                    </div>
                    <div className="benefit-img-overlay"></div>
                    <div className="benefit-img-overlay-2"></div>
                </div>
                <div className="ben ben3">
                    <div className="benefit-writing">
                        Skip the line and avoid expensive, dry tours
                    </div>
                    <div className="benefit-img-overlay"></div>
                    <div className="benefit-img-overlay-2"></div>
                </div>
            </section>
        </div>
      )
    }
}

export default Index;

// Play tours right from your phone

// Skip the line and avoid expensive, dry tours
