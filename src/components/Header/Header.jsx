import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faPhone, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className='header'>
            <Navbar  bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#"><FontAwesomeIcon className="text-success" icon={faBookOpen} />  EDUCATION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 navs-item my-sm-0" navbarScroll>
                            <Nav.Link><Link className="text-decoration-none fw-bold text-dark" to="/home" >Home</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none fw-bold text-dark" to="/about" >About</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none fw-bold text-dark" to="/courses" >Courses</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none fw-bold text-dark" to="/Testimonial" >Testimonial</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none fw-bold text-dark" to="/blog" >Why us?</Link></Nav.Link>
                            <div className="nav-right mt-1 d-flex align-items-center">
                                <p className="gap-2"><FontAwesomeIcon className="text-success" icon={faPhone} /> +(91) 0123456789</p>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;