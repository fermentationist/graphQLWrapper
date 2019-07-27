const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    buildSchema,
    printSchema,
} = require("graphql");
const RootQuery = require("./RootQuery.js");
const RootMutation = require("./RootMutation.js");

const Schema = new GraphQLSchema({
    query: RootQuery, 
    mutation: RootMutation
});

module.exports = Schema;
// printSchema(Schema)
