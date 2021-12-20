import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Electronics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Inicio</Nav.Link>
                            <Nav.Link href="#pricing">Nosotros</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Heladeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">TV</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Consolas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Herramientas</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#deets">Avatar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
