import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import DisplayMemoryCounts from './displaymemorycounts';
import DisplaySwapCounts from './displayswapcount';

class DisplayMemory extends Component {

    // Display Refresh Request
    render() {
        let memory = this.props.memory;
        let memoryDetails = "";
        let swapDetails = "";
        if (memory) {
            if (memory.length > 0) {
                memoryDetails = memory.map((data) => {
                    return (<DisplayMemoryCounts key={data.created_at} memory={data} />);
                });
                swapDetails = memory.map((data) => {
                    return (<DisplaySwapCounts key={data.created_at} swap={data} />);
                });
            }
            memoryDetails = <div className="container">{memoryDetails}</div>
            swapDetails = <div className="container">{swapDetails}</div>
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-3 text-white bg-dark strong mr-1">Available Mem:</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">
                        <NumberFormat value={memory[0].memory_total} displayType={'text'} thousandSeparator={true}  />
                    </div>
                    <div className="col-2 text-white bg-dark strong mr-1">&nbsp;</div>
                    <div className="col-2 text-white bg-dark strong mr-1">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-3 text-white bg-dark strong mr-1">Time</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">Used</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">Free</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">Cache</div>
                </div>
                {memoryDetails}

                <div className="row mt-5">
                    <div className="col-3 text-white bg-dark strong mr-1">Swap Mem:</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">
                        <NumberFormat value={memory[0].swap_total}  displayType={'text'} thousandSeparator={true}  />
                    </div>
                    <div className="col-2 text-white bg-dark strong mr-1">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-3 text-white bg-dark strong mr-1">Time</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">Used</div>
                    <div className="col-2 text-white bg-dark strong mr-1 text-right">Free</div>
                </div>
                {swapDetails}
            </div>
        );
    }
}

DisplayMemory.proptype = {
    memory: PropTypes.array.isRequired
}

export default DisplayMemory;