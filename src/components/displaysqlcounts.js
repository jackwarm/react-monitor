import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from "react-number-format";
import DisplayMemoryCounts from "./displaymemorycounts";

class DisplaySqlCounts extends Component {

    // Display Refresh Request
    render() {
        let sql = this.props.sql;
        return (
            <div className="row">
                <div className="col-3 mr-1">
                    {sql["created_at"]}
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={sql["open_tables"]} displayType={'text'} thousandSeparator={true}  />
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={sql["queries"]} displayType={'text'} thousandSeparator={true}  />
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={sql["opens"]} displayType={'text'} thousandSeparator={true}  />
                </div>
                <div className="col-2 mr-1 text-right">
                    <NumberFormat value={sql["qps_avg"]} displayType={'text'} thousandSeparator={true}  />
                </div>
            </div>
        );
    }
}

DisplayMemoryCounts.proptype = {
    key: PropTypes.string.isRequired,
    sql: PropTypes.array.isRequired
}

export default DisplaySqlCounts;