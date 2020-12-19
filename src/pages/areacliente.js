import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from 'reactstrap'

const Areacliente = () => {
    return (
        <Layout>
            <SEO
                pageTitle="Área cliente"
                description="Areacliente"
                keywords="Areacliente"
            />
            <Container>
                <h1>Área do Cliente</h1>
                <hr />
                <Link to="/">Back to home page</Link>
            </Container>
        </Layout>
    )
}

export default Areacliente
