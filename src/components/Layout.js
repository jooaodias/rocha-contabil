import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Menu/Header';
import Footer from './Footer/footer';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  height: 100vh;
  /* position: fixed; */
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata { 
            title
          }
        }
      }
    `}
    render={data => (
      <ContainerStyled>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Header />
        <div style={{ marginTop: '24px', paddingBottom: '120px'}}>
          {children}
        </div>
        <Footer />
      </ContainerStyled>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
