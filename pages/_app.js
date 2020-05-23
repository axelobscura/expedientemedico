// ensure all pages have Bootstrap CSS

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

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
                if (usuario.correo === nombre) {
                    console.log('si hay usuario');
                    var usuarioActivo = { ...this.state.usuarioActivo }
                    usuarioActivo.email = nombre;
                    usuarioActivo.tipo = usuario.tipo
                    this.setState({ usuarioActivo }, () => {
                        console.log("Usuario activo: " + JSON.stringify(this.state.usuarioActivo));
                        Router.push('/medico')
                    });
                } else {
                    console.log('no hay usuario...');
                }
            })

        }

        return (
            <Container>
                <Component {...pageProps} {...this.state} />
            </Container>
        )
    }
}