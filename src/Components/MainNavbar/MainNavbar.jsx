import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

function MainNavbar() {
    return (
        <Navbar expand="lg" className="bg-primary navbar-dark ">
            <Container>
                <NavLink to="/" className="navbar-brand ">
                    <img src={logo} alt="" className='image-fluid' />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                        <NavLink to="/faculty" className="nav-link">Faculty</NavLink>
                        <NavLink to="/program" className="nav-link">Program</NavLink>
                        <NavLink to="/notice" className="nav-link">Notice</NavLink>
                        <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        <NavLink to="/apply" className="btn btn-light">Apply</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;