module.exports = {
  siteMetadata: {
    title: `Dundee JS`,
    description: `Happening on the last Wednesday at 18:30 each month we convene to talk JavaScript, share projects and ideas, pair program and get to know other JavaScripters.`,
    author: `@dundeejs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dundee JS`,
        short_name: `Dundee JS`,
        start_url: `/`,
        scope: '/',
        background_color: `#000`,
        theme_color: `#F7DF1E`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
