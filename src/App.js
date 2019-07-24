import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from './home';
import About from './pages/about';

class App extends Component {

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        );
    }
}

/*<Route path="/about" component={About}/>*/
export default App;