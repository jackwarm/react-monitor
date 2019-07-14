import React, { Component } from 'react';
import DisplayHostCounts from "./displayhostscounts";

class DisplayHosts extends Component {

    // Display Refresh Request
    render() {
        let sites = this.props.sites;
        let details = "";
        if (sites) {
            if (sites.length > 0) {
                details = sites.map((domain) => {
                    return (<DisplayHostCounts key={domain.domain} domain={domain} />);
                });
            }
            details = <div className="container">{details}</div>
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-3 text-black-50 bg-white strong mr-1">Domain</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1 text-right">Day</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1 text-right">Week</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1 text-right">30 Days</div>
                </div>
                {details}
            </div>
        );
    }
}

export default DisplayHosts;
