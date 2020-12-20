import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
    return (
        <footer className="footer mt-5 py-1 fixed-footer" style={{backgroundColor: "#3168A3",width: '100%', position: 'fixed', bottom: '0'}}>
            <Container>
                <p className="mt-4 mb-4" style={{color: "white",textAlign: "center", fontWeight: 'bold'}}>&copy; Copyright by Rocha Contábil Ltda <br />Desenvolvido por <i><a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-aleixo-dias-2677bb186/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#1a1717'}} title="LinkedIn">João Dias</a></i></p>
            </Container>
        </footer>
    )
}

export default Footer
