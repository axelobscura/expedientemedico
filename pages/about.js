import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <div className="container">
            <Head>
                <title>EXPEDIENTE MÉDICO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Row>
                    <Col>
                        <h2>ABOUT</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;