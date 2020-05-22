

const Footer = () => {
    return (
        <>
            <footer className="d-flex justify-content-center align-items-center">
                <p>© 2020 <b>Plataforma Expediente Médico</b>.Todos Los Derechos Reservados.{' '}</p>
            </footer>

            <style jsx>{`
            footer {
                background:#333333;
                padding: 20px;
            }
            p {
                margin:0;
                padding: 0;
                text-align: center;
                color: #ffffff;
            }
            `}</style>
        </>
    )
};

export default Footer;