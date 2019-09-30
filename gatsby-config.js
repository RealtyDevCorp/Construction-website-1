module.exports = {
  siteMetadata: {
    title: `RMMC & RDC`,
    fullTitle: `RM Mangubat Construction & Realty Development Corporation`,
    description: `Engaged in Site Developing, General Building Constructions, Repair/Renovation of Buildings, etc.`,
    about: `The Corporation builds in the year 2015 for a family ownership. In
    response to the rapid momentum, and wanting to ensure a continued
    focus on core principles, company leaders drafted a process known
    as RMMC & RDC ideas`,
    email: `rmmangubat1@gmail.com`,
    social: {
      facebook: `https://facebook.com/rmconstruction.rdc`,
      twitter: `https://twitter.com/rmconstruction.rdc`,
      instagram: `https://instagram.com/rmconstruction.rdc`,
      linkedin: `https://linkedin.com/in/rmconstruction.rdc`,
    },
    contact: {
      mobile: `(+63) 915 793 6054`,
      telephone: `8810 9956`,
    },
    address: `2/F, B1, L-6 Doña Manuela Ave., Doña Manuela Subd., Pamplona 3, Las Pinas City`,
    map: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15453.921279293736!2d120.9782487!3d14.4570865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e9597083afb6942!2sR.M.%20Mangubat%20Construction!5e0!3m2!1sen!2sph!4v1567173405861!5m2!1sen!2sph`,
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
    `gatsby-transformer-json`,
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
