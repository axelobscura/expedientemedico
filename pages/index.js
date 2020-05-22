import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div>

      <Header />

      <Container className="d-flex vh-100 justify-content-center align-item-center">
        <Row>
          <Col xs={6}>
            <h2>hola.</h2>
          </Col>
          <Col xs={6}>
            <h2>hola.</h2>
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

    </div>
  )
}
