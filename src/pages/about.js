import React, { Component } from 'react';
import TitleBar from "../components/titlebar";

class About extends Component {
    goMenu = (server) => {
        this.props.history.push('/');
    }

    render () {
        return (
            <div className="App">
                <div className="container">
                    <TitleBar currentServer={0} goMenu={this.goMenu}/>
                    <div className="row  h-100">
                        <h1>About</h1>
                    </div>
                    <div className="row  h-100">
                        <p>
                            This site displays information about the AWS servers that were created to host a number of web sites
                            for some developers.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;