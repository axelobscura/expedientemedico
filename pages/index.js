import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div>

      <Header />

      <Container class="inicio" fluid>
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
          min-height: 100vh;
          width: 100%;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        },
        .inicio h2 {
          text-align: center;
        }
      `}</style>

    </div>
  )
}
