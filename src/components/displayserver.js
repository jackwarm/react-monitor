import React, { Component } from 'react';

const fiveMinutes = 6 * 60;
class DisplayServer extends Component {

    changeServer = (e) => {
        this.props.changeServer(e.target.id);
    }

    // Display Refresh Request
    render() {
        let host = this.props.host;
        let btnColor = "btn";
        if (host.report_time > fiveMinutes) {
            btnColor += " btn-danger";
        } else {
            btnColor += " btn-info";
        }
        return (
            <div className='col-3'>
                <button className={btnColor} id={host.id} onClick={this.changeServer}>
                    {host.description}<br/>{host.last_accessed}<br/>{host.uptime}
                </button>
            </div>
        );
    }
}

export default DisplayServer;