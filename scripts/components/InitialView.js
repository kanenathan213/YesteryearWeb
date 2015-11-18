/*
  InitialView
*/

import React from 'react';

import autobind from 'autobind-decorator';

@autobind
class InitialView extends React.Component {
    render() {
      return (
        <div className="initial-view-wrap">
            <header className="intro-header">
                <div className="hero-img-overlay"></div>
                <div className="logo-wrap">
                    <div className="logo-name">HEYDAY</div>
                    <div className="logo-tagline">Walk with history</div>
                </div>
            </header>
            <section className="benefit benefit-1">
                <div className="benefit-img-overlay"></div>
                <div className="benefit-statement">
                    Fascinating audio tours for historical places
                </div>
            </section>
            <section className="benefit benefit-2">
                <div className="benefit-img-overlay"></div>
                <div className="benefit-statement">
                    Easily listen from your phone
                </div>
            </section>

            <section className="benefit benefit-3">
                <div className="benefit-img-overlay"></div>
                <div className="benefit-statement">
                    Skip the line and save some money
                </div>
            </section>

            {/* benefit section component*/}

        </div>
      )
    }
}

export default InitialView;
