module.exports = {
  siteMetadata: {
    title: `RMMC & RDC`,
    fullTitle: `RM Mangubat Construction & Realty Development Corporation`,
    description: `Engaged in Site Developing, General Building Constructions, Repair/Renovation of Buildings, etc.`,
    about: `We're (A CORPORATION) has been a transition of a sole proprietorship owned and operated by DR. RICHARD MANGUBAT of R.M. MANGUBAT CONSTRUCTION in Year 2015.`,
    email: `rmmangubat1@gmail.com`,
    social: {
      facebook: `https://facebook.com/tanpelconstruction`,
      twitter: `https://twitter.com/tanpelconstruction`,
      instagram: `https://instagram.com/tanpelconstruction`,
      linkedin: `https://linkedin.com/in/tanpelconstruction`,
    },
    contact: {
      mobile: `(+63) 912 345 6789`,
      telephone: `(02) 123 4567`,
    },
    address: `Bermuda Subd., Pamplona 3, Las Pinas City, Philippines, 1740`,
    opening: {
      day: `Monday - Friday`,
      hour: `8:00am - 5:00pm`,
    },

    author: {
      name: `Mark Dino Pelonia`,
      position: `Web Developer`,
      email: `markdinopelonia447@gmail.com`,
      contact: `(+63) 946 290 9678`,
      website: `https://markdino.github.io/portfolio`,
    },
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brand-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
