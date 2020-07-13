var contentful = require("contentful");

var client = contentful.createClient({
  accessToken: "DS7KfMVF1VLXe8ynPoyY6QH5EfoOzqK2Gou1F_HTc9g",
  space: "25l2wnuwupd4",
});

exports.client = client;
