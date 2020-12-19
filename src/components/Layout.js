import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header';
import { Header } from './Menu/Header';
import Footer from './Footer/footer';

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
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Header />
        <div style={{marginTop: '24px'}}>
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
