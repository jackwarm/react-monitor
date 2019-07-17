import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayDetails extends Component {

    // Display Refresh Request
    render() {
        let serverId = this.props.serverId;
        let hosts = this.props.hosts;
        let host = hosts.filter(h => h.id===serverId)[0];
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-3 h3">
                        IP Address:
                    </div>
                    <div className="col-9 h3">
                        {host.ip_address}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 h3">
                        Up Time:
                    </div>
                    <div className="col-9 h3">
                        {host.uptime}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 h3">
                        SQL Server:
                    </div>
                    <div className="col-9 h3">
                        {host.mysql_version}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 h3">
                        SQL Up Time:
                    </div>
                    <div className="col-9 h3">
                        {host.mysql_uptime}
                    </div>
                </div>
            </div>
        );
    }
}

DisplayDetails.proptype = {
    serverId: PropTypes.number.isRequired,
    hosts: PropTypes.object.isRequired
}

export default DisplayDetails;