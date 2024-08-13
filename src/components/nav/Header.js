import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function Header() {

    const duration = 150;

    return (
        <Navbar sticky="top" className='custom-header' expand="lg" variant="dark">
            <Container fluid>
            <Navbar.Brand className='nav-brand'>
            <img
              alt="B"
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{''}
            ootstrap
          </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas
                    placement="end"
                    data-bs-theme="dark"
                    className="secondary-background custom-offcanvas"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title as="h1">
                            Quick Links
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link
                                to="home"
                                smooth={true}
                                duration={duration}
                                spy={true}
                                activeClass="active"
                                className="nav-link"
                            >
                                Home
                            </Link>

                            <Link
                                to="about"
                                smooth={true}
                                duration={duration}
                                spy={true}
                                activeClass="active"
                                className="nav-link"
                            >
                                About
                            </Link>

                            <Link
                                to="skills"
                                smooth={true}
                                duration={duration}
                                spy={true}
                                activeClass="active"
                                className="nav-link"
                            >
                                Skills
                            </Link>

                            <Link
                                to="projects"
                                smooth={true}
                                duration={duration}
                                spy={true}
                                activeClass="active"
                                className="nav-link"
                            >
                                Projects
                            </Link>

                            <Link
                                to="contact"
                                smooth={true}
                                duration={duration}
                                spy={true}
                                activeClass="active"
                                className="nav-link"
                            >
                                Contact
                            </Link>
                        </Nav>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}