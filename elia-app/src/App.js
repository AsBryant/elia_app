import './App.css';
import Login from './Login';
import Home from './Home';
import Register from "./Register";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Main from "./Main";
import Analytics from "./Analytics";
import Settings from "./Settings";
import React from "react";


function App() {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <Redirect exact from="/" to="index" />
                <Route path="/index" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/main" component={Main}/>
                <Route path="/analytics" component={Analytics}/>
                <Route path="/settings" component={Settings}/>
            </header>
        </div>
        </Router>
    );
}

export default App;