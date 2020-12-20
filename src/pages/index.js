import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Container } from 'reactstrap';
import styled from 'styled-components';

const TextStyled = styled.section`
    font-size: 1.1rem;
    margin-bottom: 24px;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #354678 !important;
    font-weight: bold;

    &:hover{
       text-decoration: underline; 
       color: #5C98FF !important;
       cursor: pointer;
    }
`

const Home = () => {
  return (
    <Layout>
      <SEO
        description="Rocha Contabil! Com mais de 40 anos de experiência e muito trabalho"
        keywords="Contabilidade, contabil, rocha, Americana, financeiro"
      />
      <Container>
        <h1>Rocha Contábil</h1>
        <hr />
        <TextStyled>Escritório que trabalha com muita seriedade e ética para te ajudar em diversos contextos na área da contabilidade. Contamos com uma equipe totalmente capacitada e experiente para te atendermos. Venha nos conhecer! 

        <ul className="mt-2" style={{fontSize: '1.0rem'}}>
          <li><LinkStyled to="/contato">Para entrar em contato conosco</LinkStyled></li>
          <li><LinkStyled to="/sobre">Sobre a Empresa</LinkStyled></li>
          <li><LinkStyled to="/webmail">WebMail Rocha</LinkStyled></li>
          <li><LinkStyled to="/areacliente">Área do Cliente (ainda em desenvolvimento)</LinkStyled></li>
        </ul>

        </TextStyled>

        
      </Container>
    </Layout>
  )
};

export default Home;
