// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async store => {
    const { data } = await axios.get(
      `https://api.airtable.com/v0/${
        process.env.AIRTABLE_BASE
      }/Movies?api_key=${process.env.AIRTABLE_API_KEY}`
    );

    const contentType = store.addContentType({
      typeName: "Airtable"
    });

    for (const item of data.records) {
      contentType.addNode({
        id: item.id,
        ...item.fields
      });
    }
  });
};
