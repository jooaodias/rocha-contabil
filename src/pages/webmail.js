import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const LinkStyled = styled.a`
    text-decoration: none;
    color: blue !important;

    &:hover{
       text-decoration: underline; 
       color: #4F4F4F !important;
    }
`

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
                <p style={{fontSize: '1.1rem'}}>Para acessar o Web Mail Rocha 
                <LinkStyled title="WebMail Rocha" tag="a" href="http://webmail.rochacontabil.com.br/" target="_blank" rel="noreferrer">
                    {' '}clique aqui <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </LinkStyled>
                </p>
            </Container>
        </Layout>
    )
}

export default Webmail
