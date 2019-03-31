// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(store => {
    // store.addMetaData("author", "Matthew Jason Craig");
    // store.addMetaData(
    //   "title",
    //   "Matthew Jason Craig - Digital Designer &amp; Developer"
    // );
    // store.addMetaData(
    //   "desc",
    //   "An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels."
    // );
    // store.addMetaData("url", "https://www.matthewjasoncraig.com");
  });
};
