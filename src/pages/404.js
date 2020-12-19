import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <section className="section">
      <h1>404: Página não encontrada!</h1>
      <p className="has-text-centered">
        Você clicou em uma rota que não existe.
        {' '}
        <span role="img" aria-label="confused">
          😕
        </span>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;