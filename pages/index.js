import Header from './layouts/Header';
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

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2020 Todos Los Derechos Reservados.{' '}
        </a>
      </footer>

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
