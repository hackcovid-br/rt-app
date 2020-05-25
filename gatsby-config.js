module.exports = {
  siteMetadata: {
    title: `HackCovid`,
    siteUrl: `https://hackcovid.com.br`,
    description: `HackCovid é um projeto social que tem como objetivo auxiliar na diminuição do impacto do covid-19.`,
    menuLinks: [
      {
        name: 'Rt',
        link: '/'
      },
    ]
  },
  plugins: [
    `gatsby-env-variables`,
    `gatsby-alias-imports`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HackCovid`,
        short_name: `HackCovid`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#980001`,
        display: `minimal-ui`,
        icon: `static/images/favicon16.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/src/styles`],
        data: `@import "${__dirname}/src/styles/internal";`,
      },
    },
  ],
}
