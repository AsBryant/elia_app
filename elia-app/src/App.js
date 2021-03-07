import './App.css';
import Button from 'react-bootstrap/Button'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Jumbotron from "react-bootstrap/Jumbotron";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Jumbotron>
                    <h1>Welcome to E.L.I.A!</h1>
                    <h2>
                        Electronic Learning Interation Assistant
                    </h2>
                    <p>
                        E.L.I.A is designed to bring learning into the 21st century by providing a fun an interactive learning method.
                        that teaches not only skills from the classroom but aims to teach social skills and fullfil the childs human interaction requirements
                        that are reduced by a digital learning envirment
                    </p>
                    <ButtonGroup aria-label="Basic example">
                        <Button size="lg" variant="outline-success" href="/login" rel="noopener noreferrer">
                            Login here
                        </Button>

                        <Button size="lg"  href="/register" variant="outline-warning" target="_blank" rel="noopener noreferrer">
                            Register here
                        </Button>
                    </ButtonGroup>
                </Jumbotron>






            </header>
        </div>
    );
}

export default App;