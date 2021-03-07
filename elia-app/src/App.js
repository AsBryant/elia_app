import './App.css';
import Button from 'react-bootstrap/Button'
import Login from './Login';
import Register from "./Register";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>

            </header>
        </div>
        </Router>
    );
}

export default App;