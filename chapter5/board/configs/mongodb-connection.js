const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://mymongo:test1234@cluster0.c4xru.mongodb.net/board";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
