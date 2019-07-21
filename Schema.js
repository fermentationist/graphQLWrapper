const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require("graphql");
const QueryRoot = require("./QueryRoot.js");

console.log("graphql:", graphql);

const schema = {
    query: QueryRoot
};
module.exports = new GraphQLSchema(schema);