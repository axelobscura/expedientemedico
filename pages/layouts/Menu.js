import { Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <>
            <Nav
                activeKey="/"
                className="menu"
            //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/medico">Médico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/paciente">Paciente</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav.Item>
            </Nav>
            <style global jsx>{`
                .menu {
                    background: #3C77B9;
                    color: #ffffff;
                }
                .menu a {
                    color: #ffffff;
                    text-transform: uppercase;
                    border-right: 1px solid #333;
                    trasnition: all 1s;
                }
                .menu a:hover {
                    background: #111111;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default Menu;