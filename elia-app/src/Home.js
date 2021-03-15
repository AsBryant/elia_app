import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './App.css';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";




function Home() {
    return (
        <div>

            <Container>
                <Card>
                    <Card.Body>
                <h1>Welcome to E.L.I.A</h1>
                <p>Your Electronic Learing Interaction Assistant</p>

            </Card.Body>
        </Card>
                <ButtonGroup>
                    <Button variant="success" href="./login">Login</Button>
                    <Button variant="warning" href="./register">Register</Button>
                </ButtonGroup>
</Container>

        </div>
    );
}

export default Home;