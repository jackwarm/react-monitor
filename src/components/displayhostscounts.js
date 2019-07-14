import React, { Component } from 'react';

class DisplayHostCounts extends Component {

    // Display Refresh Request
    render() {
        let domain = this.props.domain;
        return (
            <div className="row">
                <div className="col-3 mr-1">
                    {domain["domain"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {domain["Day"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {domain["Week"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {domain["30 Days"]}
                </div>
            </div>
        );
    }
}

export default DisplayHostCounts;