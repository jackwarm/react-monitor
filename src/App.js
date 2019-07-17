import React, { Component } from 'react';
import './app.css';
import TitleBar from "./components/titlebar";
import SideMenu from "./components/sidemenu";
import Content from "./components/content";
//import About from "./pages/about";
import { BrowserRouter as Router,Route } from "react-router-dom";
import axios from 'axios';

const HomePage = "";
const HomeServer = 0;
const APIurl = 'http://sysmonitor.cieply.com/getOptions.php?opt=';

class App extends Component {
    constructor() {
        super();

        console.log(this.props);
        this.state = {
            server: {
                id: HomeServer,
                name: HomePage
            },
            option: "",
            sites: {}
        }
    }

    componentDidMount() {
        axios.get(APIurl+'hosts')
            .then(res => {
                let hosts = res.data.response;
                this.setState({hosts: hosts});
            });
    }

    getServerData = (option) => {
        let server = "&serverId=" + this.state.server.id;
        axios.get(APIurl+option+server)
            .then(res => {
                let data = res.data;
                let currentState = this.state;
                currentState[option] = data.response;
                currentState.option = option;
                if (option === "sql") {
                    let table = data.extra;
                    let data1 = [];
                    let i = 0;
                    table.forEach((row => {
                        let date = row["mdate"];
                        date = date.substr(5);
                        data1.push({x:i++ ,
                            queries:parseInt(row["queries"]),
                            opens:parseInt(row["opens"]),
                            qps:parseInt(row["qps_avg"]),
                            date:date});
                    }));
                    currentState["sql30"] = {"data1":data1};
                }
                this.setState(currentState);
            });
    }

    goMenu = (server) => {
        if (server === 0) {
            console.log("Home Server: " + server)
            this.setState({server: {id: HomeServer, name: HomePage}, option: ""});
        } else {
            console.log("Site Server: " + server)
            this.setState({option:"details"});
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
            <Router>
                <div className="App">
                    <div className="container">
                        <TitleBar currentServer={this.state.server} goMenu={this.goMenu}/>
                        <div className="row  h-100">
                            <Route exact path="/" render={props => {
                                console.log("home");
                                return (
                                    <React.Fragment>
                                        <div className="col-md-2 justify-content-left">
                                            <SideMenu serverId={this.state.server.id} goPage={this.goPage}/>
                                        </div>
                                        <div className="col-md-10 justify-content-left">
                                            <Content currentState={this.state}
                                                     changeServer={this.changeServer}
                                            />
                                        </div>
                                    </React.Fragment>)
                            }} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

/*<Route path="/about" component={About}/>*/
export default App;