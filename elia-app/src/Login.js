
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { FaSignInAlt, FaClipboardCheck } from 'react-icons/fa';
import './App.css';


function Login() {
    return (
      <div>
<Container>
    <Card>
        <Card.Body>
              <h1>Login</h1>
              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button size="lg" block variant="success" type="submit" href="./main">
                      <FaSignInAlt /> Submit
                  </Button>

                  <Button size="lg" block variant="warning" href="./register">
                    <FaClipboardCheck />  Go to Register instead
                  </Button>
              </Form>
        </Card.Body>
    </Card>
</Container>
        </div>
    );
}

export default Login;