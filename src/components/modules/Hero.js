import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

export default function Hero(props) {
    const sequence = ['Fullstack Developer', 'Another thing', 'Another thing1', 'Another thing2'];
    const interval = 1000,
    speed = 200;

    return (
        <Container id="home" fluid className="d-flex align-items-center justify-content-between vh-100 primary-background hero-offset">
            <Col md={8} className="custom-offset introduction">
                <h3>Hello World, <img className="vertical-align-unset" width="29px" src="/assets/Hello.gif"></img></h3>
                <h1>My name is <span>Carson Lenze</span></h1>
                <h3>And I am a <TypeAnimation sequence={sequence.flatMap(item => [item, interval])} wrapper="span" speed={speed} repeat={Infinity} /></h3>
                <p>From very early on in my life, I loved computers and technology. This has helped me develop a very good technological mindset, and given me the curiosity to learn more.</p>
                <br />
            </Col>
            <Col md={6} className='d-none d-md-block'>
                <div>
                    <h1>Picture</h1>
                </div>
            </Col>
        </Container>
    )
}