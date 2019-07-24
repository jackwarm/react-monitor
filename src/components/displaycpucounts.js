import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayCPUCounts extends Component {

    // Display Refresh Request
    render() {
        let cpu = this.props.cpu;
        return (
            <div className="row">
                <div className="col-2 mr-1">
                    {cpu["time"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {cpu["L1"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {cpu["L5"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    {cpu["L15"]}
                </div>
                <div className="col-1 mr-1 text-right">
                    {cpu["cpu_system"]}
                </div>
                <div className="col-1 mr-1 text-right">
                    {cpu["cpu_user"]}
                </div>

            </div>
        );
    }
}

DisplayCPUCounts.propTypes = {
    key: PropTypes.number.isRequired,
    cpu: PropTypes.array.isRequired
}

export default DisplayCPUCounts;