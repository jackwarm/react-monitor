import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TitleBar from "./components/titlebar";
import SideMenu from "./components/sidemenu";
import Content from "./components/content";

const HomePage = "";
const HomeServer = 0;
const APIurl = 'http://sysmonitor.cieply.com/getOptions.php?opt=';

class App extends Component {
    constructor() {
        super();

        this.state = {
            server: {
                id: HomeServer,
                name: HomePage
            },
            option: "",
            sites: {}
        }
        this.getServerData("hosts");
    }

    getServerData = (option) => {
        let server = "&serverId=" + this.state.server.id;
        fetch(APIurl+option+server)
            .then(results => {
                return(results.json());
            })
            .then(data => {
                let currentState = this.state;
                currentState[option] = data.response;
                currentState.option = option;
                this.setState({currentState});
            });
    }

    goMenu = (server) => {
        if (server === 0) {
            this.setState({server: {id: HomeServer, name: HomePage}, option: ""});
        }
    }

    changeServer = (serverId) => {
        let host = this.state.hosts.filter(h => h.id===serverId)[0];
        this.setState({server: {id: serverId, name: host.description}, option: "details"});
    }

    goPage = (option) => {
        if (option) {
            this.getServerData(option);
        } else {
            this.setState({option: ""});
        }
    }

    render() {
        console.log("Option: " + this.state.option);
        return(
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <TitleBar currentServer={this.state.server}
                                  goMenu={this.goMenu}/>
                        <div className="row  h-100">
                            <div className="col-md-2 justify-content-left">
                                <SideMenu serverId={this.state.server.id}
                                          goPage={this.goPage}/>
                            </div>
                            <div className="col-md-10 justify-content-left">
                                <Content currentState={this.state}
                                         changeServer={this.changeServer}
                                />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
/*

                                <Content serverId={this.state.server.id}
                                         hosts={this.state.hosts}
                                         option={this.state.option}
                                         data={this.state.data}/>
 */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
