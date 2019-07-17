import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideMenu extends Component {

    goPage = (e) => {
        this.props.goPage(e.target.id);
    }

    // Display Refresh Request
    render() {
        let display = <div></div>
        if (this.props.serverId > 0) {
            display = <div className="container">
                <div className="row"><button className="btn" id="details" onClick={this.goPage}>Details</button></div>
                <div className="row"><button className="btn" id="cpu" onClick={this.goPage}>CPU</button></div>
                <div className="row"><button className="btn" id="sql" onClick={this.goPage}>SQL</button></div>
                <div className="row"><button className="btn" id="disks" onClick={this.goPage}>Disks</button></div>
                <div className="row"><button className="btn" id="sites" onClick={this.goPage}>Sites</button></div>
                <div className="row"><button className="btn" id="mem" onClick={this.goPage}>Memory</button></div>
            </div>
        }
        return(display);
    }
}

SideMenu.proptype = {
    goPage: PropTypes.function
}
export default SideMenu;