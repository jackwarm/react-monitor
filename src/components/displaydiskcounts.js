import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayDisks from "./displaydisks";

class DisplayDiskCounts extends Component {

    // Display Refresh Request
    render() {
        let disk = this.props.disk;
        return (
            <div className="row">
                <div className="col-1 mr-1">
                    {disk["mount_point"]}
                </div>
                <div className="col-2 mr-1">
                    {disk["filesystem"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {disk["total_space"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {disk["free_space"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {disk["used_space"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {disk["pct_used"]} %
                </div>
            </div>
        );
    }
}

DisplayDiskCounts.proptype = {
    disk: PropTypes.object.isRequired
}

export default DisplayDiskCounts;