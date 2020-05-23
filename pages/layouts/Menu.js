import { Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Nav
            activeKey="/"
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
    )
}

export default Menu;