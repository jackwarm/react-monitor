import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayHostCounts from "./displayhostscounts";
import DisplayHostsGraph from "./displayhostsgraph";
import { VictoryBar, VictoryChart,VictoryTheme,VictoryLegend } from 'victory';

const APIurl = 'http://sysmonitor.cieply.com/getOptions.php?opt=get30www&url=';

class DisplayHosts extends Component {
    constructor() {
        super();

        this.state = {
            url: "",
            isOpen: false,
            displayData: []
        }
    }

    show30DayGraph = (url) => {
        fetch(APIurl+url)
            .then(results => {
                return(results.json());
            })
            .then(data => {
                if (data) {
                    let table = data.response;
                    let toDisplay = [];
                    table.forEach((row => {
                        let date = row["monitor_date"];
                        date = date.substr(5);
                        toDisplay.push({x:parseInt(row["days"]),y:parseInt(row["count"]),label:date});
                    }));
                    console.log(toDisplay);
                    this.setState({url:url, isOpen:true,displayData:toDisplay});
                }
            });
    };

    // Display Refresh Request

    render() {
        let sites = this.props.sites;
        let details = "";
        if (sites) {
            if (sites.length > 0) {
                details = sites.map((domain) => {
                    return (<DisplayHostCounts key={domain.domain} domain={domain} show30DayGraph={this.show30DayGraph} />);
                });
            }
            details = <div className="container">{details}</div>
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-3 text-white bg-dark font-weight-bold mr-1">Domain</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">Day</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">Week</div>
                    <div className="col-2 text-white bg-dark font-weight-bold mr-1 text-right">30 Days</div>
                </div>
                {details}
                <DisplayHostsGraph url={this.state.url}  isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                    <VictoryChart horizontal
                        theme={VictoryTheme.material}
                        domainPadding={10}
                    >
                        <VictoryLegend
                            x={0} y={0}
                            title={this.state.url + "- last 30 days"}
                            gutter={20}
                            titleOrientation="top"
                            orientation="horizontal"
                            style={{  title: { fontSize: 10 } }}
                            data={[]}
                        />
                        <VictoryBar
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                            barWidth={10}
                            alignment="start"
                            data={this.state.displayData}
                        />
                    </VictoryChart>
                </DisplayHostsGraph>
            </div>
        );
    }
}

DisplayHosts.proptype = {
    sites: PropTypes.array.isRequired
}

export default DisplayHosts;
