const {graphql} = require("graphql");
const Schema = require("./Schema.js");
console.log("graphql:", graphql);
const query = `{ hello }`;

graphql(Schema, query).then(result => console.log(result));