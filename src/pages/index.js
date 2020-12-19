import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

const Home = () => {
  return (
    <Layout>
      <SEO
        description="Rocha Contabil! Com mais de 40 anos de experiência e muito trabalho"
        keywords="Contabilidade, contabil, rocha, Americana, financeiro"
      />
      <Container>
        <h1>Rocha Contábil Ltda</h1>
        <hr />

        <section>
          <h6>Teste de Icone</h6>
          <a href="https://www.instagram.com/newenglandservices/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBriefcase} size="2x" title="Instagram" />
          </a>
        </section>

        <Link to="/test">Go to test</Link>
      </Container>
    </Layout>
  )
};

export default Home;
