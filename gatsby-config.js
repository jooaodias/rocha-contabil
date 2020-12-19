module.exports = {
  siteMetadata: {
    title: 'Rocha Contabil',
    author: '@diias_jooao',
    siteUrl: 'https://www.rochacontabil.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icone.svg',
        theme_color: '#CD2727',
        display: 'minimal-ui'
      },
    },
    'gatsby-plugin-offline',
  ],
};
