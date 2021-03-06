import Header from './layouts/Header';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import { FaChevronRight } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Paciente(props) {
    return (
        <div>
            <Header />
            <Menu {...props} />
            <Container fluid>
                <Row>
                    <Col className="p-0 m-0">
                        <h2 className="d-flex align-items-center"><FaChevronRight style={{ fontSize: '1rem', margin: '0', padding: '0' }} /> PACIENTE</h2>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Paciente;