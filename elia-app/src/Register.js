import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import './App.css';
import Col from "react-bootstrap/Col";
import { FaKey, FaSignInAlt } from 'react-icons/fa';


function Register() {
    return (
        <div>

            <Container>
                <Card>
                    <Card.Body>
                <h1>Register</h1>
                <Form>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

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
                    </Form.Row>
                    <Form.Row>
                        <Col>
                        <Form.Group controlId="formBasicPassword">
                             <Form.Label>Password</Form.Label>
                             <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPasswordReEnter">
                             <Form.Label>Re-enter password</Form.Label>
                             <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                        </Col>
                    </Form.Row>

                    <Button size="lg" block variant="primary" type="submit" href="./login">
                      <FaKey />  Submit
                    </Button>
                    <Button size="lg" block variant="warning" href="./login">
                       <FaSignInAlt /> Go to login instead
                    </Button>

                </Form>

                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
}


export default Register;