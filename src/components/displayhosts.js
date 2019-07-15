import React, { Component } from 'react';
import DisplayHostCounts from "./displayhostscounts";
import DisplayHostsGraph from "./displayhostsgraph"

class DisplayHosts extends Component {
    constructor() {
        super();

        this.state = {
            url: "",
            isOpen: false
        }
    }

    show30DayGraph = (url) => {
        this.setState({url:url, isOpen:true});
    };

    // Display Refresh Request
    render() {
        let sites = this.props.sites;
        let details = "";
        if (sites) {
            if (sites.length > 0) {
                details = sites.map((domain) => {
                    return (<DisplayHostCounts key={domain.domain} domain={domain} show30DayGraph={this.show30DayGraph} />);
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
                <DisplayHostsGraph url={this.state.url}  isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                    30 Day Graph --- TBD
                </DisplayHostsGraph>
            </div>
        );
    }
}

export default DisplayHosts;
