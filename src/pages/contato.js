import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { faCalendarCheck, faEnvelope, faMapMarked, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

const Contato = () => {
    return (
        <Layout>
            <SEO
                pageTitle="Contato"
                description="Entre em Contato com Rocha Contabil. (19) 3461-6073"
                keywords="Contato"
            />
            <Container>
                <h1>Entre em Contato</h1>
                <hr />
                <Row xs="1" md="3">
                    <Col>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Horário de Funcionamento <FontAwesomeIcon className="float-right" icon={faCalendarCheck} size="1x" title="Calendário" /></CardTitle>
                            <CardText>
                                <b>Atendendemos às Segunda-Feiras às Sextas-Feiras</b>
                                <br></br>
                                <b>Horário: </b>das 7:30 às 11:00 e das 12:30 às 17:00h
                        </CardText>

                        </Card>
                    </Col>
                    <Col>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Localização do Escritório <FontAwesomeIcon className="float-right" icon={faMapMarked} size="1x" title="Localização Mapa" /></CardTitle>
                            <CardText>
                                <b>Endereço: </b>Rua Sete de Setembro, 1058, Centro em Americana-SP<br />
                                <b>CEP: </b> 13465-320
                                <br />
                                <section className="float-right">
                                    <a href="https://www.google.com/maps/place/R.+Sete+de+Setembro,+1058+-+Centro,+Americana+-+SP,+13465-320/@-22.7435139,-47.3350229,17z/data=!3m1!4b1!4m5!3m4!1s0x94c89bd31f0ed369:0xe88f0a45c28b0cad!8m2!3d-22.7435139!4d-47.3328342" target="_blank" rel="noreferrer">
                                        Clique aqui <FontAwesomeIcon className="mt-1" icon={faMapMarkerAlt} size="1x" />
                                    </a>
                                </section>
                            </CardText>
                        </Card>
                    </Col>

                    <Col>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Contato <FontAwesomeIcon icon={faPhoneAlt} className="float-right" size="1x" title="Telefone" /></CardTitle>
                            <CardText>
                                <b>Fone: </b>(19) 3461-6073<br />
                                <b>Fax: </b> (19) 3461-5943<br />
                                <b>E-mail: </b>rocha@acia.com.br<br />
                                <a href="mailto:rocha@acia.com.br" className="float-right">
                                    Mande um E-mail <FontAwesomeIcon className="mt-1" icon={faEnvelope} size="1x" title="Envie um Email" />
                                </a>
                            </CardText>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </Layout>
    )
}

export default Contato
