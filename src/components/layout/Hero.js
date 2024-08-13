import { Container } from 'react-bootstrap';

export default function Hero(props) {

    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
            <div>
                <h1>Hero area</h1>
                <p>This container takes up the full height of the screen.</p>
            </div>
        </Container>
    )
}