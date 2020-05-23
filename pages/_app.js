// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    };

    state = {
        usuario: {
            medico: {
                id: 1,
                nombre: "John",
                apellido: "Smith",
                password: "12345",
                tipo: "Médico Cirujano"
            },
            paciente: {
                id: 1,
                nombre: "Bob",
                apellido: "Smith",
                password: "Smith",
                tipo: "Paciente",
                doctor: "1"
            }
        }
    };

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component {...pageProps} {...this.state} />
            </Container>
        )
    }
}