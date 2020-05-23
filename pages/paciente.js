import Header from './layouts/Header';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Paciente() {
    return (
        <div>
            <Header />
            <Menu />
            <Container fluid>
                <Row>
                    <Col>
                        <h2>PACIENTE</h2>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Paciente;