import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

export default function Hero(props) {

    return (
        <Container id="home" fluid className="d-flex align-items-center justify-content-center vh-100 primary-background hero-offset">
            <Row className="w-100">
                <Col md={6} className="d-flex align-items-start justify-content-start custom-offset">
                    <div>
                        <h3>Hello World, </h3>
                        <h5>My name is</h5>
                        <h2>Carson Lenze</h2>
                        <h5>And I am a (typer)</h5>
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Fullstack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Another thing',
        1000,
        'Another thing1',
        1000,
        'Another thing2',
        1000
      ]}
      wrapper="span"
      speed={200}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='typer'
    />
    <br />
                        <p>From very early on in my life, I loved computers and technology. This has helped me develop a very good technological mindset, and given me the curiosity to learn more.</p>
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div>
                        <h1>Picture</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}