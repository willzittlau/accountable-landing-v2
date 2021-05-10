const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withPlugins([
  [optimizedImages],
  {
    target: "serverless",
  },
]);
