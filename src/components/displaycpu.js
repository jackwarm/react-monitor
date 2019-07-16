import React, { Component } from 'react';
import DisplayCPUCounts from './displaycpucounts'

class DisplayCPU extends Component {

    // Display Refresh Request
    render() {
        let cpu = this.props.cpu;
        let details = "";
        if (cpu) {
            if (cpu.length > 0) {
                let i=0;
                details = cpu.map((data) => {
                    return (<DisplayCPUCounts key={i++} cpu={data} />);
                });
            }
            details = <div className="container">{details}</div>
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 ">Interval</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">Load 1</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">Load 5</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">Load 15</div>
                    <div className="col-1 text-white bg-dark font-weight-bold mr-1 text-right">User</div>
                    <div className="col-1 text-white bg-dark font-weight-bold mr-1 text-right">Sys</div>
                </div>
                {details}
            </div>
        );
    }
}

export default DisplayCPU;