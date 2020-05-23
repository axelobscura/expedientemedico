import Header from './layouts/Header';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import { FaChevronRight } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contacto = () => {
    return (
        <>
            <Header />
            <Menu />
            <Container fluid>
                <Row>
                    <Col className="p-0 m-0">
                        <h2 className="d-flex align-items-center"><FaChevronRight style={{ fontSize: '1rem', margin: '0', padding: '0' }} /> CONTACTO</h2>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default Contacto;