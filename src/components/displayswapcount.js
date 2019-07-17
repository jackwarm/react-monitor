import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from "react-number-format";
import DisplayMemoryCounts from "./displaymemorycounts";

class DisplaySwapCounts extends Component {

    // Display Refresh Request
    render() {
        let swap = this.props.swap;
        return (
            <div className="row">
                <div className="col-3 mr-1">
                    {swap["created_at"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={swap["memory_free"]} displayType={'text'} thousandSeparator={true}  />
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={swap["memory_used"]} displayType={'text'} thousandSeparator={true}  />
                </div>
            </div>
        );
    }
}

DisplaySwapCounts.proptype = {
    key: PropTypes.string.isRequired,
    swap: PropTypes.array.isRequired
}

export default DisplaySwapCounts;