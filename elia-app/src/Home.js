import Jumbotron from "react-bootstrap/Jumbotron";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './App.css';




function Home() {
    return (
        <div>

            <Jumbotron>
                <h1>Welcome to E.L.I.A</h1>
                <p>Your Electronic Learing Interaction Assistant</p>
                <ButtonGroup>
                <Button variant="success" href="./login">Login</Button>
                <Button variant="warning" href="./register">Register</Button>
                </ButtonGroup>
            </Jumbotron>
        </div>
    );
}

export default Home;