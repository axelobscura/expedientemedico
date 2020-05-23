import Link from 'next/link';
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
                        <h2>MÉDICO</h2>
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
                }
            `}</style>
        </div>
    )
}

export default Paciente;