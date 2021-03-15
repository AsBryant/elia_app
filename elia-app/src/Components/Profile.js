import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import '../App.css';
import Form from "react-bootstrap/Form";


function Profile() {
    return (

        <div>
            <Container>
            <Card>
                <Card.Body>
                <Row>
                    <Col>
                    <h1>Profile</h1>
                        <hr/>
                    </Col>
                </Row>
                <Form>
                    <h2>Basic details</h2>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control type="text" placeholder="Enter firstname" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Surname" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Phone number:</Form.Label>
                            <Form.Control type="number" placeholder="Enter Phone number" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                    <Form.Row>
                    <Col>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                    <h2>User information</h2>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>User id:</Form.Label>
                                <Form.Control type="text" placeholder="01254" readOnly  />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>User type:</Form.Label>
                                <Form.Control type="text" placeholder="Parent" readOnly  />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Children:</Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Alert variant="dark">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="David Price" readOnly  />
                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="number" placeholder="8" readOnly  />
                                <Button variant="info">View profile</Button>
                            </Alert>
                        </Col>
                        <Col>
                            <Alert variant="dark">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="David Price" readOnly  />
                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="number" placeholder="8" readOnly  />
                                <Button variant="info">View profile</Button>
                            </Alert>
                        </Col>
                    </Form.Row>
                </Form>
                </Card.Body>
            </Card>
                <hr/>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <h1>Account settings</h1>
                                <hr/>
                            </Col>
                        </Row>
                        <Form>
                            <Container>
                            <Form.Row>
                                <Col>

                                    {[ 'checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Alert variant="dark">
                                            <Form.Label>Text chat :</Form.Label> <Form.Label> </Form.Label>
                                            <Form.Check inline label="Enable" type={type} id={`inline-${type}-1`} />
                                            <Form.Check inline label="Disable" type={type} id={`inline-${type}-2`} />
                                            </Alert>
                                        </div>
                                    ))}
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>

                                    {[ 'checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                          <Alert variant="dark">
                                            <Form.Label> Video chat :</Form.Label> <Form.Label> </Form.Label>
                                              <Form.Check inline label="Enable" type={type} id={`inline-${type}-1`} />
                                            <Form.Check inline label="Disable" type={type} id={`inline-${type}-2`} />
                                          </Alert>
                                        </div>
                                    ))}
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>

                                    {[ 'checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Alert variant="dark">
                                            <Form.Label >AI features : </Form.Label> <Form.Label> </Form.Label>
                                            <Form.Check inline label="Enable" type={type} id={`inline-${type}-1`} />
                                            <Form.Check inline label="Disable" type={type} id={`inline-${type}-2`} />
                                            </Alert>
                                        </div>
                                    ))}
                                </Col>
                            </Form.Row></Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Profile;