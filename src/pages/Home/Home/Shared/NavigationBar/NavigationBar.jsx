import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { authContext } from '../../../../../providers/AuthProvider';
import { useContext } from 'react';

const NavigationBar = () => {
    const { user } = useContext(authContext)

    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>


                        </Nav>
                        <Nav>
                           {user && <FaUserCircle style={{ fontSize: '2rem' }} />}

                          { user? <Button variant="secondary">Log Out</Button>: <Link to='/login'><Button variant="secondary">Login</Button></Link>}
                         

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;