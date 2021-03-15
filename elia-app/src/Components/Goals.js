import '../App.css';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";


function Goals() {
    return (

<Col>
             <Card>
                 <Card.Header as="h5">Goals</Card.Header>
                 <Card.Body>
                     <Card.Title>This weeks goals:</Card.Title>
                     <Card.Text>
                         <ul>
                             <li><Alert variant="success">Complete Math 101 | Achieved </Alert></li>
                             <li><Alert variant="danger">Complete Math advance numeracy | Failed</Alert></li>
                             <li><Alert variant="warning">Complete Fun with numbers | In progress</Alert></li>
                         </ul>

                     </Card.Text>
                 </Card.Body>
             </Card>

</Col>



    );
}

export default Goals;