import React, { Component } from 'react';
import NumberFormat from "react-number-format";

class DisplayMemoryCounts extends Component {

    // Display Refresh Request
    render() {
        let memory = this.props.memory;
        return (
            <div className="row">
                <div className="col-3 mr-1">
                    {memory["created_at"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={memory["memory_free"]} displayType={'text'} thousandSeparator={true}  />
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={memory["memory_used"]} displayType={'text'} thousandSeparator={true}  />
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={memory["memory_cache"]} displayType={'text'} thousandSeparator={true}  />
                </div>
            </div>
        );
    }
}


export default DisplayMemoryCounts;