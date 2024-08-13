import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

export default function Header() {

    return (
        <Navbar sticky="top" className='custom-header' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title >
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}