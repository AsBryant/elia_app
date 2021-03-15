import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import '../App.css';



function FourOhFour() {
    return (
        <div>

            <Container>
                <Card>
                    <Card.Body>
                    <h1>Oh no!</h1>
                        <h2>Looks like something went wrong</h2>
                        <Button variant="danger" href="/Main">Return to homepage</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
}


export default FourOhFour;