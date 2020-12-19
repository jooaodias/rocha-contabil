import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
    return (
        <footer className="footer mt-5 py-1" style={{backgroundColor: "#4593EE", position: 'absolute', width: '100%'}}>
            <Container>
                <p className="mt-4 mb-4" style={{color: "white",textAlign: "center"}}>&copy;    Copyright by Rocha Contábil Ltda - Desenvolvido por <i><a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-aleixo-dias-2677bb186/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'black'}} title="LinkedIn">João Dias</a></i></p>
            </Container>
        </footer>
    )
}

export default Footer
