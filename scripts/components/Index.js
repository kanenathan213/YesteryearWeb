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
            <header className="intro-header">
                <div className="hero-img-overlay"></div>
                <div className="logo-wrap">
                    <div className="logo-name">YESTERYEAR</div>
                    <div className="logo-tagline">Walk with history</div>
                </div>
                    <Link to="/tours">
                        <ViewTourListButton />
                    </Link>
            </header>
            <section className="benefit-section">
                <div className="ben ben1">
                    <div className="benefit-writing">
                        First thing
                    </div>
                </div>
                <div className="ben ben2">
                    <div className="benefit-writing">
                        Second thing
                    </div>
                </div>
                <div className="ben ben3">
                    <div className="benefit-writing">
                        Third thing
                    </div>
                </div>
            </section>
        </div>
      )
    }
}

export default Index;

// Easily listen from your phone

// Skip the line and save some money
