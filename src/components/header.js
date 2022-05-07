import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import '../styles/header.css';
import logo from '../assets/icon.png'

class Header extends Component {

    constructor(props) {

        super(props);

        this.icon = this.icon.bind(this);
        this.links = this.links.bind(this);
        this.donateButton = this.donateButton.bind(this);
    }


    /**
     * Display the wwica icon on the top right of the page (on the top navbar). This 
     * also will display the full name. 
     * 
     * @returns icon and the name
     */
    icon() {
        return (
            <div className="logo-container">
                <img src={logo} alt="wwica" className="wwica-icon" />
                <div>
                    <div className="wwica-title">WWICA</div>
                    <div className="wwica-title-full">West Wales Islamic Cultural Association & Masjid</div>
                </div>
            </div>
        )
    }

    /**
     * Display the links to the main pages. This to be used in the top navbar
     * 
     * @returns links to the main pages
     */
    links() {
        return (
            <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/school">Islamic Education</Nav.Link>
                <Nav.Link href="/zakat">Zakat</Nav.Link>
            </>
        )
    }


    /**
     * Display the donate button.  This to be used in the top navbar
     * 
     * @returns the donate button
     */
    donateButton() {
        return (
            <Button variant="success" className="btn-donate">Donate</Button>
        )
    }


    render() {
        return (
            <div className="shadow mb-5 bg-white wwica-top-nav">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <this.icon></this.icon>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="wwica-nav">
                                <this.links></this.links>
                            </Nav>
                        </Navbar.Collapse>

                        <this.donateButton></this.donateButton>
                    </Container>
                </Navbar>

            </div>
        )
    }

}

export default Header;