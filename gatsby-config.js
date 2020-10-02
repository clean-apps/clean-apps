module.exports = {
  siteMetadata: {
    title: `Clean Apps`,
    description: `Minimalist Open Source Productivity Tools`,
    siteUrl: `https://clean-apps.github.io/`,
    author: `@MrShouvikBasu`,
    github: {
      cleanapps: `https://github.com/clean-apps`,
      cleanscan: `https://github.com/clean-apps/CleanSCAN`,
      cleanlauncher: `https://github.com/clean-apps/CleanLauncher`,
      cleanhabits: `https://github.com/clean-apps/CleanHabits`,
      cleantodo: `https://github.com/clean-apps/CleanToDO`,
    },
    playStore: {
      cleanapps: `https://play.google.com/store/apps/developer?id=Shouvik+Basu`,
      cleanscan: `https://play.google.com/store/apps/details?id=com.babanomania.pdfscanner`,
      cleanlauncher: `https://play.google.com/store/apps/details?id=com.babanomania.CleanLauncher`,
      cleanhabits: `https://play.google.com/store/apps/details?id=com.babanomania.CleanHabits`,
      cleantodo: `https://play.google.com/store/apps/details?id=com.babanomania.cleantodo`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-landing-page-starter`,
        short_name: `landing`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
};
