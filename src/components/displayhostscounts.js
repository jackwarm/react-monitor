import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayDisks from "./displaydisks";

class DisplayHostCounts extends Component {

    show30DayGraph = (e) => {
        this.props.show30DayGraph(e.target.id);
    };

    // Display Refresh Request
    render() {
        let domain = this.props.domain;
        return (
            <div className="row">
                <div className="col-3 mr-1">
                    <button onClick={this.show30DayGraph} id={domain["domain"]} className="btn">{domain["domain"]}</button>
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


DisplayDisks.proptype = {
    key: PropTypes.string.isRequired,
    domain: PropTypes.object.isRequired,
    show30DayGraph: PropTypes.function
}

export default DisplayHostCounts;