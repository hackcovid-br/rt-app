module.exports = {
  plugins: [
    `gatsby-env-variables`,
    `gatsby-alias-imports`,
    `gatsby-plugin-offline`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
    `gatsby-plugin-styled-components`,
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
        icon: `static/images/logo.png`,
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
