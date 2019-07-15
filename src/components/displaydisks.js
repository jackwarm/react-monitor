import React, { Component } from 'react';
import DisplayDiskCounts from "./displaydiskcounts";

class DisplayDisks extends Component {

    // Display Refresh Request
    render() {
        let disks = this.props.disks;
        let details = "";
        if (disks) {
            if (disks.length > 0) {
                details = disks.map((disk) => {
                    return (<DisplayDiskCounts key={disk.id} disk={disk} />);
                });
            }
            details = <div className="container">{details}</div>
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-1 text-black-50 bg-white strong mr-1">Mount</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1">Device</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1 text-right">Total</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1 text-right">Free Space</div>
                    <div className="col-2 text-black-50 bg-white strong mr-1 text-right">Used Space</div>
                    <div className="col-1 text-black-50 bg-white strong mr-1 text-right">PCT</div>
                </div>
                {details}
            </div>
        );
    }
}

export default DisplayDisks;