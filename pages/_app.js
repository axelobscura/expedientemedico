// ensure all pages have Bootstrap CSS

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
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
        usuarioActivo: {
            email: "",
            tipo: ""
        },
        usuarios: [
            {
                id: 1,
                nombre: "John",
                apellido: "Smith",
                correo: "john@mail.com",
                password: "12345",
                tipo: "medico"
            },
            {
                id: 1,
                nombre: "Bob",
                apellido: "Smith",
                correo: "bob@mail.com",
                password: "Smith",
                tipo: "paciente",
                doctor: "1"
            }
        ]
    };



    render() {
        const { Component, pageProps } = this.props;

        let tipo = (e) => {
            e.preventDefault();
            let nombre = e.target.email.value;
            let password = e.target.password.value;

            this.state.usuarios.map(usuario => {
                if (nombre == usuario.correo) {
                    this.setState(prevState => {
                        let usuarioActivo = { ...prevState.usuarioActivo };
                        usuarioActivo.email = nombre;
                        return { usuarioActivo };
                    })
                }
            })

            console.log("Uausrio activo: " + this.state.usuarioActivo.email);
        }

        return (
            <Container>
                <Component {...pageProps} {...this.state} tipo={tipo} />
            </Container>
        )
    }
}