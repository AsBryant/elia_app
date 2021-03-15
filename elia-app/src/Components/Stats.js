import '../App.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "react-google-charts";

const data = [
    ["Month", "Student average grade", "Average year grade"],
    ["2004", 64, 68],
    ["2005", 66, 69],
    ["2006", 78, 70],
    ["2007", 44, 71]
];
const options = {
    title: "Student average grade vs average year grade",
    curveType: "function",
    legend: { position: "bottom" }
};

function Stats() {
    return (

        <Col>
            <Card>
                <Card.Header as="h5">Stats</Card.Header>
                <Card.Body>
                    <Card.Title>Your child's statistics:</Card.Title>
                    <Card.Text>
                        <Row>
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                            />
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>



    );
}

export default Stats;