import Head from 'next/head';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Head>
                <title>EXPEDIENTE MÉDICO</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700"
                    rel="stylesheet">
                </link>
            </Head>

            <Nav
                activeKey="/"
            //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/paciente">Paciente</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/medico">Médico</Nav.Link>
                </Nav.Item>
            </Nav>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: 'Quicksand', sans-serif;
                }
            `}</style>
        </div>
    )
}

export default Header;