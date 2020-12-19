import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from 'reactstrap'

const Webmail = () => {
    return (
        <Layout>
            <SEO
                pageTitle="Webmail"
                description="Webmail"
                keywords="Webmail"
            />
            <Container>
                <h1>Web Mail</h1>
                <hr />
                <Link to="/">Back to home page</Link>
            </Container>
        </Layout>
    )
}

export default Webmail
