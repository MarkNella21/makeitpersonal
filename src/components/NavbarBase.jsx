import React from "react";
import Container from "react-bootstrap/container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./homePage/Home";

const NavbarBase = () => {

    return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/Home">MakeItPersonal</Navbar.Brand>
            <Nav className="me-auto">
                <link href="/Home"><Home/></link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarBase;