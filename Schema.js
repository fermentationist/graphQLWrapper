const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    buildSchema
} = require("graphql");
const RootQuery = require("./RootQuery.js");

console.log("graphql:", graphql);

const schema = {
    query: RootQuery, 
};

module.exports = new GraphQLSchema(schema);