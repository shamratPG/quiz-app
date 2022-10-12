import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className='nav-link' to='/'>Web Dev Quiz</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='w-100 d-flex justify-content-end'>
                        {/* <Nav.Link>

                            <Link className='nav-link' to='/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>

                            <Link className='nav-link' to='/blogs'>Blogs</Link>
                        </Nav.Link>
                        <Nav.Link>

                            <Link className='nav-link' to='/stats'>Stats</Link>
                        </Nav.Link> */}

                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/blogs'>Blogs</Link>
                        <Link className='nav-link' to='/stats'>Statistics</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;