import { Container } from 'react-bootstrap';

export default function Hero(props) {

    return (
        <Container id="home" fluid className="d-flex align-items-center justify-content-center vh-100 primary-background">
            <div>
                <h1>Hero area</h1>
                <p>This container takes up the full height of the screen.</p>
            </div>
        </Container>
    )
}