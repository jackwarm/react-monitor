import React, { Component } from 'react';
import DisplaySqlCounts from './displaysqlcounts';
import { VictoryLine, VictoryChart,VictoryTheme,VictoryLegend,VictoryAxis } from 'victory';

class DisplaySql extends Component {

    state = {
        yvalue: "queries"
    }

    changeView = (e) => {
        this.setState({yvalue:e.target.id});
    }

    // Display Refresh Request
    render() {
        console.log(this.state);
        let sql = this.props.sql;
        let sql30 = this.props.sql30;
        let sqlDetails = "";
        if (sql) {
            if (sql.length > 0) {
                sqlDetails = sql.map((data) => {
                    return (<DisplaySqlCounts key={data.id} sql={data} />);
                });
            }
            sqlDetails = <div className="container">{sqlDetails}</div>
        }

        //categories={{ x: ["dogs", "cats", "mice"] }}
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-1 font-weight-bold text-left">Options: </div>
                    <div className="col-1 pr-2">
                        <button onClick={this.changeView} id="queries">Queries</button>
                    </div>
                    <div className="col-1 pr-2">
                        <button onClick={this.changeView} id="opens">Opens</button>
                    </div>
                    <div className="col-1 pr-2">
                        <button onClick={this.changeView} id="qps">QPS</button>
                    </div>
                </div>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis
                                 tickFormat={(t) => {
                                     if (t > 1000000) {
                                         return(`${Math.round(t/1000000)}M`);
                                     } else if ((t > 1000)) {
                                         return (`${Math.round(t / 1000)}K`);
                                     } else {
                                         return (t)
                                     }
                                    }
                                 }
                    />
                    <VictoryLegend
                        x={0} y={0}
                        title={"SQL performance: " + this.state.yvalue}
                        gutter={20}
                        titleOrientation="top"
                        style={{  title: { fontSize: 10 } }}
                        data={[]}
                    />
                    <VictoryLine
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        data={sql30.data1}
                        y={this.state.yvalue}
                    />
                </VictoryChart>
                <div className="row">
                    <div className="col-3 text-white bg-dark font-weight-bold mr-1">Time</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">Tables</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">queries</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">opens</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">QPS</div>
                </div>
                {sqlDetails}
            </div>
        );
    }
}

export default DisplaySql;