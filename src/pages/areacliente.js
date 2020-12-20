import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'

const Areacliente = () => {
    return (
        <Layout>
            <SEO
                pageTitle="Área cliente"
                description="Areacliente"
                keywords="Areacliente"
            />
            <Container>
                <h1>Área do Cliente <FontAwesomeIcon icon={faUser} size="1x" color="#2E58B3"/></h1>
                <hr />
                <Col sm="12" className="text-center my-auto">
                    <div className="display-4 mb-3">
                        <FontAwesomeIcon icon={faSpinner} spin color="#2E58B3"/>
                    </div>
                    <p>Ainda em desenvolvimento...</p>
                </Col>
            </Container>
        </Layout>
    )
}

export default Areacliente
