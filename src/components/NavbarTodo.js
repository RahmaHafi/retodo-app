

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'




function NavbarTodo() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://cdn.dribbble.com/users/4598/screenshots/314295/media/6def21d29374c85ab0dba502d80e5fb6.jpg" alt="logo" width={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">My Todos</Nav.Link>
                        <Nav.Link href="#pricing">New Todo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTodo