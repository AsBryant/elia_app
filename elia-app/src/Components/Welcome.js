import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import '../App.css';


function Welcome() {
    return (

        <div>
            <Container>
                <Row>
                    <hr/>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Study skills</Card.Header>
                            <Card.Body>
                                <Card.Title>View this weeks top lessons:</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><Alert variant="dark">Example</Alert></li>
                                        <li><Alert variant="dark">Example</Alert></li>
                                        <li><Alert variant="dark">Example</Alert></li>
                                    </ul>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Achieved goals</Card.Header>
                            <Card.Body>
                                <Card.Title>This week the following goals were met:</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><Alert variant="dark">Example</Alert></li>
                                        <li><Alert variant="dark">Example</Alert></li>
                                        <li><Alert variant="dark">Example</Alert></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h5">communications</Card.Header>
                            <Card.Body>
                                <Card.Title>Here are your messages</Card.Title>
                                <Card.Text>

                                    <p><Alert variant="danger"><b>Mr Jones:</b> Your child has missed work.</Alert></p>
                                    <hr />
                                    <p><Alert variant="success"> <b>Mrs Smith:</b> A fantastic art piece.</Alert></p>
                                    <hr />
                                    <p><Alert variant="info"> <b>Mrs Goodard:</b> An opportunity. </Alert></p>

                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Grades</Card.Header>
                        <Card.Body>
                            <Card.Title>Here are the most recent grades</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><Alert variant="dark">Example</Alert></li>
                                    <li><Alert variant="dark">Example</Alert></li>
                                    <li><Alert variant="dark">Example</Alert></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header as="h5">Rewards</Card.Header>
                        <Card.Body>
                            <Card.Title>The following rewards have been earnt this weel</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><Alert variant="dark">Example</Alert></li>
                                    <li><Alert variant="dark">Example</Alert></li>
                                    <li><Alert variant="dark">Example</Alert></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default Welcome;