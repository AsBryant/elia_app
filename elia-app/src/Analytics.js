import './App.css';
import NavBar from "./NavBar";
import Goals from "./Components/Goals"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Achievements from "./Components/Achievements";
import Stats from "./Components/Stats";




function Analytics() {
    return (
        <div>
            <NavBar />
            <Container>
            <hr></hr>
            <Row>
            <Goals />
                    <Achievements />
                </Row>
                <hr></hr>
                <Row>
                    <Stats />
                </Row>
            </Container>
        </div>
    );
}

export default Analytics;