module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        pathToTheme: "src/themes/default"
      }
    }
  ]
};
