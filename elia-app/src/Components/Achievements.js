import '../App.css';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";


function Achievements() {
    return (

            <Col>
                <Card>
                    <Card.Header as="h5">Achievements</Card.Header>
                    <Card.Body>
                        <Card.Title>This weeks Achievements:</Card.Title>
                        <Card.Text>
                            <ul>
                                <li><Alert variant="success">10 hours spent on math </Alert></li>
                                <li><Alert variant="success">All weekly goals met</Alert></li>
                                <li><Alert variant="info">7/10 lessons completed</Alert></li>
                            </ul>

                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>



    );
}

export default Achievements;