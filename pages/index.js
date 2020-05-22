import Link from 'next/link';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>

      <Header />

      <Container fluid>
        <Row className="d-flex vh-100 justify-content-center align-items-center text-center">
          <Col
            sm={6}
            className="d-flex vh-100 justify-content-center align-items-center text-center"
            style={{ background: '#d2d2d2' }}>
            <Link href="/medico"><h2>PROFESIONALES DE LA SALUD</h2></Link>
          </Col>
          <Col
            sm={6}
            className="d-flex vh-100 justify-content-center align-items-center text-center"
            style={{ background: '#f1f1f1' }}>
            <Link href="/paciente"><h2>PACIENTE / USUARIO</h2></Link>
          </Col>
        </Row>
      </Container>

      <Footer />

      <style jsx>{`
        .inicio {
          min-height: 100vh !important;
          width: 100%;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

    </>
  )
}
