import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

class TitleBar extends Component {
    currentServer = {};

    changeView = (e) => {
        this.props.goMenu(parseInt(e.target.id));
    }

    // Display Refresh Request
    render() {
        this.currentServer = this.props.currentServer;
        let serverButton = "";
        if (this.currentServer.id > 0) {
            serverButton =
                <div className="col-3">
                    <button className="btn" onClick={this.changeView} id={this.currentServer.id}>{this.currentServer.name}</button>
                </div>
        }
        return (<div className="row justify-content-left p-2">
            <div className='col-1'>
                <button className="btn" onClick={this.changeView} id={0}>Home</button>
            </div>
            { serverButton }
        </div>);
    }
}

TitleBar.proptype = {
    currentServer: PropTypes.object.isRequired,
    goMenu: PropTypes.function
}
/*

            <div className='col-1'>
                <Link to="/about" className="btn">About</Link>
            </div>
 */
export default TitleBar;
