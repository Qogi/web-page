import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import '../css/navigationBar.css';

export const Navigationbar = () => (
    <Navbar expand="lg">
        <Navbar.Brand href="/">Qogi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbarElements">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/products">Products</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
)