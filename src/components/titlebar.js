import React, { Component } from 'react';

class TitleBar extends Component {
    currentServer = {};

    changeView = (e) => {
        this.props.goMenu(this.currentServer.id);
    }

    goHome = () => {
        this.props.goMenu(0);
    }

    // Display Refresh Request
    render() {
        this.currentServer = this.props.currentServer;
        let serverButton = "";
        if (this.currentServer.id > 0) {
            serverButton = <div className="col-3">
                <button className="btn" onClick={this.changeView}>{this.currentServer.name}</button>
                </div>
        }
        return (<div className="row justify-content-left p-2">
            <div className='col-2'>
                <button className="btn" onClick={this.goHome}>Home</button>
            </div>
            { serverButton }
        </div>);
    }
}

export default TitleBar;