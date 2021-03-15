import './App.css';
import Login from './Login';
import Home from './Home';
import Register from "./Register";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from "./Main";
import Analytics from "./Analytics";
import Settings from "./Settings";
import React from "react";
import FourOhFour from "./Components/404";


function App() {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/main" component={Main}/>
                <Route path="/analytics" component={Analytics}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/404" component={FourOhFour}/>
                <Route exact path={["/","/index"]} component={Home} />
            </header>
        </div>
        </Router>
    );
}

export default App;