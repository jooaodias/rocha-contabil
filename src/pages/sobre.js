import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { Container, Row } from 'reactstrap'

const Sobre = () => {
    return (
        <Layout>
            <SEO
                pageTitle="Sobre"
                description="Rocha Contabil! Com mais de 40 anos de experiência e muito trabalho"
                keywords="Contabilidade, contabil, rocha, Americana, financeiro"
            />
            <Container>
                <h1>Sobre a Empresa</h1>
                <hr />
                <p>O Escritório Rocha Organização Contábil Ltda, atua na prestação de serviços contábeis desde Abril de 1978. Nesse período edificou tradição e confiança perante os seus clientes, baseada em uma postura ética, dinâmica e profissional. Fornece serviços diversos na área de contabilidade que vão desde a abertura de uma empresa, passando pela escrituração fiscal, departamento pessoal e assessoramento. Hoje conta com mais de 200 clientes concentrados na região metropolitana Campinas-SP.  </p>
                <Row className="justify-content-center">
                    <figure>
                        <StaticQuery
                            query={
                                graphql`
                                query {
                                file(relativePath: { eq: "rocha_contabil.jpg" }) {
                                    childImageSharp {
                                    fixed(width: 230, height: 230) {
                                        ...GatsbyImageSharpFixed
                                    }
                                    }
                                }
                                }
                        `}
                            render={data => (
                                <Img
                                    fixed={data.file.childImageSharp.fixed}
                                    imgStyle={{ borderRadius: '10px' }}
                                    alt="Rocha Contabilidade"
                                />
                            )}

                        />
                    </figure>
                </Row>
            </Container>
        </Layout>
    )
}

export default Sobre
