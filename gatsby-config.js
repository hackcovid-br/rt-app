module.exports = {
  plugins: [
    `gatsby-env-variables`,
    `gatsby-alias-imports`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
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
        includePaths: [__dirname + '/src/styles'],
        data: '@import "./src/styles/internal";',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173763785-1",
        head: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "hackcovid.com.br",
      },
    },
  ],
}
