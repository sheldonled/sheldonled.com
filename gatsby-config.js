require('dotenv').config();
const clientConfig = require('./clientConfig');

module.exports = {
  siteMetadata: {
    title: 'Sheldon Led',
    siteUrl: 'https://sheldonled.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Inconsolata'],
        variants: ['400', '700'],
        subsets: ['latin-ext'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/logo.svg',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
