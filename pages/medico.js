import Link from 'next/link';
import Header from './layouts/Header';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import Container from 'react-bootstrap/Container';
import { FaChevronRight } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Paciente() {
    return (
        <div>
            <Header />
            <Menu />
            <Container fluid>
                <Row className="titulo">
                    <Col>
                        <h2 className="d-flex align-items-center"><FaChevronRight style={{ fontSize: '1rem', margin: '0', padding: '0' }} /> PROFESIONAL DE LA SALUD</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <ul>
                            <li><Link href="/">Agendar Cita</Link></li>
                            <li><Link href="/">Directorio Pacientes</Link></li>
                            <li><Link href="/">Directorio Médico</Link></li>
                            <li><Link href="/">Recetas</Link></li>
                            <li><Link href="/">Farmacias</Link></li>
                            <li><Link href="/">Mensajes</Link></li>
                            <li><Link href="/">Resultados</Link></li>
                            <li><Link href="/">Teleconsulta</Link></li>
                            <li><Link href="/">Administración</Link></li>
                            <li><Link href="/">Facturación</Link></li>
                        </ul>
                    </Col>
                    <Col sm={9}>
                        CONTENIDO
                    </Col>
                </Row>
            </Container>
            <Footer />

            <style jsx global>{`
                ul {
                    list-style: none;
                    padding: 0;
                }
                ul li a {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    margin-top:2px;
                    background: #64B7DD;
                    color: #ffffff;
                    font-weight: 100;
                    transition: all 0.5s;
                }
                ul li a:hover {
                    background: #283C5B;
                    color: #ffffff;
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}

export default Paciente;