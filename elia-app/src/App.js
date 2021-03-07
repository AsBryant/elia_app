import './App.css';
import Button from 'react-bootstrap/Button'
import Login from './Login';
import Home from './Home';
import Register from "./Register";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <Route path="/index" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>

            </header>
        </div>
        </Router>
    );
}

export default App;