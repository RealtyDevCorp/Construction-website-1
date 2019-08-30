module.exports = {
  siteMetadata: {
    title: `RMMC & RDC`,
    fullTitle: `RM Mangubat Construction & Realty Development Corporation`,
    description: `Engaged in Site Developing, General Building Constructions, Repair/Renovation of Buildings, etc.`,
    about: `We're (A CORPORATION) has been a transition of a sole proprietorship owned and operated by DR. RICHARD MANGUBAT of R.M. MANGUBAT CONSTRUCTION in Year 2015.`,
    email: `rmmangubat1@gmail.com`,
    social: {
      facebook: `https://facebook.com/rmconstruction.rdc`,
      twitter: `https://twitter.com/rmconstruction.rdc`,
      instagram: `https://instagram.com/rmconstruction.rdc`,
      linkedin: `https://linkedin.com/in/rmconstruction.rdc`,
    },
    contact: {
      mobile: `(+63) 912 345 6789`,
      telephone: `(02) 123 4567`,
    },
    address: `Bermuda Subd., Pamplona 3, Las Pinas City, Philippines, 1740`,
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.590531801578!2d120.92931831483857!3d14.450745589898093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d282c1782f4f%3A0x62e247641b50bd21!2sBermuda%20Country%20Subdivision%2C%20Bacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1566970336076!5m2!1sen!2sph`,
    opening: {
      day: `Monday - Saturday`,
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
