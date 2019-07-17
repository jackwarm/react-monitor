import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayServer from './displayserver'
import DisplayDetails from './displaydetails'
import DisplayHosts from './displayhosts'
import DisplayCPU from './displaycpu'
import DisplayDisks from './displaydisks'
import DisplayMemory from './displaymemory'
import DisplaySql from './displaysql'

class Content extends Component {

    changeServer = (id) => {
        this.props.changeServer(id);
    };

    // Display Refresh Request
    render() {
        let option = this.props.currentState.option;
        let serverId = this.props.currentState.server.id;
        let hosts = this.props.currentState.hosts;
        let display = <div></div>;
        switch (option) {
            case "details":
                display = <DisplayDetails serverId={serverId} hosts={hosts} />;
                break;
            case "cpu":
                let cpu = this.props.currentState.cpu;
                display = <DisplayCPU cpu={cpu}/>;
                break;
            case "disks":
                let disks = this.props.currentState.disks;
                display = <DisplayDisks disks={disks} />;
                break;
            case "mem":
                let mem = this.props.currentState.mem;
                display = <DisplayMemory memory={mem} />;
                break;
            case "sql":
                let sql = this.props.currentState.sql;
                let sql30 = this.props.currentState.sql30;
                display = <DisplaySql sql={sql} serverId={serverId} sql30={sql30} />;
                break;
            case "sites":
                let sites = this.props.currentState.sites;
                display = <DisplayHosts sites={sites} />;
                break;
            default:
                if (hosts) {
                    if (hosts.length > 0) {
                        display = hosts.map((host) => {
                            return (<DisplayServer key={host.id} host={host} changeServer={this.changeServer}/>);
                        });
                    }
                    display = <div className="row">{display}</div>
                }
        }
        return (display);
    }
}

Content.proptype = {
    currentState: PropTypes.object.isRequired,
    changeServer: PropTypes.function
}

export default Content;