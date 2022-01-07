module.exports = {
  siteMetadata: {
    title: "Smakelijk Roosendaal",
    description: "Wij houden net als u van uit eten gaan! Daarom zijn wij op een missie alle restaurants in Roosendaal te bezoeken en eerlijk te beoordelen.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        schema: {
          timeout: 100000
        },
        url: "http://smakelijk-roosendaal.local/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Vollkorn:400,700`],
        display: 'swap'
      }
    },
  ],
}
