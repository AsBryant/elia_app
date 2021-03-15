import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import { FaCogs, FaChartPie, FaHome, FaWindowClose } from 'react-icons/fa';
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import './App.css';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">E.L.I.A </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/main"><Button variant="dark"><FaHome /> Home</Button></Nav.Link>
                    <Nav.Link  href="/analytics"><Button variant="dark"><FaChartPie />Analytics</Button></Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <NavDropdown  title="Build your program " id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Set Tasks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Set Goals</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Set Rewards</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Contact Teacher</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  href="/settings"><Button variant="dark"><FaCogs /> Settings</Button></Nav.Link>
                    <Nav.Link  href="/index"><Button variant="dark">Log out <FaWindowClose /></Button></Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>


    );
}

export default NavBar;