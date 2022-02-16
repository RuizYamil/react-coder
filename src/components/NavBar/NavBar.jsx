import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Widget from './Widget';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
                <Link to={'/'}>Logo</Link>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/'}>Inicio</Link>
                            <Link to={'_blank'}>Nosotros</Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <Link to={"/category/component"}>Componentes</Link>
                                <NavDropdown.Divider />
                                <Link to={"/category/other"}>Otros</Link>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            <Link to={'_blank'}>Avatar</Link>
                        </Nav>
                        <Link to={'/cart'}>
                            <Widget />
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
