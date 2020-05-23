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
            sm={12}
            className="d-flex vh-100 justify-content-center align-items-center text-center">
            <form>
              <h3>EXPEDIENTE MÉDICO</h3>
              <hr />
              <div className="form-group">
                <label>Correo Electrónico:</label>
                <input type="email" className="form-control" placeholder="Ingresar su Email" />
              </div>

              <div className="form-group">
                <label>Contraseña:</label>
                <input type="password" className="form-control" placeholder="Ingresar Contraseña" />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                </div>
              </div>

              <Row className="mb-3">
                <Col sm={6}>
                  <Link href="/medico"><button type="submit" className="btn btn-primary btn-block">DOCTOR</button></Link>
                </Col>
                <Col sm={6}>
                  <Link href="/paciente"><button type="submit" className="btn btn-primary btn-block">PACIENTE</button></Link>
                </Col>
              </Row>


              <p className="forgot-password text-right">
                Olvidé <a href="#">contraseña?</a>
              </p>
            </form>
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
        form {
          box-shadow: 0 0 10px #ccc;
          padding: 50px;
          text-align: left;
        }
      `}</style>

    </>
  )
}
